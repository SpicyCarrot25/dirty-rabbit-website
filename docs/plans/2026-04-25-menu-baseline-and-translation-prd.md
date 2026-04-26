# Menu baseline + multilingual translation PRD — Dirty Rabbit

> Purpose: define the new operating baseline for the website menu so future updates stop breaking structure, copy, and deployments. Spanish is the source of truth. Other languages are adapted from Spanish only after Spanish is approved live.

**Goal:** lock one stable menu workflow: Spanish first, design tweaks second, then multilingual rollout with humanized copy and strict translation rules.

**Architecture:** keep the existing menu page implementation and visual system. Treat Spanish `/carta` as the canonical menu source. Future updates adapt content and schema on top of the current page shell rather than rebuilding from scratch or guessing from stale repo history.

**Tech stack:** Astro site, Vercel deploys, Hermes PRDs, Codex for implementation, Humanizer for non-robotic non-Spanish copy.

---

## Source of truth

### 1. Spanish comes first
- Spanish `/carta` is the canonical source.
- No other language gets updated until Spanish is:
  1. implemented,
  2. deployed,
  3. verified on the real domain.

### 2. Approved assets hierarchy
When menu content changes, use this priority order:
1. Franc-approved live Spanish page
2. Latest approved Figma/menu screenshots
3. Written PRD/spec in repo
4. Existing repo content

If these disagree, do **not** guess. Update the PRD first.

### 3. The page is adapted, not rebuilt
- Keep the existing page shell.
- Keep the hero intro.
- Keep the sticky bottom buttons.
- Keep the visual system unless Franc asks for design tweaks.
- Change content, ordering, labels, and schema only.

---

## Locked baseline structure

### Top-level menu buckets
These remain fixed:
- `Café & Cia`
- `Bebidas`
- `Comida`

### Spanish subsection order

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

This is now the baseline structure unless Franc explicitly changes it.

---

## Translation rules for future languages

### 1. Food item titles do NOT get translated
This is a hard rule.

Keep these food item names unchanged across languages unless Franc explicitly says otherwise:
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

Section headings and descriptive copy can be translated. Product names stay branded.

### 2. Humanize translated descriptions
For non-Spanish languages:
- translate from the approved Spanish source,
- then run a humanization pass,
- remove robotic or over-literal phrasing,
- but preserve the original meaning.

### 3. Keep brand voice natural, not AI-clean
Humanized translation should:
- sound written by a human,
- avoid stiff literal calques from Spanish,
- avoid inflated AI phrasing,
- keep short, menu-friendly rhythm.

### 4. Preserve structure exactly
All languages must inherit the same section order as approved in Spanish unless there is a language-specific UX reason approved by Franc.

### 5. Do not translate badges blindly
Badges like `NEW` and `BEST SELLER` should be checked case by case.
- If the design system already uses English badges globally, keep them.
- Otherwise translate intentionally, not automatically.

---

## Schema rules

### 1. Visible menu and schema must match
If the visible page structure changes, the schema must change too.
No stale `MenuSection` names. No fake green.

### 2. Schema follows Spanish first
Update schema after the approved Spanish structure is implemented.
Other languages can follow later if needed by the implementation.

### 3. Representative structure
Schema should reflect:
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

---

## Deployment workflow — the new normal

### Step 1: Update PRD first
Before touching code:
- write/update the menu PRD in `docs/plans/`
- capture structure, copy, prices, exceptions, and translation rules

### Step 2: Implement Spanish only
Allowed files should be explicitly stated in the PRD.
Default likely touch points:
- `src/pages/carta.astro`
- `src/data/menu.json` only if needed

### Step 3: Build locally
Run local build and fix any issues before deploying.

### Step 4: Deploy to Vercel
Deploy the production candidate.

### Step 5: Rebind the real domain if needed
Always verify that `dirtyrabbit.es` points to the intended deployment, not just the Vercel alias.

### Step 6: Verify on real domain
Check:
- HTTP 200
- updated content strings
- updated structure
- schema presence
- actual real domain, not just preview alias

### Step 7: Do design tweaks
After Spanish content is live and accepted.

### Step 8: Roll out other languages
Only after Spanish is approved.
Use Spanish as source, then humanize each language version.

---

## Failure prevention rules

### Never do this again
- Do not restore random commits hoping they are the right menu.
- Do not trust a local clone over the real deployment timeline.
- Do not validate only the Vercel alias and ignore the real domain.
- Do not translate food item titles by default.
- Do not let schema drift from visible page structure.

### Always do this
- Anchor to Spanish first.
- Update PRD before edits.
- Verify on `dirtyrabbit.es`, not just `*.vercel.app`.
- Treat screenshots and approved live content as real evidence.
- Use Humanizer for non-Spanish copy so translations don’t read like AI sludge.

---

## Definition of done for future menu updates
A menu update is only done when:
1. Spanish is live and approved on `dirtyrabbit.es/carta`
2. structure matches the approved PRD
3. schema matches the visible structure
4. design tweaks are applied if requested
5. other languages are updated from Spanish source
6. non-Spanish text has been humanized
7. branded food item titles remain untranslated unless explicitly approved otherwise

---

## Immediate next use
Use this PRD as the baseline for:
- remaining Spanish design tweaks,
- multilingual rollout,
- future seasonal menu updates.
