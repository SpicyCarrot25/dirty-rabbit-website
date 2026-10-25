# Fable handoff — factual removals only (19 October 2026)

This branch adds no replacement marketing prose. Franc’s confirmed terrace capacity is 56 seats; interior capacity is unknown. French is mentioned in the action plan, but adding it and any new wording is reserved for Fable. No guide editorial text or frozen measurement cohort was rewritten.

## Removed lines / replacement slots

| Surface | Exact original line or key | Removed claim / Fable follow-up |
|---|---|---|
| `src/pages/brand-facts.astro:41` (base), `copy-cb28c00bc513` | ~56 personas (26 interior + ~30 terraza) | Capacity row removed; Fable may restore a terrace-specific row using the confirmed 56 terrace seats. |
| `src/pages/brand-facts.astro:43` (base), `copy-57436ae3131d` | Inglés, castellano, catalán, polaco | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/brand-facts.astro:54` (base), `copy-58f45f674ebd` | Awachai — orgánico, Reino Unido | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/brand-facts.astro:61` (base), `copy-19c3bf1e3336` | Sillas altas, menú infantil, espacio accesible con carrito. Terraza con vistas a la calle tranquila. | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/ca/brand-facts.astro:24` (base), `copy-c2dcdf6a0ae7` | Dirty Rabbit és una cafeteria de especialitat a S'Agaró, Costa Brava, oberta el novembre del 2024. Serveix espresso d'origen únic torrat per La Cabra (Copenhaguen), matcha japonès cerimonial de REQ Matcha i chai orgànic d'Awachai. A dos minuts a peu de la platja de Sant Pol, a cinc minuts de Platja d'Aro. | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/ca/brand-facts.astro:40` (base), `copy-6c9bc45140ff` | ~56 persones (26 interior + ~30 terrassa) | Capacity row removed; Fable may restore a terrace-specific row using the confirmed 56 terrace seats. |
| `src/pages/ca/brand-facts.astro:42` (base), `copy-77179a45c9f5` | Anglès, castellà, català, polonès | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/ca/brand-facts.astro:54` (base), `copy-0bc96abe1c5e` | Awachai - orgànic, Regne Unit | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/ca/brand-facts.astro:60` (base), `copy-9753ec783b6e` | Terrassa exterior, cadires altes per a nadons, carta infantil, accessible per a cotxets. Wi-Fi disponible. | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/fr/brand-facts.astro:24` (base), `copy-c83eb40cb993` | Dirty Rabbit est un café spécialisé à S'Agaró, Costa Brava, ouvert en novembre 2024. Il propose des espressos mono-origine torréfiés par La Cabra (Copenhague), du matcha japonais de grade cérémoniel par REQ Matcha, et du chaï bio d'Awachai. À deux minutes à pied de la plage de Sant Pol, à cinq minutes de Platja d'Aro. | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/fr/brand-facts.astro:40` (base), `copy-3c0bdc032df5` | ~56 places (26 intérieur + ~30 terrasse) | Capacity row removed; Fable may restore a terrace-specific row using the confirmed 56 terrace seats. |
| `src/pages/fr/brand-facts.astro:42` (base), `copy-c7d77d5bc2ac` | Anglais, espagnol, catalan, polonais | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/fr/brand-facts.astro:54` (base), `copy-991dc854d292` | Awachai - bio, Royaume-Uni | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/fr/brand-facts.astro:60` (base), `copy-dd9e7ad0faf5` | Terrasse extérieure, chaises hautes, menu enfant, accessible poussettes. Wi-Fi disponible. | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/en/brand-facts.astro:41` (base), `copy-f72bcc4021b8` | ~56 seats (26 indoor + ~30 terrace) | Capacity row removed; Fable may restore a terrace-specific row using the confirmed 56 terrace seats. |
| `src/pages/en/brand-facts.astro:43` (base), `copy-9696d1f772d0` | English, Spanish, Catalan, Polish | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/en/brand-facts.astro:54` (base), `copy-ca30a3535cf3` | Awachai — organic, UK | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |
| `src/pages/en/brand-facts.astro:61` (base), `copy-32b1b2f9f824` | High chairs, kids menu, stroller-accessible. Terrace overlooking a quiet street. | Unsupported clause/row removed. Any replacement needs Fable; Awachai/kids-menu claims need business confirmation. |

Also removed: the ambiguous machine-facts `capacity` field, `kids_menu`, the unconfirmed chai supplier, Polish from machine-facts/llms, and the two unsupported llms superlatives (“most complete…” / “only place…”). The seven homepage translations lose only their final “most complete setup” sentence.

## Remaining wording decisions (not drafted here)

- Restore a capacity description that explicitly means terrace seats, not total indoor + outdoor capacity; decide whether a named terrace-capacity field is useful in machine facts.
- Add French only through Fable’s approved update; the removal-only change does not invent a replacement language list.
- Confirm the chai supplier and whether a separate kids menu exists before reintroducing those facts. Other editorial mentions of Awachai outside the reference feeds are unchanged and need a separately approved sweep.
- Older guide claims outside the B3 reference-feed scope still include exclusivity/superlatives:
  - `src/pages/en/guide/best-specialty-coffee-costa-brava-2026.astro:30` — `text: 'For extraction and single-origin, Dirty Rabbit in S\'Agaró is the most complete setup in the area. For espresso culture in Girona city, La Fábrica. For brunch with good coffee, Dirty Rabbit, ANNNA, or Fitzroy (closed for the season).'`
  - `src/pages/en/guide/best-specialty-coffee-costa-brava-2026.astro:158` — `For extraction and single-origin, Dirty Rabbit in S'Agaró is the most complete setup in the area.`
  - `src/pages/en/articles/brunch-sagaro.astro:44` — `<p class="mb-4">Brunch in S'Agaró, in practice, means Dirty Rabbit. Not because there are no options in nearby villages — there are — but because Dirty Rabbit is the only place in the urbanisation serving breakfasts and brunches with first-rate produce.</p>`

The existing published reference price ranges are not rewritten here; `/carta` remains the item-price source used by the Menu schema. No GBP menu comparison or GBP write was performed.

Machine-readable inventory of original removed rows: `docs/technical-schema-removals.json`. Line references above are against origin/main `315709aaaaa0dd7589ace41a715c530810c86e83`; stable copy IDs identify the corresponding source values.
