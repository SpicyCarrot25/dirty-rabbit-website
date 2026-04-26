# Multilingual menu rollout PRD — Spanish source of truth

> Purpose: extend the approved Spanish `/carta` structure to the remaining language pages using a shared menu architecture so future item-level changes can be made once and propagate automatically. Translated copy must be humanized so it does not sound AI-generated.

## Goal
Make Spanish the canonical menu source while allowing all other `/carta` pages to inherit the same structure, prices, extras logic, and item inventory automatically.

## Core rule
A future change to one menu item in Spanish should require one data edit, not seven page rewrites.

---

## Scope
- Keep the **Spanish page as the approved baseline**.
- Roll out the same structure to:
  - `src/pages/en/carta.astro`
  - `src/pages/ca/carta.astro`
  - `src/pages/fr/carte.astro`
  - `src/pages/pl/carta.astro`
  - `src/pages/ru/carta.astro`
  - `src/pages/uk/carta.astro`
- Refactor shared menu data/renderer as needed so Spanish remains the source of truth.
- Preserve page shell, hero, sticky bottom buttons, anchors, and schema plumbing.
- Do not redesign.

---

## Non-negotiables
1. **Food item titles do not get translated.**
2. Section order stays identical to approved Spanish baseline.
3. Future content changes should come from shared menu data, not duplicated page-local arrays in seven files.
4. Schema must match visible structure per language page.
5. Humanize translated descriptions so they sound natural, not machine-literal.

---

## Locked structure for every language page

### Top-level sections
- `Café & Cia`
- `Bebidas`
- `Comida`

### Subsection order

#### Café & Cia
1. Café
2. Matcha
3. No Café
4. Iced

#### Bebidas
1. Smoothies
2. Extras
3. Bebidas

#### Comida
1. Tostadas
2. Extras
3. Bagels
4. Planchados
5. Bowls

---

## Translation rules

### 1. Keep branded item names unchanged
These stay the same in all languages unless Franc explicitly says otherwise:
- Avo Good Day
- Choco Or Buddy
- Tofu Goodnight
- Butter Together
- Lord Salmon
- Cherries Lady
- King Pastrami
- Bikini Super Classic
- Mr. Croissant
- Bikini Rooftop
- Tunacado
- Granola Yogurt Bowl
- Açaí Bowl
- Fruit Bowl
- Garden Thief
- Rabbit Power
- Carrot Kick
- Matcha Latte
- Iced Matcha Latte
- Strawberry Matcha
- Dirty Matcha
- Orange Matcha
- Blueberry Matcha

### 2. Translate section labels and descriptive copy
Translate:
- section headings
- subtitles
- extra labels
- notes
- item descriptions

Do not translate branded item names above.

### 3. Humanize every non-Spanish description
Translation pass must:
- avoid robotic literal calques
- preserve the Spanish meaning
- sound like local menu copy, not software output
- keep short rhythm and natural phrasing

Use the Humanizer rule set after translation, especially for:
- English
- French
- Polish
- Russian
- Ukrainian

Catalan can stay closer to Spanish, but still avoid stiff translation.

### 4. Keep badge policy deliberate
`NEW` / `BEST SELLER` must be reviewed intentionally.
- If current approved design language keeps English badges, keep them.
- Otherwise localize them consistently across languages.
- Don’t randomize badge strategy per page.

---

## Architecture target

### Preferred outcome
Create a **shared multilingual menu structure** in data, then keep page templates thin.

That means:
- one source for section ordering
- one source for item inclusion/exclusion per subsection
- one source for prices
- one source for per-language descriptions
- one source for extras blocks
- all `/carta` pages render from the same logic, with localized labels

### Practical requirement
Spanish should not remain a one-off hardcoded page while the others stay on old logic. That just creates the next mess.

Refactor to a structure where:
- the Spanish-approved menu drives the model
- each language page maps localized labels/descriptions into that same shape
- future item changes can happen in shared data and show up everywhere

---

## Likely file scope
Codex should inspect and choose the minimum safe set, but expected files include:
- `src/pages/carta.astro`
- `src/pages/en/carta.astro`
- `src/pages/ca/carta.astro`
- `src/pages/fr/carte.astro`
- `src/pages/pl/carta.astro`
- `src/pages/ru/carta.astro`
- `src/pages/uk/carta.astro`
- `src/data/menu.json`

If a helper/module is needed to centralize rendering, create one only if it simplifies future maintenance.

---

## Content rules by section
Follow the Spanish-approved baseline exactly.

### Spanish source of truth includes
- approved prices already live on Spanish
- approved Spanish descriptions
- approved extras ordering
- approved notes like `Añade cualquier extra`

### For other languages
- mirror the same structure exactly
- translate only the parts that should be localized
- keep titles fixed where required

---

## Schema rules
Each language page’s schema must reflect the visible structure of that page.

At minimum, schema must show:
- Café & Cia
  - Café
  - Matcha
  - No Café
  - Iced
- Bebidas
  - Smoothies
  - Extras
  - Bebidas
- Comida
  - Tostadas
  - Extras
  - Bagels
  - Planchados
  - Bowls

Do not leave stale `Toasts & Toasties` / old merged layout in structured data.

---

## Verification requirements

### Local
- build succeeds
- all seven `/carta` routes render
- no broken imports
- no schema errors

### Content checks
Verify each non-Spanish page contains its new structure and localized text while preserving item titles.

Examples:
- branded names like `King Pastrami`, `Bikini Rooftop`, `Garden Thief` remain unchanged
- section structure mirrors Spanish
- translated descriptions exist
- extras blocks are in the right place

### Real domain
Spot-check at least:
- `dirtyrabbit.es/carta`
- `dirtyrabbit.es/en/carta`
- `dirtyrabbit.es/ca/carta`
- `dirtyrabbit.es/fr/carte`

And confirm deployment mapping is correct on the real domain, not just Vercel alias previews.

---

## Definition of done
This task is done when:
1. Spanish remains correct.
2. Other language menu pages follow the new approved structure.
3. Food item titles stay untranslated.
4. Non-Spanish descriptions are humanized and natural.
5. Shared architecture means a future Spanish item change can propagate automatically.
6. Build passes.
7. Live verification passes on the real domain.

---

## Codex execution brief
Use this PRD plus the existing Spanish implementation as the baseline.
Do not invent new menu copy.
Do not redesign.
Do not touch unrelated pages.
Prefer the smallest clean refactor that makes future propagation automatic.
