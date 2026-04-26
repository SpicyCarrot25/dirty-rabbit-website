# Spanish Menu Content + Schema Adaptation PRD — Dirty Rabbit (`/carta`)

> Purpose: adapt the existing Spanish website menu page so it matches the approved menu structure, screenshot copy, and corrected prices without rebuilding the page from scratch. This document is the source of truth if implementation or deployment fails again.

## Scope
- Update **Spanish only** for now.
- Adapt the **existing** `/carta` implementation; this is a content/schema update, not a redesign or rebuild from scratch.
- Touch only the menu page and the minimum supporting data/components required for `/carta` in Spanish.
- Do **not** update other language pages in this pass.
- Do **not** alter the overall site layout, hero intro, navigation, or the 3 sticky bottom buttons.
- Do **not** break GEO/SEO/schema/sitemap behavior.

## Non-negotiables
1. Keep the main website buckets exactly as:
   - `Café & Cia`
   - `Bebidas`
   - `Comida`
2. Keep the current page visual design and structure style already used on the website.
3. Use the approved content order below.
4. Use screenshot descriptions and user-corrected prices as the content source.
5. Spanish page must be correct before any other language work starts.

## Final Approved Spanish Structure

### 1. Café & Cia
Subsections in this order:
1. `Café`
2. `Matcha`
3. `No Café`
4. `Iced`

### 2. Bebidas
Subsections in this order:
1. `Smoothies`
2. `Extras` (smoothie add-ons box)
3. `Bebidas`

### 3. Comida
Subsections in this order:
1. `Tostadas`
2. `Extras` (food extras box)
3. `Bagels`
4. `Planchados`
5. `Bowls`

## Section Content

### Café
Items:
- Espresso — 1.90 / 2.40
- Americano — 2.20
- Cortado — 2.10
- Café con leche — 2.60
- Latte — 3.20
- Flat white — 3.00
- Batch brew L/XL — 2.50 / 3.00

Descriptions can stay current where they already match existing coffee copy unless a screenshot-specific description is already available.

Extras note under Café:
- `Leche vegetal +0.30`
- `Extra shot +0.50`

### Matcha
- Section subtitle must appear **in parentheses** next to / under the title styling, using the screenshot/source wording where possible.
- Main item:
  - Matcha Latte — 3.80
  - **No description**
- Smaller subheading:
  - `Matchas frios`
- Cold items:
  - Iced Matcha Latte — 4.30
    - no description required if none shown clearly
  - Strawberry Matcha — 4.90
    - `matcha latte · homemade de fresa · hielo`
  - Dirty Matcha — 4.90
    - `matcha latte · espresso · hielo`
  - Orange Matcha — 5.00
    - `matcha latte · zumo de naranja natural · hielo`
  - Blueberry Matcha — 5.20
    - `matcha latte · base de arandanos homemade · hielo`

### No Café
- Chai Latte — 3.80
- Dirty Chai — 4.30
- Hot Chocolate — 4.50
- Tés e Infusiones — 2.80
- Vaso de leche — 1.50

### Iced
- Iced Coffee — 3.00
- Iced Latte — 3.80
- Espresso Tonic — 4.50
- Iced Chai — 4.30
- Iced Dirty Chai — 4.80
- Iced Chocolate — 5.00

Extras note under Iced:
- `Leche vegetal +0.30`
- `Extra shot +0.50`

### Smoothies
Section subtitle:
- `(base de agua)`

Items:
- Garden Thief — 6.50
  - `Robamos lo mejor del huerto — espinacas, brócoli, manzana, plátano`
- Rabbit Power — 6.50
  - `Pilas alcalinas — manzana, fresas, plátano`
- Carrot Kick — 6.50
  - `Un golpe de jengibre — zanahoria, manzana, mango, jengibre`

### Smoothie Extras box
Must remain in the red boxed style.
Copy:
- `+3 Proteína`
- `+1.50 Colágeno`
- `+1 Creatina, Espirulina`

### Bebidas
Items:
- Agua Sant Aniol — 1.90
- Agua con Gas — 2.20
- Vichy Catalán — 2.50
- Fritz Kola / Zero — 2.80
- Juno Soda — 3.00
- Linda Juice — 3.80
- Kombucha — 5.00
- Zumo de Naranja — 4.00
- Cerveza Artesana — keep current if not explicitly corrected in this PRD
- Cerveza Sin Alcohol — 3.75
- Copa Vino Tinto — 4.50
- Copa Vino Blanco — 4.50

### Tostadas
Subtitle:
- `(Origo Bakery, Barcelona)`

Items:
- Avo Good Day — 8.00
  - badge: `BEST SELLER`
  - `Buenos días garantizados: tostada de masa madre, aguacate, cherry y unbuen chorro de aceite de oliva virgen extra (1)`
