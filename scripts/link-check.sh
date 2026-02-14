#!/bin/bash
# DR Website — Pre-deploy link checker
# Validates all internal links resolve to actual pages
# Run: bash scripts/link-check.sh [base_url]

set -euo pipefail

BASE_URL="${1:-https://site-vert-eta.vercel.app}"
ERRORS=0

echo "🔍 Link Check: $BASE_URL"
echo "================================"

# 1. Extract all internal links from homepage (ES)
echo ""
echo "📄 Checking homepage links..."
LINKS=$(curl -s "$BASE_URL/" | grep -oE 'href="(/[^"]*)"' | sed 's/href="//;s/"//' | sort -u)

for link in $LINKS; do
  # Skip assets, anchors, external
  [[ "$link" == /_astro/* ]] && continue
  [[ "$link" == /favicon* ]] && continue
  [[ "$link" == /apple-touch* ]] && continue
  [[ "$link" == /logos/* ]] && continue
  [[ "$link" == /photos/* ]] && continue
  
  STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE_URL$link" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    echo "  ✅ $link ($STATUS)"
  else
    echo "  ❌ $link ($STATUS)"
    ERRORS=$((ERRORS + 1))
  fi
done

# 2. Check all language variants
echo ""
echo "🌍 Checking language variants..."
for lang in en ca fr ru uk pl; do
  STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE_URL/$lang/" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    echo "  ✅ /$lang/ ($STATUS)"
  else
    echo "  ❌ /$lang/ ($STATUS)"
    ERRORS=$((ERRORS + 1))
  fi
  
  # Check all internal links from each language homepage
  LANG_LINKS=$(curl -s "$BASE_URL/$lang/" | grep -oE 'href="(/'"$lang"'/[^"]*)"' | sed 's/href="//;s/"//' | sort -u)
  for ll in $LANG_LINKS; do
    [[ "$ll" == *_astro* ]] && continue
    [[ "$ll" == *favicon* ]] && continue
    [[ "$ll" == *logos* ]] && continue
    STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE_URL$ll" 2>/dev/null)
    if [ "$STATUS" = "200" ]; then
      echo "  ✅ $ll ($STATUS)"
    else
      echo "  ❌ $ll ($STATUS)"
      ERRORS=$((ERRORS + 1))
    fi
  done
done

# 3. Check sitemap exists
echo ""
echo "🗺️ Checking sitemap..."
STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap-index.xml" 2>/dev/null)
if [ "$STATUS" = "200" ]; then
  echo "  ✅ /sitemap-index.xml ($STATUS)"
else
  echo "  ❌ /sitemap-index.xml ($STATUS)"
  ERRORS=$((ERRORS + 1))
fi

# 4. Check robots.txt
STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE_URL/robots.txt" 2>/dev/null)
if [ "$STATUS" = "200" ]; then
  echo "  ✅ /robots.txt ($STATUS)"
else
  echo "  ❌ /robots.txt ($STATUS)"
  ERRORS=$((ERRORS + 1))
fi

echo ""
echo "================================"
if [ "$ERRORS" -gt 0 ]; then
  echo "❌ FAILED: $ERRORS broken links found"
  exit 1
else
  echo "✅ ALL LINKS OK"
  exit 0
fi
