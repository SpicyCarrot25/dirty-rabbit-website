#!/usr/bin/env python3
"""Compare visible elements/text and parsed JSON-LD to an independently built baseline."""
import json,re,sys
from pathlib import Path
from html.parser import HTMLParser
class Document(HTMLParser):
 def __init__(self,html):
  super().__init__(convert_charrefs=True);self.parts=[];self.schemas=[];self.script=None;self.scripts=[];self.feed(html)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='script':self.script=a.get('type','javascript');self.scripts.append('');return
  if tag in ['style']:self.script='style';self.scripts.append('');return
  if tag=='link' and a.get('rel') in ['stylesheet','modulepreload']:return
  self.parts.append((tag, sorted((k,v) for k,v in attrs if not k.startswith('data-astro-'))))
 def handle_endtag(self,tag):
  if tag in ['script','style']:
   if self.script=='application/ld+json':
    try:self.schemas.append(json.loads(self.scripts[-1]))
    except Exception as e:self.schemas.append({'invalid':self.scripts[-1]})
   self.script=None;return
 def handle_data(self,text):
  if self.script:self.scripts[-1]+=text
  else:
   text=re.sub(r'\s+',' ',text).strip()
   if text:self.parts.append(text)
base=Path(sys.argv[1]);after=Path(sys.argv[2]);diffs=[]
for f in base.rglob('*.html'):
 rel=f.relative_to(base);a=Document(f.read_text());b=Document((after/rel).read_text())
 if a.parts!=b.parts or a.schemas!=b.schemas:
  import difflib
  diffs.append({'page':str(rel),'visible_equal':a.parts==b.parts,'schemas_equal':a.schemas==b.schemas,'diff':list(difflib.unified_diff([repr(v) for v in a.parts],[repr(v) for v in b.parts]))[:35]})
print(json.dumps({'checked':len(list(base.rglob('*.html'))),'differences':diffs},ensure_ascii=False,indent=2))

raise SystemExit(bool(diffs))
