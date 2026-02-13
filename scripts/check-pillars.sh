#!/bin/bash
# Pre-commit check: Ensure we don't use OLD pillars in content

cd "$(dirname "$0")/.."

OLD_PILLARS="Cuidado|Conexión|Ritmo"

# Check only actual content files, not brand docs
if grep -rE "$OLD_PILLARS" src/content/ src/pages/ 2>/dev/null | grep -v "NO usar" | grep -v "Deprecated"; then
    echo "❌ ERROR: Found OLD pillars"
    echo "Use: Wild Comfort / Belonging / Intentional"
    exit 1
fi

echo "✅ Pillars check passed"
exit 0
