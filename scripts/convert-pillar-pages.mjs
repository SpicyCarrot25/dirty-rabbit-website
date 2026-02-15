import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';
import { marked } from 'marked';

const DRAFTS_DIR = '/Users/spicycarrot/.openclaw/workspace/projects/dirty-rabbit/website/pillar-drafts';
const PAGES_DIR = '/Users/spicycarrot/.openclaw/workspace/projects/dirty-rabbit/website/site/src/pages';

const LANG_CONFIG = {
  es: { 
    dir: 'articulos', 
    label: 'ARTÍCULO',
    breadcrumbHome: 'Inicio',
    breadcrumbArticles: 'Artículos'
  },
  en: { 
    dir: 'en/articles', 
    label: 'ARTICLE',
    breadcrumbHome: 'Home',
    breadcrumbArticles: 'Articles'
  },
  ca: { 
    dir: 'ca/articles', 
    label: 'ARTICLE',
    breadcrumbHome: 'Inici',
    breadcrumbArticles: 'Articles'
  },
  fr: { 
    dir: 'fr/articles', 
    label: 'ARTICLE',
    breadcrumbHome: 'Accueil',
    breadcrumbArticles: 'Articles'
  }
};

function extractTitle(content) {
  const match = content.match(/^#\s+(.+?)(?:\s*—.*)?$/m);
  return match ? match[1].trim() : 'Untitled';
}

function extractDescription(content) {
  // Get first paragraph after title (italic text)
  const match = content.match(/^#[^\n]+\n+\*([^*]+)\*/m);
  if (match) {
    return match[1].trim().slice(0, 160);
  }
  // Fallback: first non-heading paragraph
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.trim() && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('-')) {
      return line.trim().slice(0, 160);
    }
  }
  return '';
}

function mdToHtml(content) {
  // Remove the title (first H1) as we render it separately
  const withoutTitle = content.replace(/^#\s+.+\n+/, '');
  
  // Convert markdown to HTML
  let html = marked.parse(withoutTitle);
  
  // Apply styling classes
  html = html
    // Style headings
    .replace(/<h2>/g, '<h2 class="font-typewriter text-2xl md:text-3xl mb-4 mt-12">')
    .replace(/<h3>/g, '<h3 class="font-typewriter text-xl mt-8 mb-4">')
    // Style paragraphs
    .replace(/<p>/g, '<p class="mb-4">')
    // Style lists
    .replace(/<ul>/g, '<ul class="space-y-2 mb-6 list-disc pl-6">')
    .replace(/<ol>/g, '<ol class="space-y-2 mb-6 list-decimal pl-6">')
    // Style tables
    .replace(/<table>/g, '<div class="overflow-x-auto mb-8"><table class="w-full font-mono text-sm">')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<thead>/g, '<thead class="border-b-2 border-black">')
    .replace(/<th>/g, '<th class="text-left py-3 pr-4">')
    .replace(/<td>/g, '<td class="py-3 pr-4 border-b border-black/20">')
    // Style blockquotes
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-red pl-4 italic my-6">')
    // Style horizontal rules
    .replace(/<hr>/g, '<hr class="my-8 border-black/20">');
    
  return html;
}