- Choco Or Buddy — 7.50
  - `Para los golosos: tostada de masa madre, plátano. Elige: chocolate o crema orgánica de cacahuete Buddy Buddy (1,8,7)`
- Tofu Goodnight — 7.50
  - badge: `NEW`
  - `La cena perfecta: tostada de masa madre, hummus casero, tofu ahumado de sésamo y pimiento asado (1,6,11)`
- Butter Together — 5.50
  - `Simple y perfecto: tostada de masa madre, mantequilla francesa, mermelada casera (1,7)`

### Food Extras box
Must sit **between Tostadas and Bagels**.
Must include the `Más` section too.
Supporting line:
- `Disponible para cualquier plato`

#### Proteína
- Jamón ibérico +3.50
- Manchego +2.50
- Salmón +3.50
- Pastrami +3.50
- Tofu +2.00

#### Base
- Pan sin gluten +1.50
- Pan normal +1.50

#### Más
- Aguacate +3.80
- Mantequilla +1.50
- Crema cacahuete Buddy Buddy +2.00
- Mermelada +1.80
- Nutella +1.80

### Bagels
Subtitle:
- `(Bagel Boy, Barcelona)`

Items:
- Lord Salmon — 9.50
  - badge: `BEST SELLER`
  - `Nueva York versión Costa Brava: queso crema, salmón Benfumat, cebolla encurtida, tomate cherry (1,4,7)`
- Cherries Lady — 8.50
  - `La vegetariana irresistible: queso crema, tomate cherry, cebolla encurtida (1,7)`
- King Pastrami — 11.50
  - badge: `NEW`
  - `El rey del brunch: bagel, pastrami ahumado de Rooftop Smokehouse, Havarti, pepinillos, mostaza de cerveza de Rooftop (1,7,10)`

### Planchados
- Bikini Super Classic — 6.50
  - `El clásico elevado: masa madre, Duroc 100%, Havarti derretido (1,7)`
- Mr. Croissant — 6.50
  - `Crujiente por fuera, fundido por dentro: croissant, York, Havarti (1,7)`
- Bikini Rooftop — 7.50
  - badge: `NEW`
  - `El clásico ahumado: masa madre, pastrami ahumado de Rooftop Smokehouse, manchego con un toque de mostaza de cerveza (1,7,10)`
- Tunacado — 8.50
  - badge: `NEW`
  - `Mar y huerto en un bikini: masa madre, atún, aguacate, pesto genovese (1,4)`

### Bowls
- Granola Yogurt Bowl — 8.50
  - `Crujiente y cremoso: yogurt griego, granola casera, fruta del día, toque de cacahuete Buddy Buddy (1,7)`
- Açaí Bowl — 11.00
  - keep current description if exact approved replacement is unavailable; do not invent new copy
- Fruit Bowl — 8.50
  - `Lo que el mercado traiga hoy`

## Implementation Rules
- Prefer adapting the current Spanish page source directly if that is the cleanest route.
- Change content and section structure only; preserve the existing page shell and design.
- If shared data structures are changed, ensure no accidental breakage to other language pages.
- If a data-driven approach makes Spanish-only work risky, keep this pass page-local and explicit.
- Adapt the existing schema block so it reflects the approved visible menu structure; do not leave stale menu sections in structured data.
- Preserve existing page metadata, GEO plumbing, and sitemap behavior.

## File Scope
Likely relevant files:
- `src/pages/carta.astro`
- `src/data/menu.json` (only if necessary and safe)
- Any directly related component or layout file only if required by the page structure

Do not touch unrelated pages or languages in this pass.

## Verification Criteria
Before deploy, verify locally that Spanish `/carta` has:
- Main buckets: Café & Cia / Bebidas / Comida
- Matcha as its own subsection
- `Matchas frios` smaller subheading
- Tostadas -> Extras -> Bagels -> Planchados -> Bowls order
- Smoothie descriptions present
- Food descriptions present
- Food extras box includes `Más`
- No accidental fallback to old merged layout like `Toasts & Toasties`

## Deployment
- Build locally
- Deploy/push live
- Verify live at `https://dirtyrabbit.es/carta`
- Check HTTP 200, content presence, and schema presence

## Post-Deploy Live Verification Strings
Use these strings to confirm live correctness:
- `Matchas frios`
- `Robamos lo mejor del huerto`
- `La cena perfecta`
- `Nueva York versión Costa Brava`
- `El clásico ahumado`
- `Disponible para cualquier plato`
- `Crujiente y cremoso`

## Definition of Done
Spanish `/carta` is live with the approved structure and copy above, verified on the live site. Other languages remain untouched for now.