function generateAstroPage(mdContent, lang, slug) {
  const config = LANG_CONFIG[lang];
  const title = extractTitle(mdContent);
  const description = extractDescription(mdContent);
  const htmlContent = mdToHtml(mdContent);
  
  const baseUrl = lang === 'es' ? 'https://dirtyrabbit.es' : `https://dirtyrabbit.es/${lang === 'en' ? '' : lang + '/'}`;
  const articlesPath = lang === 'es' ? '/articulos/' : `/${lang}/articles/`;
  
  // Get layout path based on depth
  const depth = config.dir.split('/').length;
  const layoutPath = '../'.repeat(depth + 1) + 'layouts/Layout.astro';
  
  return `---
import Layout from '${layoutPath}';

const lang = '${lang}';
const title = \`${title.replace(/`/g, '\\`')}\`;
const description = \`${description.replace(/`/g, '\\`')}\`;

const breadcrumbs = [
  { name: '${config.breadcrumbHome}', url: '${lang === 'es' ? 'https://dirtyrabbit.es/' : 'https://dirtyrabbit.es/' + (lang === 'en' ? 'en/' : lang + '/')}' },
  { name: '${config.breadcrumbArticles}', url: '${lang === 'es' ? 'https://dirtyrabbit.es/articulos/' : 'https://dirtyrabbit.es/' + (lang === 'en' ? 'en/articles/' : lang + '/articles/')}' },
  { name: title, url: '${lang === 'es' ? 'https://dirtyrabbit.es/articulos/' : 'https://dirtyrabbit.es/' + (lang === 'en' ? 'en/articles/' : lang + '/articles/')}${slug}' }
];
---

<Layout 
  title={title}
  description={description}
  lang={lang}
  breadcrumbs={breadcrumbs}>

  <article class="py-16 md:py-24 bg-white">
    <div class="max-w-3xl mx-auto px-6">
      
      <!-- Header -->
      <header class="mb-12">
        <p class="font-mono text-sm text-red tracking-wider mb-4">${config.label}</p>
        <h1 class="font-typewriter text-4xl md:text-5xl lg:text-6xl mb-6">
          ${title}
        </h1>
      </header>

      <!-- Main Content -->
      <div class="prose prose-lg max-w-none font-mono text-black/80 leading-relaxed">
        ${htmlContent}
      </div>

      <!-- CTA -->
      <div class="mt-16 p-8 bg-black text-white rounded-xl text-center">
        <p class="font-typewriter text-2xl mb-4">${lang === 'es' ? '¿Vienes a vernos?' : lang === 'en' ? 'Coming to visit?' : lang === 'ca' ? 'Vens a veure\'ns?' : 'Vous venez nous voir?'}</p>
        <p class="font-mono mb-6">
          Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró
        </p>
        <a 
          href="https://www.google.com/maps?cid=13237319999262880412"
          target="_blank"
          rel="noopener noreferrer" 
          class="inline-block font-typewriter px-8 py-3 bg-red text-white rounded-lg hover:bg-red/90 transition-colors"
        >
          ${lang === 'es' ? 'Cómo llegar' : lang === 'en' ? 'Get directions' : lang === 'ca' ? 'Com arribar' : 'Comment y aller'}
        </a>
      </div>

    </div>
  </article>

</Layout>
`;
}

function processDirectory(langDir, lang) {
  const config = LANG_CONFIG[lang];
  const srcDir = langDir || DRAFTS_DIR;
  const destDir = join(PAGES_DIR, config.dir);
  
  // Ensure destination directory exists
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }
  
  const files = readdirSync(srcDir).filter(f => f.endsWith('.md'));
  const created = [];
  
  for (const file of files) {
    const slug = basename(file, '.md');
    const mdContent = readFileSync(join(srcDir, file), 'utf-8');
    const astroContent = generateAstroPage(mdContent, lang, slug);
    const destPath = join(destDir, `${slug}.astro`);
    
    writeFileSync(destPath, astroContent);
    created.push(`${config.dir}/${slug}.astro`);
    console.log(`✅ Created: ${config.dir}/${slug}.astro`);
  }
  
  return created;
}

// Main execution
console.log('🐇 Converting pillar pages to Astro...\n');

const allCreated = [];

// Process Spanish (root directory)
allCreated.push(...processDirectory(null, 'es'));

// Process English
allCreated.push(...processDirectory(join(DRAFTS_DIR, 'en'), 'en'));

// Process Catalan
allCreated.push(...processDirectory(join(DRAFTS_DIR, 'ca'), 'ca'));

// Process French
allCreated.push(...processDirectory(join(DRAFTS_DIR, 'fr'), 'fr'));

console.log(`\n✨ Done! Created ${allCreated.length} pages.`);
