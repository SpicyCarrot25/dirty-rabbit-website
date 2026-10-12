# Published business-fact conflicts — owner answers pending

Snapshot: current main `7cca4c9`, 2 October 2026. No business value has been chosen or corrected. `src/data/business-facts.json` is the only data file to edit. Null confirmations preserve the published variants.

## Franc’s answers

1. Full street address (including unit), postcode, town, region, correct map pin and embedded map URL.
2. Normal days/hours and kitchen closing; any summer exceptions with actual start/end dates.
3. Winter closure start and end dates, or explicit confirmation that there is no winter closure. No dates are inferred from year-round copy.
4. The approved menu, prices and retired/renamed items; whether live Cold Brew remains. Confirm what old price ranges and per-person estimates should say.

## Differences that need a decision

| Fact | Published variants | Where |
|---|---|---|
| Street | Carrer de la Conca 17 | Layout business JSON-LD on all Layout pages; four brand-facts pages; llms.txt; machine-readable facts |
| Street | Avinguda de Platja d’Aro, 275; Avenida/Av./Avinguda Platja d’Aro 275 | Seven contact pages through translations; guide/article/brunch pages listed below |
| Street | Avenida Playa de Aro, 275 | Shared footer on every Layout page |
| Unit | Avda. Platja d’Aro, 275 - Local 2 | /legal, /en/legal, /ca/legal, /fr/legal |
| Coordinates | 41.7967591, 3.048506 | Shared Layout JSON-LD and machine-readable facts |
| Coordinates | 41.7882, 3.0323 | Brunch and many guide JSON-LD objects |
| Coordinates | 41.7955142, 3.048278 | Google pin recorded in the supplied 2 October audit; owner confirmation still required |
| Map embed | Centre 41.7986111, 3.0619444; existing embedded place reference | /fr/contact; preserved separately as published.mapEmbedUrl |
| Regular hours | Tuesday–Sunday 08:00–15:00; Monday closed | Layout schema, facts pages, contact translations, shared footer, llms.txt and machine-readable facts |
| Kitchen | Until 14:00 | Contact translations in all seven languages |
| Summer | Until 17:00 / 5pm, roughly June–September | /brunch and EN/CA/FR equivalents; remote-work article in four languages |
| Winter | Open year-round / no winter closing / seasonal or shoulder-month opening | Exact claims and pages below; closure dates remain null |
| Menu | Avo €7.50 vs catalog €8; Lord Salmon €8.50 vs €9.50; Cherries Lady €7.90 vs €8.50; Bikini €6 vs €6.50; Açaí €10.50 vs €11 | Four brunch pages versus seven menu pages |
| Menu | Matcha from €3.20 vs catalog €3.80; chai from €3.50 vs €3.80; kombucha €4.50 vs €5 | Four brunch pages versus menu catalog |
| Menu | Cold Brew €4 exists live, absent from main | Live /carta JSON-LD read on 2 October; recorded in published.liveOnlyMenuItems without changing the menu |
| Price range | Coffee €2.50–4; drinks €2.50–5.50; food €4–15; various per-person estimates | llms.txt, facts pages, public JSON, articles/guide copy below |

## How confirmation is applied

Address, coordinates, normal hours, kitchen hours, summer dates and winter dates have shared confirmation fields. Registered text and schema use those fields. Menu pages use published.menu; confirm the catalog and update it in this same file. Exact named editorial items can use the same prices when confirmed.menu is true. Retired names, broad ranges and per-person estimates remain explicit legacy copy in this file: reconcile them with Franc’s answer, rather than guessing an item match or budget. Optional confirmed.menuAliases contains only mappings Franc has confirmed. Rerun checks and review the resulting copy before any proposal to publish.

All confirmation fields are null in this branch. No business-fact correction is activated. Existing ratings, provider claims and other facts retain their published wording; this preparation does not certify them.

## Exact source occurrences by fact

Source line numbers in this inventory refer to the pre-refactor main source for the original migration; supplemental entries identify their source at extraction time. Copy IDs are stable lookup keys in business-facts.json. Public routes below identify every page using each variant. Shared Layout/Footer references apply to every page that includes them.

### address

- `copy-d275a35fab67` — <strong>Avenida Platja d&#39;Aro 275, S&#39;Agaró</strong> · <a href="https://www.google.com/maps?cid=13237319999262880412">Google Maps</a>
  Pages: /articulos/brunch-playa-sant-pol, /articulos/cafe-wifi-trabajar-costa-brava, /articulos/desayunar-costa-brava, /articulos/desayuno-con-ninos-costa-brava, /articulos/desayuno-despues-cami-de-ronda, /articulos/donde-desayunar-sagaro, /articulos/mejores-brunchs-platja-daro.
- `copy-1c2ba883b0a7` — <em>Después de la playa (o antes), pásate por Dirty Rabbit — Avenida Platja d&#39;Aro 275. Estamos a 3 minutos de Sant Pol. Café de La Cabra, tostadas con salmón Benfumat, terraza para secarte al sol. Tu casa lejos de casa.</em>
  Pages: /articulos/brunch-playa-sant-pol.
- `copy-4fb00d6cad80` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró
  Pages: /articulos/brunch-playa-sant-pol, /articulos/brunch-sagaro, /articulos/cafe-especialidad-vs-cafe-comercial, /articulos/cafe-wifi-trabajar-costa-brava, /articulos/desayunar-costa-brava, /articulos/desayuno-con-ninos-costa-brava, /articulos/desayuno-despues-cami-de-ronda, /articulos/donde-desayunar-sagaro, /articulos/mejores-brunchs-platja-daro.
- `copy-1adfdec827e7` — <strong>Avenida Platja d'Aro 275, S'Agaró · <a href="https://www.google.com/maps?cid=13237319999262880412">Google Maps</a></strong>
  Pages: /articulos/brunch-sagaro.
- `copy-9ab6f851509c` — <em>¿Vienes a S'Agaró? Dirty Rabbit está en la Avenida Platja d'Aro 275. Café La Cabra, tostada con salmón Benfumat y la Playa de Sant Pol a tres minutos. Tu casa lejos de casa.</em>
  Pages: /articulos/brunch-sagaro.
- `copy-32a7ba99fd11` — <strong>Dirty Rabbit</strong> — Avenida Platja d&#39;Aro 275 Café de <strong>La Cabra</strong> (Dinamarca), consistentemente entre los mejores tostadores del mundo. Preparado en <strong>La Marzocco KB90</strong> con agua de <strong>ósmosis inversa</strong>. A 3 minutos de la Playa de Sant Pol.
  Pages: /articulos/cafe-especialidad-vs-cafe-comercial.
- `copy-988d545a4aea` — <em>¿Quieres probar café de especialidad en la Costa Brava? Pásate por Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Servimos La Cabra, preparado como debe ser. Sin azúcar. Sin excusas. Tu casa lejos de casa.</em>
  Pages: /articulos/cafe-especialidad-vs-cafe-comercial.
- `copy-57aea01937a8` — <em>¿Trabajas en remoto desde la Costa Brava? En temporada baja, pásate por Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Café de La Cabra y Sant Pol a 3 minutos. En verano, disfruta del café sin portátil.</em>
  Pages: /articulos/cafe-wifi-trabajar-costa-brava.
- `copy-2c1d37a0d25e` — <em>¿Vienes a S&#39;Agaró? Pásate por Dirty Rabbit — Avenida Platja d&#39;Aro 275. Abrimos la puerta, te preparamos un café de verdad, y te quedas el rato que quieras. Esto es tu casa lejos de casa.</em>
  Pages: /articulos/desayunar-costa-brava.
- `copy-9ec102e1375d` — <em>Ven a Dirty Rabbit con toda la familia — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Tenemos terraza, tronas, y café que los padres necesitáis después de una noche con críos. A 3 minutos de la Playa de Sant Pol. Tu casa lejos de casa — también para los pequeños.</em>
  Pages: /articulos/desayuno-con-ninos-costa-brava.
- `copy-7ebf944a30dc` — <em>Después de caminar, pásate por Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Estamos a 3 minutos de Sant Pol. Café de La Cabra, tostadas con salmón Benfumat, y todo el tiempo que necesites para recuperarte. Tu casa lejos de casa.</em>
  Pages: /articulos/desayuno-despues-cami-de-ronda.
- `copy-6dd2d9f4949c` — <em>Pásate por Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Café de La Cabra, tostadas con salmón Benfumat, a 3 minutos de Sant Pol. Abrimos la puerta y te quedas el rato que quieras. Tu casa lejos de casa.</em>
  Pages: /articulos/donde-desayunar-sagaro.
- `copy-ba80174514f4` — <em>¿Vienes a Platja d&#39;Aro? El mejor brunch está a 5 minutos: Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Café de La Cabra, tostadas con salmón ahumado Benfumat, y Sant Pol a un paseo. Tu casa lejos de casa.</em>
  Pages: /articulos/mejores-brunchs-platja-daro.
- `copy-666bc81b4733` — Carrer de la Conca 17, S'Agaró, 17248 Girona
  Pages: /brand-facts.
- `copy-71380380d481` — Dirty Rabbit está en S'Agaró, en Avinguda Platja d'Aro 275, a pocos minutos de Sant Pol. Es una parada cómoda si buscas brunch antes de la playa, después de pasear o de camino entre Sant Feliu y Platja d'Aro.
  Pages: /brunch-sagaro.
- `copy-643dd236ae91` — Dirty Rabbit está en <strong>Avinguda Platja d'Aro 275, S'Agaró 17248</strong>. La ubicación es práctica porque queda en un punto natural de paso entre S'Agaró, Sant Feliu de Guíxols y Platja d'Aro. Si vienes en coche, llegas rápido desde cualquiera de los tres. Si estás alojado cerca de Sant Pol, también puedes acercarte andando y convertir el desayuno en parte del paseo.
  Pages: /brunch-sagaro.
- `copy-c847dfb51bbf` — <strong>Dirección:</strong> Avinguda Platja d'Aro 275
  Pages: /brunch-sagaro.
- `copy-6fee981333bf` — Avinguda Platja d'Aro 275, S'Agaró 17248. Costa Brava. Mañanas con luz, brunch sin teatro y café hecho con intención.
  Pages: /brunch-sagaro.
- `copy-8897214f132e` — Dirty Rabbit es una cafetería de especialidad en Avenida Platja d'Aro 275, S'Agaró. Abrimos en noviembre de 2024. Servimos brunch de martes a domingo, de 8 de la mañana a las 15h.
  Pages: /brunch.
- `copy-1d8682d80a00` — Avenida Platja d'Aro 275, S'Agaró, 17248. Estamos en la carretera principal entre Sant Feliu de Guíxols y Platja d'Aro. Si vienes desde Platja d'Aro, estamos a la derecha antes de que la carretera entre en el casco antiguo de S'Agaró. Si vienes desde Sant Feliu, a la izquierda después de la zona residencial.
  Pages: /brunch.
- `copy-039228d7349a` — Avenida Platja d'Aro 275, S'Agaró (17248). Entre Sant Feliu de Guíxols y Platja d'Aro, en la carretera principal de la costa. La Playa de Sant Pol está a 3 minutos a pie. Hay aparcamiento en la calle y un parking público cercano.
  Pages: /brunch.
- `copy-20b8e8de4d59` — Avenida Platja d'Aro 275, S'Agaró<br> +34 872 454 264
  Pages: /brunch.
- `copy-385e8285b0c0` — <strong>Avinguda Platja d&#39;Aro 275, S&#39;Agaró</strong> · <a href="https://www.google.com/maps?cid=13237319999262880412">Google Maps</a>
  Pages: /ca/articles/brunch-playa-sant-pol, /ca/articles/cafes-wifi-treballar-costa-brava, /ca/articles/esmorzar-amb-nens-costa-brava, /ca/articles/esmorzar-costa-brava, /ca/articles/esmorzar-despres-cami-de-ronda, /ca/articles/guia-cafe-especialitat-costa-brava, /ca/articles/millors-brunchs-platja-daro, /ca/articles/on-esmorzar-sagaro.
- `copy-81ef017cda27` — <em>Després de la platja (o abans), passa per Dirty Rabbit — Avinguda Platja d&#39;Aro 275. Som a 3 minuts de Sant Pol. Cafè de La Cabra, torrades amb salmó Benfumat, terrassa per eixugar-te al sol. Casa teva lluny de casa.</em>
  Pages: /ca/articles/brunch-playa-sant-pol.
- `copy-7e287ad1f6de` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró
  Pages: /ca/articles/brunch-playa-sant-pol, /ca/articles/cafe-especialitat-vs-cafe-comercial, /ca/articles/cafes-wifi-treballar-costa-brava, /ca/articles/esmorzar-amb-nens-costa-brava, /ca/articles/esmorzar-costa-brava, /ca/articles/esmorzar-despres-cami-de-ronda, /ca/articles/guia-cafe-especialitat-costa-brava, /ca/articles/millors-brunchs-platja-daro, /ca/articles/on-esmorzar-sagaro.
- `copy-3ab9de1d2d90` — <strong>Dirty Rabbit</strong> — Avinguda Platja d&#39;Aro 275 Cafè de <strong>La Cabra</strong> (Dinamarca), consistentment entre els millors torradors del món. Preparat en <strong>La Marzocco KB90</strong> amb aigua d&#39;<strong>osmosi inversa</strong>. A 3 minuts de la Platja de Sant Pol.
  Pages: /ca/articles/cafe-especialitat-vs-cafe-comercial.
- `copy-5729ca795a7f` — <em>Vols provar cafè d&#39;especialitat a la Costa Brava? Passa per Dirty Rabbit — Avinguda Platja d&#39;Aro 275, S&#39;Agaró. Servim La Cabra, preparat com cal. Sense sucre. Sense excuses. Casa teva lluny de casa.</em>
  Pages: /ca/articles/cafe-especialitat-vs-cafe-comercial.
- `copy-2ffefe3bfd49` — <em>Treballes en remot des de la Costa Brava? A temporada baixa, passa per Dirty Rabbit — Avinguda Platja d&#39;Aro 275, S&#39;Agaró. Cafè de La Cabra i Sant Pol a 3 minuts. A l&#39;estiu, gaudeix del cafè sense portàtil.</em>
  Pages: /ca/articles/cafes-wifi-treballar-costa-brava.
- `copy-5db34076eaab` — <em>Vine a Dirty Rabbit amb tota la família — Avinguda Platja d&#39;Aro 275, S&#39;Agaró. Tenim terrassa, trones, i cafè que els pares necessiteu després d&#39;una nit amb criatures. A 3 minuts de la Platja de Sant Pol. Casa teva lluny de casa — també per als petits.</em>
  Pages: /ca/articles/esmorzar-amb-nens-costa-brava.
- `copy-faad62d7130c` — <em>Véns a S&#39;Agaró? Passa per Dirty Rabbit — Avinguda Platja d&#39;Aro 275. Obrim la porta, et preparem un cafè de debò, i et quedes l&#39;estona que vulguis. Això és casa teva lluny de casa.</em>
  Pages: /ca/articles/esmorzar-costa-brava.
- `copy-ed28c1b3dcfc` — <em>Després de caminar, passa per Dirty Rabbit — Avinguda Platja d&#39;Aro 275, S&#39;Agaró. Som a 3 minuts de Sant Pol. Cafè de La Cabra, torrades amb salmó Benfumat, i tot el temps que necessitis per recuperar-te. Casa teva lluny de casa.</em>
  Pages: /ca/articles/esmorzar-despres-cami-de-ronda.
- `copy-150b7f84e168` — <em>Véns a S&#39;Agaró? Comença per Dirty Rabbit — Avinguda Platja d&#39;Aro 275. Obre la porta, demana un cafè i queda&#39;t l&#39;estona que vulguis. Això és casa teva.</em>
  Pages: /ca/articles/guia-cafe-especialitat-costa-brava.
- `copy-32d0aeb15355` — <em>Véns a Platja d&#39;Aro? El millor brunch és a 5 minuts: Dirty Rabbit — Avinguda Platja d&#39;Aro 275, S&#39;Agaró. Cafè de La Cabra, torrades amb salmó fumat Benfumat, i Sant Pol a un passeig. Casa teva lluny de casa.</em>
  Pages: /ca/articles/millors-brunchs-platja-daro.
- `copy-e6518ea7721b` — <em>Passa per Dirty Rabbit — Avinguda Platja d&#39;Aro 275, S&#39;Agaró. Cafè de La Cabra, torrades amb salmó Benfumat, a 3 minuts de Sant Pol. Obrim la porta i et quedes l&#39;estona que vulguis. Casa teva lluny de casa.</em>
  Pages: /ca/articles/on-esmorzar-sagaro.
- `copy-28ecda8aa3e9` — Carrer de la Conca 17, S'Agaró, 17248 Girona
  Pages: /ca/brand-facts.
- `copy-db11c1102834` — Dirty Rabbit és una cafeteria de especialitat a l'Avinguda Platja d'Aro 275, S'Agaró. Vam obrir el novembre del 2024. Servim brunch de dimarts a diumenge, de les 8 del matí fins a les 15h.
  Pages: /ca/brunch.
- `copy-6c5d05820917` — Avinguda Platja d'Aro 275, S'Agaró, 17248. Som a la carretera principal entre Sant Feliu de Guíxols i Platja d'Aro. Si vens des de Platja d'Aro, som a la dreta abans que la carretera entri al nucli antic de S'Agaró. Si vens des de Sant Feliu, a l'esquerra després que la zona residencial s'obri.
  Pages: /ca/brunch.
- `copy-7b9ad0d70bc9` — Avinguda Platja d'Aro 275, S'Agaró (17248). Entre Sant Feliu de Guíxols i Platja d'Aro, a la carretera principal de la costa. La Platja de Sant Pol és a 3 minuts a peu. Hi ha aparcament al carrer i un pàrquing públic a prop.
  Pages: /ca/brunch.
- `copy-69a3be74fc85` — Avinguda Platja d'Aro 275, S'Agaró<br> +34 872 454 264
  Pages: /ca/brunch, /ca/guia/best-chai-girona, /ca/guia/best-chai-latte-platja-daro, /ca/guia/best-chai-sant-feliu, /ca/guia/best-coffee-costa-brava, /ca/guia/best-coffee-platja-daro, /ca/guia/best-matcha-girona, /ca/guia/best-matcha-platja-daro, /ca/guia/best-matcha-sant-feliu, /ca/guia/best-specialty-coffee-sagaro, /ca/guia/chai-latte-costa-brava, /ca/guia/chai-latte-girona, /ca/guia/chai-latte-platja-daro, /ca/guia/chai-latte-sagaro, /ca/guia/chai-latte-sant-feliu, /ca/guia/matcha-latte-costa-brava, /ca/guia/matcha-latte-girona, /ca/guia/matcha-latte-sagaro, /ca/guia/matcha-latte-sant-feliu, /ca/guia/matcha-platja-daro.
- `copy-30f287ccf9b6` — Dirty Rabbit és a l'Avinguda Platja d'Aro 275, S'Agaró, 35 minuts des de Girona. Si ja tens motiu per estar a la Costa Brava, el desviament és mínim: som a la carretera entre Sant Feliu de Guíxols i Platja d'Aro.
  Pages: /ca/guia/best-chai-girona.
- `copy-91fcac2248e7` — Deu minuts en cotxe. Avinguda Platja d'Aro 275, S'Agaró. A la carretera principal entre Sant Feliu i Platja d'Aro. Aparcament davant, terrassa gran, bona llum al matí.
  Pages: /ca/guia/best-chai-latte-platja-daro.
- `copy-e64c009362e4` — Avinguda Platja d'Aro 275, S'Agaró. Cinc minuts des de Sant Feliu per la GI-682.
  Pages: /ca/guia/best-chai-sant-feliu.
- `copy-f96ae6268d7b` — A la Costa Brava: Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró. A 35 minuts de Girona per la C-65. Vam obrir el 1 de novembre de 2024 amb una carta on cada ingredient té nom i origen. Terrassa gran, WiFi, bona llum de matí.
  Pages: /ca/guia/best-matcha-girona.
- `copy-6d23801aabe3` — Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró, uns deu minuts des del centre de Platja d'Aro.
  Pages: /ca/guia/best-matcha-platja-daro.
- `copy-17535b6cc9ec` — Dirty Rabbit a S'Agaró, Avinguda Platja d'Aro 275. A deu minuts en cotxe des del centre de Platja d'Aro. Matcha orgànic de cerimònia de REQ Matcha, dosi estàndard de 2 g amb opció extra fort.
  Pages: /ca/guia/best-matcha-platja-daro.
- `copy-9059389ed2c2` — Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró. A cinc minuts de Sant Feliu per la GI-682.
  Pages: /ca/guia/best-matcha-sant-feliu.
- `copy-42fa0ae856ea` — Dirty Rabbit és a l'Avinguda Platja d'Aro 275, S'Agaró (17248). A la carretera que connecta Sant Feliu de Guíxols amb Platja d'Aro, accessible des dels dos costats.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-cea11a6bd901` — L'opció que coneixem amb masala chai orgànic de debò a la Costa Brava central és Dirty Rabbit, a S'Agaró, entre Sant Feliu de Guíxols i Platja d'Aro. Avinguda Platja d'Aro 275.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-c9231afb2a94` — Per la C-65 direcció Sant Feliu de Guíxols, o per l'AP-7 sortida Platja d'Aro. El local és a l'Avinguda Platja d'Aro 275, S'Agaró. Uns 35 minuts des del centre de Girona. Aparcament davant.
  Pages: /ca/guia/chai-latte-girona.
- `copy-c1784cc257a5` — Avinguda Platja d'Aro 275, S'Agaró. A la carretera principal que connecta Sant Feliu amb Platja d'Aro. Aparcament fàcil davant, terrassa gran, WiFi, bona llum al matí.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-624801a540b2` — Si busques chai latte a S'Agaró, ja ets aquí. Dirty Rabbit és a l'Avinguda Platja d'Aro 275, a S'Agaró, no a prop, no a uns minuts: aquí mateix.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-e7654184ef62` — Si busques chai latte a S'Agaró, ja ets aquí. Dirty Rabbit és a l'Avinguda Platja d'Aro 275, a S'Agaró, no a prop, no a uns minuts: aquí mateix.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-b5e94493fccf` — Aquí. Avinguda Platja d'Aro 275.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-d835d1209bda` — Dirty Rabbit és a l'Avinguda Platja d'Aro 275, S'Agaró, cinc minuts des de Sant Feliu per la GI-682.
  Pages: /ca/guia/chai-latte-sant-feliu, /ca/guia/matcha-latte-sant-feliu.
- `copy-5d29d8537a2c` — Cinc minuts en cotxe. La ruta més directa és per la GI-682 direcció Platja d'Aro. El local és a l'Avinguda Platja d'Aro 275. Hi ha aparcament fàcil davant.
  Pages: /ca/guia/chai-latte-sant-feliu.
- `copy-c977563dc3e5` — Avinguda Platja d'Aro 275, S'Agaró · A l'arribada del Camí de Ronda
  Pages: /ca/guia/esmorzar-prop-de-cami-de-ronda.
- `copy-0497466ef5bc` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> La millor manera d'acabar la teva caminada pel Camí de Ronda.
  Pages: /ca/guia/esmorzar-prop-de-cami-de-ronda.
- `copy-3fde53d7f4ce` — Avinguda Platja d'Aro 275, S'Agaró · 5 min en cotxe
  Pages: /ca/guia/esmorzar-prop-de-platja-daro.
- `copy-55b120259b61` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> El millor esmorzar de la zona. Val la pena el tomb.
  Pages: /ca/guia/esmorzar-prop-de-platja-daro.
- `copy-a6e0361f9529` — Avinguda Platja d'Aro 275, S'Agaró · 3 min a peu de Sant Pol
  Pages: /ca/guia/esmorzar-prop-de-platja-sant-pol.
- `copy-790abbde9dcd` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> A 3 minuts de la platja de Sant Pol. Vine com estiguis.
  Pages: /ca/guia/esmorzar-prop-de-platja-sant-pol.
- `copy-f4c34c1bf362` — Dirty Rabbit és a S'Agaró, Avinguda Platja d'Aro 275, un punt geogràficament central de la costa sud del Baix Empordà. Des de Tossa de Mar uns 20 minuts. Des de Palamós, uns 15. Des de Begur, uns 25. Des de Girona capital, 35 minuts per la C-65.
  Pages: /ca/guia/matcha-latte-costa-brava.
- `copy-dde3accc17b8` — Dirty Rabbit a S'Agaró, Avinguda Platja d'Aro 275. El cafè d'especialitat més accessible de la costa sud amb matcha orgànic d'origen japonès. A menys de 25 minuts de la majoria de pobles del Baix Empordà.
  Pages: /ca/guia/matcha-latte-costa-brava.
- `copy-c3a9e8f713bb` — Si estàs planejant baixar a la Costa Brava: Dirty Rabbit a S'Agaró, Avinguda Platja d'Aro 275. El matcha que fem servir és de REQ Matcha, un projecte de Barcelona gestionat per un japonès que selecciona el te a l'origen, al Japó. El servim amb 2 g de cerimònia, disponible calent o fred, amb opció de llet vegetal.
  Pages: /ca/guia/matcha-latte-girona.
- `copy-b50a848a2ddd` — Si ets a S'Agaró buscant matcha latte, ja ets on has de ser. Dirty Rabbit va obrir aquí el 1 de novembre de 2024, a l'Avinguda Platja d'Aro 275. No cal bus
  Pages: /ca/guia/matcha-latte-sagaro.
- `copy-213f52317fa6` — Si ets a S'Agaró buscant matcha latte, ja ets on has de ser. Dirty Rabbit va obrir aquí el 1 de novembre de 2024, a l'Avinguda Platja d'Aro 275. No cal buscar més.
  Pages: /ca/guia/matcha-latte-sagaro.
- `copy-43e828d8359d` — Avinguda Platja d'Aro 275, S'Agaró, 17248. Vam obrir el 1 de novembre de 2024. L'Iwonka porta el dia a dia amb una lògica senzilla: si no podem explicar d'on ve l'ingredient, no entra a la carta.
  Pages: /ca/guia/matcha-latte-sagaro.
- `copy-1a0c0ed03ae4` — A Dirty Rabbit, Avinguda Platja d'Aro 275. És l'únic cafè d'especialitat a S'Agaró que treballa amb matcha orgànic d'origen certificat.
  Pages: /ca/guia/matcha-latte-sagaro.
- `copy-e1b45f71df6d` — Uns 4-5 quilòmetres per la GI-682 en direcció a Platja d'Aro. El local és a l'Avinguda Platja d'Aro 275, S'Agaró.
  Pages: /ca/guia/matcha-latte-sant-feliu.
- `copy-58723aee7485` — Avinguda Platja d'Aro 275, S'Agaró, a la carretera principal que connecta Sant Feliu amb Platja d'Aro, abans d'arribar al nucli de S'Agaró. Hi ha aparcament fàcil davant.
  Pages: /ca/guia/matcha-platja-daro.
- `copy-6c63de2deda3` — Avinguda Platja d'Aro 275, S'Agaró · 20 min en cotxe des de Begur
  Pages: /ca/guia/millor-cafe-begur.
- `copy-d3f3c3cf9e37` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> 20 minuts des de Begur. Oberts tot l'any.
  Pages: /ca/guia/millor-cafe-begur.
- `copy-cc211cc4ed42` — Avinguda Platja d'Aro 275, S'Agaró · 10 min en cotxe des de Calonge
  Pages: /ca/guia/millor-cafe-calonge.
- `copy-37ebddcc6271` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> 10 minuts des de Calonge. Això és casa teva.
  Pages: /ca/guia/millor-cafe-calonge.
- `copy-352d588d9607` — Avinguda Platja d'Aro 275, S'Agaró · 35 min en cotxe des de Girona
  Pages: /ca/guia/millor-cafe-girona.
- `copy-28de64362b4f` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> 35 minuts des de Girona. Cafè + platja + Camí de Ronda.
  Pages: /ca/guia/millor-cafe-girona.
- `copy-0ab5ccf9c8f9` — Avinguda Platja d'Aro 275, S'Agaró · 15 min en cotxe des de Palamós
  Pages: /ca/guia/millor-cafe-palamos.
- `copy-eb22d2ad65d8` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> 15 minuts des de Palamós. El millor cafè de la Costa Brava t'espera.
  Pages: /ca/guia/millor-cafe-palamos.
- `copy-508be7689e15` — Avinguda Platja d'Aro 275, S'Agaró · 25 min en cotxe des de Pals
  Pages: /ca/guia/millor-cafe-pals.
- `copy-10c53c8f5517` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> 25 minuts des de Pals. Combina medieval + cafè + platja.
  Pages: /ca/guia/millor-cafe-pals.
- `copy-81872e6ccfb5` — Avinguda Platja d'Aro 275, S'Agaró · 5 min en cotxe des de Platja d'Aro
  Pages: /ca/guia/millor-cafe-platja-daro.
- `copy-401e283ed4a1` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> Obre la porta, demana un cafè i queda't l'estona que vulguis. Això és casa teva.
  Pages: /ca/guia/millor-cafe-platja-daro.
- `copy-32926308864c` — Avinguda Platja d'Aro 275, S'Agaró · Al centre
  Pages: /ca/guia/millor-cafe-sagaro.
- `copy-34276809c420` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> Obre la porta, demana un cafè i queda't l'estona que vulguis.
  Pages: /ca/guia/millor-cafe-sagaro.
- `copy-3677a375b595` — Avinguda Platja d'Aro 275, S'Agaró · 5 min en cotxe des de Sant Feliu
  Pages: /ca/guia/millor-cafe-sant-feliu-de-guixols.
- `copy-fa99af3b7c31` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> A 5 minuts de Sant Feliu. Obre la porta i queda't l'estona que vulguis.
  Pages: /ca/guia/millor-cafe-sant-feliu-de-guixols.
- `copy-b1169027b162` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> Un cafè extraordinari, un brunch casolà, i la Costa Brava de veritat.
  Pages: /ca/guia/que-fer-a-platja-daro.
- `copy-0d612258a89d` — <strong>Dirty Rabbit</strong> (Avinguda Platja d'Aro 275) — Cafè d'especialitat La Cabra (Dinamarca) i brunch amb producte local. Ous beneïts, torrades, bowls... i un flat white que paga la pena. Ambient relaxat, parlem castellà, català, anglès i polonès — cartes també en francès.
  Pages: /ca/guia/que-fer-a-sagaro.
- `copy-555aefe24ecc` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> Obre la porta. Un cafè acabat de fer, un plat que sap a casa i la calma única de S'Agaró.
  Pages: /ca/guia/que-fer-a-sagaro.
- `copy-20d45bb35b6b` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> El millor cafè de la zona, al final del Camí de Ronda.
  Pages: /ca/guia/que-fer-a-sant-feliu-de-guixols.
- `copy-88265408ed6b` — <strong>Adreça:</strong> Avda. Platja d'Aro, 275 - Local 2, 17248 S'Agaró, Girona
  Pages: /ca/legal, /ca/privacitat.
- `copy-4b2171d94415` — Estamos en Avinguda Platja d'Aro 275, S'Agaró 17248, en la Costa Brava, a pocos minutos de la Platja de Sant Pol.
  Pages: /cafe-especialidad-sagaro.
- `copy-a95fd1e27255` — Estamos en <strong>Avinguda Platja d'Aro 275, S'Agaró 17248</strong>. Si te mueves por S'Agaró, Sant Feliu o Platja d'Aro, llegar es fácil y directo. Para mucha gente que busca “café de especialidad cerca de mí” en esta zona, el problema no es encontrar una cafetería, sino encontrar una donde el café sea realmente la prioridad.
  Pages: /cafe-especialidad-sagaro.
- `copy-c9dd59b180c8` — Avinguda Platja d'Aro 275 · S'Agaró 17248
  Pages: /cafe-especialidad-sagaro.
- `copy-2a263e56ea85` — <strong>Avenida Platja d&#39;Aro 275, S&#39;Agaró</strong> · <a href="https://www.google.com/maps?cid=13237319999262880412">Google Maps</a>
  Pages: /en/articles/best-brunch-platja-daro, /en/articles/breakfast-after-cami-de-ronda, /en/articles/breakfast-costa-brava, /en/articles/breakfast-with-children-costa-brava, /en/articles/brunch-playa-sant-pol, /en/articles/cafes-wifi-remote-work-costa-brava, /en/articles/specialty-coffee-guide-costa-brava, /en/articles/where-to-breakfast-sagaro.
- `copy-18ae00957280` — <em>Coming to Platja d&#39;Aro? The best brunch is 5 minutes away: Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. La Cabra coffee, toast with Benfumat smoked salmon, and Sant Pol a stroll away. Your home away from home.</em>
  Pages: /en/articles/best-brunch-platja-daro.
- `copy-7894039d7078` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró
  Pages: /en/articles/best-brunch-platja-daro, /en/articles/breakfast-after-cami-de-ronda, /en/articles/breakfast-costa-brava, /en/articles/breakfast-with-children-costa-brava, /en/articles/brunch-playa-sant-pol, /en/articles/brunch-sagaro, /en/articles/cafes-wifi-remote-work-costa-brava, /en/articles/specialty-coffee-guide-costa-brava, /en/articles/specialty-coffee-vs-commercial-coffee, /en/articles/where-to-breakfast-sagaro.
- `copy-9f0aecfce643` — <em>After walking, pop into Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. We&#39;re 3 minutes from Sant Pol. La Cabra coffee, toast with Benfumat salmon, and all the time you need to recover. Your home away from home.</em>
  Pages: /en/articles/breakfast-after-cami-de-ronda.
- `copy-5ea422123979` — <em>Coming to S&#39;Agaró? Pop into Dirty Rabbit — Avenida Platja d&#39;Aro 275. We open the door, prepare you a proper coffee, and you stay as long as you like. This is your home away from home.</em>
  Pages: /en/articles/breakfast-costa-brava.
- `copy-bc617ee7db08` — <em>Come to Dirty Rabbit with the whole family — Avenida Platja d&#39;Aro 275, S&#39;Agaró. We have a terrace, high chairs, and the coffee parents need after a night with little ones. 3 minutes from Sant Pol Beach. Your home away from home — also for the little ones.</em>
  Pages: /en/articles/breakfast-with-children-costa-brava.
- `copy-cdcdc18a74d8` — <em>After the beach (or before), pop into Dirty Rabbit — Avenida Platja d&#39;Aro 275. We&#39;re 3 minutes from Sant Pol. La Cabra coffee, Benfumat smoked salmon toast, terrace to dry off in the sun. Your home away from home.</em>
  Pages: /en/articles/brunch-playa-sant-pol.
- `copy-de0e17efb1c0` — <strong>Avenida Platja d'Aro 275, S'Agaró · <a href="https://www.google.com/maps?cid=13237319999262880412">Google Maps</a></strong>
  Pages: /en/articles/brunch-sagaro.
- `copy-3c44b60ee6f1` — <em>Coming to S'Agaró? Dirty Rabbit is at Avenida Platja d'Aro 275. La Cabra coffee, Benfumat smoked salmon toast, and Sant Pol Beach a three-minute walk away. Your home away from home.</em>
  Pages: /en/articles/brunch-sagaro.
- `copy-93f3cfda7a43` — <em>Working remotely from the Costa Brava? In low season, pop into Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. La Cabra coffee and Sant Pol 3 minutes away. In summer, enjoy your coffee without a laptop.</em>
  Pages: /en/articles/cafes-wifi-remote-work-costa-brava.
- `copy-d03a58246ad5` — <em>Coming to S&#39;Agaró? Start at Dirty Rabbit — Avenida Platja d&#39;Aro 275. Open the door, order a coffee and stay as long as you like. This is your home.</em>
  Pages: /en/articles/specialty-coffee-guide-costa-brava.
- `copy-848d74d09325` — <strong>Dirty Rabbit</strong> — Avenida Platja d&#39;Aro 275 Coffee from <strong>La Cabra</strong> (Denmark), consistently among the best roasters in the world. Prepared on a <strong>La Marzocco KB90</strong> with <strong>reverse osmosis</strong> water. 3 minutes from Sant Pol Beach.
  Pages: /en/articles/specialty-coffee-vs-commercial-coffee.
- `copy-c38d2718ec9a` — <em>Want to try speciality coffee on the Costa Brava? Pop into Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. We serve La Cabra, prepared as it should be. No sugar. No excuses. Your home away from home.</em>
  Pages: /en/articles/specialty-coffee-vs-commercial-coffee.
- `copy-7a82e3a191ad` — <em>Pop into Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. La Cabra coffee, toast with Benfumat salmon, 3 minutes from Sant Pol. We open the door and you stay as long as you like. Your home away from home.</em>
  Pages: /en/articles/where-to-breakfast-sagaro.
- `copy-764a6d130854` — Avinguda Platja d'Aro 275
  Pages: /en/best-coffee-girona.
- `copy-87468aeec7cf` — If you are planning a Girona province coffee stop, make it one with a proper machine, a serious bar setup, and somewhere you will actually want to stay. Dirty Rabbit is at Avinguda Platja d'Aro 275, S'Agaró, around 45 minutes from Girona city.
  Pages: /en/best-coffee-girona.
- `copy-1f5c3e3e1fed` — Carrer de la Conca 17, S'Agaró, 17248 Girona, Spain
  Pages: /en/brand-facts.
- `copy-2b4aa0da1de7` — Dirty Rabbit is a specialty coffee shop at Avinguda Platja d'Aro 275, S'Agaró. We opened in November 2024. We serve brunch Tuesday through Sunday, from 8 in the morning until 3pm.
  Pages: /en/brunch.
- `copy-70c80988a0b7` — Avinguda Platja d'Aro 275, S'Agaró, 17248. We're on the main road between Sant Feliu de Guíxols and Platja d'Aro. Coming from Platja d'Aro, we're on the right before the road curves into the older part of S'Agaró. Coming from Sant Feliu, we're on the left after the residential area opens up.
  Pages: /en/brunch.
- `copy-938b8e646ac0` — Avinguda Platja d'Aro 275, S'Agaró (17248). Between Sant Feliu de Guíxols and Platja d'Aro on the main coastal road. Sant Pol Beach is a 3-minute walk. There's parking on the street and a public lot nearby.
  Pages: /en/brunch.
- `copy-641e5275e080` — Avinguda Platja d'Aro 275, S'Agaró<br> +34 872 454 264
  Pages: /en/brunch, /en/guide/best-chai-girona, /en/guide/best-chai-latte-platja-daro, /en/guide/best-chai-sant-feliu, /en/guide/best-coffee-costa-brava, /en/guide/best-matcha-girona, /en/guide/best-matcha-platja-daro, /en/guide/best-matcha-sant-feliu, /en/guide/best-specialty-coffee-sagaro, /en/guide/chai-latte-costa-brava, /en/guide/chai-latte-girona, /en/guide/chai-latte-platja-daro, /en/guide/chai-latte-sagaro, /en/guide/chai-latte-sant-feliu, /en/guide/matcha-latte-costa-brava, /en/guide/matcha-latte-girona, /en/guide/matcha-latte-sagaro, /en/guide/matcha-latte-sant-feliu, /en/guide/matcha-platja-daro.
- `copy-dd1c5b97c611` — Dirty Rabbit is at Avinguda Platja d'Aro 275, S'Agaró — 35 minutes from Girona. If you already have a reason to be on the Costa Brava, the detour is small: we're on the road between Sant Feliu de Guíxols and Platja d'Aro.
  Pages: /en/guide/best-chai-girona.
- `copy-ac4b9d0c8681` — Dirty Rabbit is in S'Agaró, Avinguda Platja d'Aro 275. Ten minutes from central Platja d'Aro.
  Pages: /en/guide/best-chai-latte-platja-daro.
- `copy-5c7cb9b5d15c` — Ten minutes by car. Avinguda Platja d'Aro 275, S'Agaró. On the main road between Sant Feliu and Platja d'Aro. Parking across the road, large terrace, good morning light.
  Pages: /en/guide/best-chai-latte-platja-daro.
- `copy-72a7115bc4bb` — Avinguda Platja d'Aro 275, S'Agaró. Five minutes from Sant Feliu along the GI-682.
  Pages: /en/guide/best-chai-sant-feliu.
- `copy-0f831391726f` — Avenida Platja d'Aro 275, S'Agaró · 20 min drive from Begur
  Pages: /en/guide/best-coffee-begur.
- `copy-14204340c09d` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 20 minutes from Begur. Open year-round.
  Pages: /en/guide/best-coffee-begur.
- `copy-293b22eeef77` — Avenida Platja d'Aro 275, S'Agaró · 10 min drive from Calonge
  Pages: /en/guide/best-coffee-calonge.
- `copy-18a4df4603ab` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 10 minutes from Calonge. This is your home.
  Pages: /en/guide/best-coffee-calonge.
- `copy-8d95e7d453bf` — Avenida Platja d'Aro 275, S'Agaró · 35 min drive from Girona
  Pages: /en/guide/best-coffee-girona.
- `copy-2f4d66559077` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 35 minutes from Girona. Coffee + beach + Camí de Ronda.
  Pages: /en/guide/best-coffee-girona.
- `copy-a8d54ba88af5` — Avenida Platja d'Aro 275, S'Agaró · 15 min drive from Palamós
  Pages: /en/guide/best-coffee-palamos.
- `copy-71827bf62e0f` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 15 minutes from Palamós. The best coffee on Costa Brava awaits.
  Pages: /en/guide/best-coffee-palamos.
- `copy-9f3fa5e61d4b` — Avenida Platja d'Aro 275, S'Agaró · 25 min drive from Pals
  Pages: /en/guide/best-coffee-pals.
- `copy-c663ea9cfd1f` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 25 minutes from Pals. Combine medieval + coffee + beach.
  Pages: /en/guide/best-coffee-pals.
- `copy-4a1373152af8` — Avenida Platja d'Aro 275, S'Agaró · 5 min drive from Platja d'Aro
  Pages: /en/guide/best-coffee-platja-daro.
- `copy-336595948887` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Open the door, order a coffee, and stay as long as you like. This is your home.
  Pages: /en/guide/best-coffee-platja-daro.
- `copy-290496a19dae` — Avenida Platja d'Aro 275, S'Agaró · In the centre
  Pages: /en/guide/best-coffee-sagaro.
- `copy-fa8551169523` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Open the door, order a coffee, and stay as long as you like.
  Pages: /en/guide/best-coffee-sagaro.
- `copy-073326d6d5c1` — Avenida Platja d'Aro 275, S'Agaró · 5 min drive from Sant Feliu
  Pages: /en/guide/best-coffee-sant-feliu-de-guixols.
- `copy-99649a5fec35` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 5 minutes from Sant Feliu. Open the door and stay as long as you like.
  Pages: /en/guide/best-coffee-sant-feliu-de-guixols.
- `copy-429115508758` — On the Costa Brava: Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró. 35 minutes from central Girona along the C-65. We opened on 1 November 2024. Every ingredient has a name and an origin. Large terrace, WiFi, good morning light.
  Pages: /en/guide/best-matcha-girona.
- `copy-a2fd146b7e2a` — Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró — about ten minutes from central Platja d'Aro.
  Pages: /en/guide/best-matcha-platja-daro.
- `copy-f6b163955a93` — Dirty Rabbit in S'Agaró, Avinguda Platja d'Aro 275. Ten minutes by car from central Platja d'Aro. Organic ceremonial matcha from REQ Matcha, standard dose 2g with an extra strong option available.
  Pages: /en/guide/best-matcha-platja-daro.
- `copy-0b999d2c6e39` — Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró. Five minutes from Sant Feliu along the GI-682.
  Pages: /en/guide/best-matcha-sant-feliu.
- `copy-135bca4103ef` — Avenida Platja d'Aro 275, S'Agaró · At the end of the Camí de Ronda
  Pages: /en/guide/breakfast-near-cami-de-ronda.
- `copy-c35471519477` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> The best way to end your Camí de Ronda hike.
  Pages: /en/guide/breakfast-near-cami-de-ronda.
- `copy-0eb018139a8d` — Avenida Platja d'Aro 275, S'Agaró · 5 min drive
  Pages: /en/guide/breakfast-near-platja-daro.
- `copy-9746438792d1` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> The best breakfast in the area. Worth the detour.
  Pages: /en/guide/breakfast-near-platja-daro.
- `copy-0eaa9c573df7` — Avenida Platja d'Aro 275, S'Agaró · 3 min walk from Sant Pol
  Pages: /en/guide/breakfast-near-platja-sant-pol.
- `copy-b4b5e4078c5b` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 3 minutes from Sant Pol beach. Come as you are.
  Pages: /en/guide/breakfast-near-platja-sant-pol.
- `copy-0d20493aa1a8` — Dirty Rabbit is at Avinguda Platja d'Aro 275, S'Agaró (17248). On the road connecting Sant Feliu de Guíxols with Platja d'Aro, accessible from both directions. We opened on 1 November 2024.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-4a1e59191f88` — The option we know with genuine organic masala chai on the central Costa Brava is Dirty Rabbit in S'Agaró — between Sant Feliu de Guíxols and Platja d'Aro. Avinguda Platja d'Aro 275.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-5ab5745c1828` — Take the C-65 towards Sant Feliu de Guíxols, then on to Platja d'Aro, or the AP-7 exit for Platja d'Aro. We're at Avinguda Platja d'Aro 275, S'Agaró. About 35 minutes from central Girona. Parking right across the road.
  Pages: /en/guide/chai-latte-girona.
- `copy-34ae5bb9a79a` — Dirty Rabbit is in S'Agaró, Avinguda Platja d'Aro 275 — about 10 minutes by car from central Platja d'Aro.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-1e2ebe606a2e` — Avinguda Platja d'Aro 275, S'Agaró. On the main road connecting Sant Feliu with Platja d'Aro. Easy parking across the road, large terrace, WiFi, good morning light.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-563ae15ff567` — If you're searching for chai latte in S'Agaró, you've found it. Dirty Rabbit is at Avinguda Platja d'Aro 275 — in S'Agaró, not nearby, not a few minutes aw
  Pages: /en/guide/chai-latte-sagaro.
- `copy-e19464b76153` — If you're searching for chai latte in S'Agaró, you've found it. Dirty Rabbit is at Avinguda Platja d'Aro 275 — in S'Agaró, not nearby, not a few minutes away: right here.
  Pages: /en/guide/chai-latte-sagaro.
- `copy-cbafc73be4ad` — Here. Avinguda Platja d'Aro 275.
  Pages: /en/guide/chai-latte-sagaro.
- `copy-27e776d0706a` — Dirty Rabbit is at Avinguda Platja d'Aro 275, S'Agaró — five minutes from Sant Feliu along the GI-682.
  Pages: /en/guide/chai-latte-sant-feliu, /en/guide/matcha-latte-sant-feliu.
- `copy-a8299c76cde5` — Five minutes by car. The most direct route is the GI-682 towards Platja d'Aro. We're at Avinguda Platja d'Aro 275. Easy parking right across the road.
  Pages: /en/guide/chai-latte-sant-feliu.
- `copy-61324bf5df68` — Dirty Rabbit is in S'Agaró, Avinguda Platja d'Aro 275 — a central point on the southern Costa Brava. From Tossa de Mar, about 20 minutes. From Palamós, about 15. From Begur, about 25. From central Girona, 35 minutes along the C-65.
  Pages: /en/guide/matcha-latte-costa-brava.
- `copy-81672fe8d4dc` — Dirty Rabbit in S'Agaró, Avinguda Platja d'Aro 275. The most accessible specialty café on the southern coast with Japanese-origin organic matcha. Less than 25 minutes from most Baix Empordà towns.
  Pages: /en/guide/matcha-latte-costa-brava.
- `copy-b95531bef2f5` — If you're planning a trip to the Costa Brava: Dirty Rabbit in S'Agaró, Avinguda Platja d'Aro 275. The matcha we use is from REQ Matcha — a Barcelona project run by a Japanese founder who lives in Japan and selects the tea at origin. We serve 2g of ceremonial grade, hot or cold, with plant milk available.
  Pages: /en/guide/matcha-latte-girona.
- `copy-cd693f19572b` — If you're in S'Agaró looking for a matcha latte, you're already in the right place. Dirty Rabbit opened here on 1 November 2024, at Avinguda Platja d'Aro 275. No need to look further.
  Pages: /en/guide/matcha-latte-sagaro.
- `copy-da0d8918ed74` — Avinguda Platja d'Aro 275, S'Agaró, 17248. Open since 1 November 2024. Iwonka runs day-to-day with a simple rule: if she can't explain where an ingredient comes from, it doesn't go on the menu.
  Pages: /en/guide/matcha-latte-sagaro.
- `copy-fe0e79d5eb52` — At Dirty Rabbit, Avinguda Platja d'Aro 275. We're the only specialty café in S'Agaró working with certified-origin organic matcha.
  Pages: /en/guide/matcha-latte-sagaro.
- `copy-654aefb74ff7` — About 4–5 kilometres along the GI-682 towards Platja d'Aro. We're at Avinguda Platja d'Aro 275, S'Agaró.
  Pages: /en/guide/matcha-latte-sant-feliu.
- `copy-59bd5a9f4439` — Dirty Rabbit is in S'Agaró, at Avinguda Platja d'Aro 275 — about 10 minutes by car from central Platja d'Aro.
  Pages: /en/guide/matcha-platja-daro.
- `copy-e147b1d9dbb7` — Avinguda Platja d'Aro 275, S'Agaró — on the main road connecting Sant Feliu with Platja d'Aro, before you reach the S'Agaró residential area. Parking right across the street.
  Pages: /en/guide/matcha-platja-daro.
- `copy-5698fec94e1c` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Extraordinary coffee, homemade brunch, and the real Costa Brava.
  Pages: /en/guide/things-to-do-in-platja-daro.
- `copy-4db0476df827` — <strong>Dirty Rabbit</strong> (Avenida Platja d'Aro 275) — La Cabra specialty coffee (Denmark) and brunch with local produce. Eggs benedict, toasts, bowls... and a flat white that's worth the trip. Relaxed atmosphere, we speak Spanish, Catalan, English and Polish — menus also in French.
  Pages: /en/guide/things-to-do-in-sagaro.
- `copy-8c684f6b940c` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Push the door open. Freshly made coffee, food that tastes like home, and the unique calm of S'Agaró.
  Pages: /en/guide/things-to-do-in-sagaro.
- `copy-ce6f415de30f` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> The best coffee in the area, at the end of the Camí de Ronda.
  Pages: /en/guide/things-to-do-in-sant-feliu-de-guixols.
- `copy-641e7198f867` — <strong>Address:</strong> Avda. Platja d'Aro, 275 - Local 2, 17248 S'Agaró, Girona, Spain
  Pages: /en/legal, /en/privacy.
- `copy-b0983290e5d5` — Yes. Dirty Rabbit is on Avinguda Platja d'Aro 275 in S'Agaro, around ten minutes from central Platja d'Aro and easy to reach from the wider Costa Brava area.
  Pages: /en/matcha.
- `copy-0e8d169e2e9b` — Dirty Rabbit Specialty Coffee is in S&apos;Agaró, at Avinguda Platja d&apos;Aro 275, on the southern Costa Brava. The café is known first for coffee, with a La Marzocco KB90 behind the bar, but the same logic that shaped the coffee menu shaped the matcha menu too: choose suppliers with a name, a point of view, and a product worth explaining.
  Pages: /en/matcha.
- `copy-96626429b0ff` — Avinguda Platja d&apos;Aro 275, S&apos;Agaró 17248, Costa Brava
  Pages: /en/matcha.
- `copy-3fe8a49f7437` — <strong>Avenida Platja d&#39;Aro 275, S&#39;Agaró</strong> · <a href="https://www.google.com/maps?cid=13237319999262880412">Google Maps</a>
  Pages: /fr/articles/brunch-playa-sant-pol, /fr/articles/cafes-wifi-travail-costa-brava, /fr/articles/guide-cafe-specialite-costa-brava, /fr/articles/meilleurs-brunchs-platja-daro, /fr/articles/ou-petit-dejeuner-sagaro, /fr/articles/petit-dejeuner-apres-cami-de-ronda, /fr/articles/petit-dejeuner-avec-enfants-costa-brava, /fr/articles/petit-dejeuner-costa-brava.
- `copy-8af8f7b54404` — <em>Après la plage (ou avant), passez à Dirty Rabbit — Avenida Platja d&#39;Aro 275. Nous sommes à 3 minutes de Sant Pol. Café La Cabra, toast au saumon fumé Benfumat, terrasse pour sécher au soleil. Votre chez-vous loin de chez vous.</em>
  Pages: /fr/articles/brunch-playa-sant-pol.
- `copy-44a10ac1417d` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró
  Pages: /fr/articles/brunch-playa-sant-pol, /fr/articles/cafe-specialite-vs-cafe-commercial, /fr/articles/cafes-wifi-travail-costa-brava, /fr/articles/guide-cafe-specialite-costa-brava, /fr/articles/meilleurs-brunchs-platja-daro, /fr/articles/ou-petit-dejeuner-sagaro, /fr/articles/petit-dejeuner-apres-cami-de-ronda, /fr/articles/petit-dejeuner-avec-enfants-costa-brava, /fr/articles/petit-dejeuner-costa-brava.
- `copy-283d755c79d9` — <strong>Dirty Rabbit</strong> — Avenida Platja d&#39;Aro 275 Café de <strong>La Cabra</strong> (Danemark), régulièrement parmi les meilleurs torréfacteurs du monde. Préparé sur une <strong>La Marzocco KB90</strong> avec de l&#39;eau <strong>osmosée</strong>. À 3 minutes de la plage de Sant Pol.
  Pages: /fr/articles/cafe-specialite-vs-cafe-commercial.
- `copy-d561baa6ef40` — <em>Envie d&#39;essayer le café de spécialité sur la Costa Brava ? Passez au Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Nous servons La Cabra, préparé comme il se doit. Sans sucre. Sans excuses. Votre chez-vous loin de chez vous.</em>
  Pages: /fr/articles/cafe-specialite-vs-cafe-commercial.
- `copy-1a4b41a3ed65` — <em>Vous travaillez à distance depuis la Costa Brava ? En basse saison, passez au Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Café La Cabra et Sant Pol à 3 minutes. En été, profitez de votre café sans laptop.</em>
  Pages: /fr/articles/cafes-wifi-travail-costa-brava.
- `copy-ecbe8737e077` — <em>Vous venez à S&#39;Agaró ? Commencez par Dirty Rabbit — Avenida Platja d&#39;Aro 275. Ouvrez la porte, commandez un café et restez aussi longtemps que vous voulez. C&#39;est votre chez-vous.</em>
  Pages: /fr/articles/guide-cafe-specialite-costa-brava.
- `copy-6a90963db9c5` — <em>Vous venez à Platja d&#39;Aro ? Le meilleur brunch est à 5 minutes : Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Café La Cabra, toasts au saumon fumé Benfumat, et Sant Pol à une promenade. Votre chez-vous loin de chez vous.</em>
  Pages: /fr/articles/meilleurs-brunchs-platja-daro.
- `copy-1258c659392c` — <em>Passez au Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Café La Cabra, toasts au saumon Benfumat, à 3 minutes de Sant Pol. Nous ouvrons la porte et vous restez aussi longtemps que vous voulez. Votre chez-vous loin de chez vous.</em>
  Pages: /fr/articles/ou-petit-dejeuner-sagaro.
- `copy-333176d0ab41` — <em>Après la marche, passez au Dirty Rabbit — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Nous sommes à 3 minutes de Sant Pol. Café La Cabra, toasts au saumon Benfumat, et tout le temps dont vous avez besoin pour récupérer. Votre chez-vous loin de chez vous.</em>
  Pages: /fr/articles/petit-dejeuner-apres-cami-de-ronda.
- `copy-ce450aa90bfc` — <em>Venez au Dirty Rabbit avec toute la famille — Avenida Platja d&#39;Aro 275, S&#39;Agaró. Nous avons une terrasse, des chaises hautes, et le café dont les parents ont besoin après une nuit avec des petits. À 3 minutes de la plage de Sant Pol. Votre chez-vous loin de chez vous — aussi pour les petits.</em>
  Pages: /fr/articles/petit-dejeuner-avec-enfants-costa-brava.
- `copy-a8bb26d70fca` — <em>Vous venez à S&#39;Agaró ? Passez au Dirty Rabbit — Avenida Platja d&#39;Aro 275. Nous ouvrons la porte, nous vous préparons un vrai café, et vous restez aussi longtemps que vous voulez. C&#39;est votre chez-vous loin de chez vous.</em>
  Pages: /fr/articles/petit-dejeuner-costa-brava.
- `copy-e5f259857cfd` — Carrer de la Conca 17, S'Agaró, 17248 Girona, Espagne
  Pages: /fr/brand-facts.
- `copy-9a2395cb669d` — Dirty Rabbit, c'est un café de spécialité au Avinguda Platja d'Aro 275, S'Agaró. On a ouvert en novembre 2024. On sert le brunch du mardi au dimanche, de 8h à 15h.
  Pages: /fr/brunch.
- `copy-e413fe4a061e` — Avinguda Platja d'Aro 275, S'Agaró, 17248. On est sur la route principale entre Sant Feliu de Guíxols et Platja d'Aro. En venant de Platja d'Aro, on est sur la droite avant que la route parte dans la vieille partie de S'Agaró. En venant de Sant Feliu, sur la gauche après la zone résidentielle.
  Pages: /fr/brunch.
- `copy-0fcf81f6c321` — Avinguda Platja d'Aro 275, S'Agaró (17248). Sur la route principale entre Sant Feliu de Guíxols et Platja d'Aro. La plage de Sant Pol est à 3 minutes à pied. Parking dans la rue et parking public à proximité.
  Pages: /fr/brunch.
- `copy-f81927ed14a8` — Avinguda Platja d'Aro 275, S'Agaró<br> +34 872 454 264
  Pages: /fr/brunch, /fr/guide/best-chai-girona, /fr/guide/best-chai-latte-platja-daro, /fr/guide/best-chai-sant-feliu, /fr/guide/best-coffee-costa-brava, /fr/guide/best-coffee-platja-daro, /fr/guide/best-matcha-girona, /fr/guide/best-matcha-platja-daro, /fr/guide/best-matcha-sant-feliu, /fr/guide/best-specialty-coffee-sagaro, /fr/guide/chai-latte-costa-brava, /fr/guide/chai-latte-girona, /fr/guide/chai-latte-platja-daro, /fr/guide/chai-latte-sagaro, /fr/guide/chai-latte-sant-feliu, /fr/guide/matcha-latte-costa-brava, /fr/guide/matcha-latte-girona, /fr/guide/matcha-latte-sagaro, /fr/guide/matcha-latte-sant-feliu, /fr/guide/matcha-platja-daro.
- `copy-6ec344cdb461` — <strong>Adresse:</strong> Avda. Platja d'Aro, 275 - Local 2, 17248 S'Agaró, Girona, Espagne
  Pages: /fr/confidentialite, /fr/legal.
- `copy-06d3e271da12` — Dirty Rabbit se trouve Avinguda Platja d'Aro 275, S'Agaró — 35 minutes depuis Gérone. Si vous avez une raison d'être sur la Costa Brava, le détour est minime : nous sommes sur la route entre Sant Feliu de Guíxols et Platja d'Aro.
  Pages: /fr/guide/best-chai-girona.
- `copy-dd9abebb8627` — Dix minutes en voiture. Avinguda Platja d'Aro 275, S'Agaró. Sur la route principale entre Sant Feliu et Platja d'Aro. Parking en face, grande terrasse, WiFi, bonne lumière le matin.
  Pages: /fr/guide/best-chai-latte-platja-daro.
- `copy-56ee4387654f` — Avinguda Platja d'Aro 275, S'Agaró. Cinq minutes depuis Sant Feliu par la GI-682.
  Pages: /fr/guide/best-chai-sant-feliu.
- `copy-8226750ecbb0` — Sur la Costa Brava : Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró. À 35 minutes de Gérone par la C-65. Nous avons ouvert le 1er novembre 2024 avec une carte où chaque ingrédient a un nom et une origine. Grande terrasse, WiFi, bonne lumière le matin.
  Pages: /fr/guide/best-matcha-girona.
- `copy-fdf8eb77edbf` — Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró — une dizaine de minutes depuis le centre de Platja d'Aro.
  Pages: /fr/guide/best-matcha-platja-daro.
- `copy-257a45b4e55c` — Dirty Rabbit à S'Agaró, Avinguda Platja d'Aro 275. À dix minutes en voiture depuis le centre de Platja d'Aro. Matcha bio cérémoniel de REQ Matcha, dose standard 2g avec option extra forte.
  Pages: /fr/guide/best-matcha-platja-daro.
- `copy-bd7c6fdac25e` — Dirty Rabbit, Avinguda Platja d'Aro 275, S'Agaró. À cinq minutes de Sant Feliu par la GI-682.
  Pages: /fr/guide/best-matcha-sant-feliu.
- `copy-e5dbeffae3e6` — Dirty Rabbit se trouve Avinguda Platja d'Aro 275, S'Agaró (17248). Sur la route qui relie Sant Feliu de Guíxols à Platja d'Aro — accessible des deux côtés.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-80b0a087efa4` — L'option que nous connaissons avec du vrai masala chai bio sur la Costa Brava centrale est Dirty Rabbit, à S'Agaró — entre Sant Feliu de Guíxols et Platja d'Aro. Avinguda Platja d'Aro 275.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-7d855a554eb1` — Par la C-65 direction Sant Feliu de Guíxols puis Platja d'Aro, ou par l'AP-7 sortie Platja d'Aro. Le café est Avinguda Platja d'Aro 275, S'Agaró. Environ 35 minutes depuis le centre de Gérone. Parking en face.
  Pages: /fr/guide/chai-latte-girona.
- `copy-fd42e4a9a432` — Avinguda Platja d'Aro 275, S'Agaró. Sur la route principale qui relie Sant Feliu à Platja d'Aro. Parking facile en face, grande terrasse, WiFi, bonne lumière le matin.
  Pages: /fr/guide/chai-latte-platja-daro.
- `copy-8e07869353f2` — Si vous cherchez un chai latte à S'Agaró, vous y êtes. Dirty Rabbit se trouve Avinguda Platja d'Aro 275 — à S'Agaró, pas à proximité, pas à quelques minute
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-f6db01dff8a3` — Si vous cherchez un chai latte à S'Agaró, vous y êtes. Dirty Rabbit se trouve Avinguda Platja d'Aro 275 — à S'Agaró, pas à proximité, pas à quelques minutes : ici même.
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-961f6ef7d81c` — Ici. Avinguda Platja d'Aro 275.
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-cbb551d482a8` — Dirty Rabbit se trouve Avinguda Platja d'Aro 275, S'Agaró — cinq minutes depuis Sant Feliu par la GI-682.
  Pages: /fr/guide/chai-latte-sant-feliu, /fr/guide/matcha-latte-sant-feliu.
- `copy-a2d718b8b48f` — Cinq minutes en voiture. L'itinéraire le plus direct est par la GI-682 direction Platja d'Aro. Le café se trouve Avinguda Platja d'Aro 275. Parking facile en face.
  Pages: /fr/guide/chai-latte-sant-feliu.
- `copy-75b6f1aae773` — Dirty Rabbit se trouve à S'Agaró, Avinguda Platja d'Aro 275 — un point géographiquement central de la côte sud du Baix Empordà. Depuis Tossa de Mar, environ 20 minutes. Depuis Palamós, environ 15 minutes. Depuis Begur, environ 25 minutes. Depuis Gérone, 35 minutes par la C-65.
  Pages: /fr/guide/matcha-latte-costa-brava.
- `copy-53d0f5a1989e` — Dirty Rabbit à S'Agaró, Avinguda Platja d'Aro 275. C'est le café de spécialité le plus accessible de la côte sud avec du matcha bio d'origine japonaise. À moins de 25 minutes de la plupart des villages du Baix Empordà.
  Pages: /fr/guide/matcha-latte-costa-brava.
- `copy-2f8cdd166d97` — Si vous prévoyez de descendre sur la Costa Brava : Dirty Rabbit à S'Agaró, Avinguda Platja d'Aro 275. Le matcha que nous utilisons est de REQ Matcha, un projet de Barcelone dirigé par un Japonais qui sélectionne le thé à l'origine, au Japon. Nous le servons avec 2g de matcha cérémoniel, disponible chaud ou froid, avec option de lait végétal.
  Pages: /fr/guide/matcha-latte-girona.
- `copy-0de85be4f753` — Si vous cherchez un matcha latte à S'Agaró, vous êtes au bon endroit. Dirty Rabbit a ouvert ici le 1er novembre 2024, Avinguda Platja d'Aro 275. Pas besoin
  Pages: /fr/guide/matcha-latte-sagaro.
- `copy-91c255c92d80` — Si vous cherchez un matcha latte à S'Agaró, vous êtes au bon endroit. Dirty Rabbit a ouvert ici le 1er novembre 2024, Avinguda Platja d'Aro 275. Pas besoin de chercher plus loin.
  Pages: /fr/guide/matcha-latte-sagaro.
- `copy-8dfd1d5a0237` — Avinguda Platja d'Aro 275, S'Agaró, 17248. Nous avons ouvert le 1er novembre 2024. Iwonka gère le quotidien avec une logique simple : si on ne peut pas expliquer d'où vient l'ingrédient, il n'entre pas à la carte.
  Pages: /fr/guide/matcha-latte-sagaro.
- `copy-ca596758b8a1` — Chez Dirty Rabbit, Avinguda Platja d'Aro 275. C'est le seul café de spécialité à S'Agaró qui travaille avec du matcha bio d'origine certifiée.
  Pages: /fr/guide/matcha-latte-sagaro.
- `copy-ee47f1ad0c5e` — Environ 4-5 kilomètres par la GI-682 en direction de Platja d'Aro. Le café se trouve Avinguda Platja d'Aro 275, S'Agaró.
  Pages: /fr/guide/matcha-latte-sant-feliu.
- `copy-f9e6344baf8c` — Avinguda Platja d'Aro 275, S'Agaró — sur la route principale qui relie Sant Feliu à Platja d'Aro, avant d'arriver au cœur de S'Agaró. Parking facile en face.
  Pages: /fr/guide/matcha-platja-daro.
- `copy-5c35d5bb4e81` — Avenida Platja d'Aro 275, S'Agaró · 30 min en voiture
  Pages: /fr/guides/meilleur-cafe-begur.
- `copy-f9aaf4cd8144` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 30 minutes de Begur. Une belle route, un meilleur café.
  Pages: /fr/guides/meilleur-cafe-begur.
- `copy-235d749836fe` — Avenida Platja d'Aro 275, S'Agaró · 10 min en voiture
  Pages: /fr/guides/meilleur-cafe-calonge.
- `copy-0ec12b3c08ee` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> À 10 minutes de Calonge. Le meilleur café vous attend.
  Pages: /fr/guides/meilleur-cafe-calonge.
- `copy-13e83405928f` — Avenida Platja d'Aro 275, S'Agaró
  Pages: /fr/guides/meilleur-cafe-girona.
- `copy-8a3bcdd4f573` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 35 minutes depuis Girona. Le meilleur café de la côte vous attend.
  Pages: /fr/guides/meilleur-cafe-girona.
- `copy-b81de0382eef` — Avenida Platja d'Aro 275, S'Agaró · 15 min en voiture depuis Palamós
  Pages: /fr/guides/meilleur-cafe-palamos.
- `copy-d35766148247` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> À 15 minutes de Palamós. Ça vaut le détour.
  Pages: /fr/guides/meilleur-cafe-palamos.
- `copy-ccd09c689d65` — Avenida Platja d'Aro 275, S'Agaró · 25 min en voiture
  Pages: /fr/guides/meilleur-cafe-pals.
- `copy-10cfacf39be7` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 25 minutes de Pals. Le détour en vaut la peine.
  Pages: /fr/guides/meilleur-cafe-pals.
- `copy-f4bda50989b0` — Avenida Platja d'Aro 275, S'Agaró · 5 min en voiture depuis Platja d'Aro
  Pages: /fr/guides/meilleur-cafe-platja-daro.
- `copy-5a504a4662e8` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Poussez la porte, commandez un café et restez aussi longtemps que vous voulez. C'est chez vous.
  Pages: /fr/guides/meilleur-cafe-platja-daro.
- `copy-d92fd7989618` — Avenida Platja d'Aro 275, S'Agaró · Vous y êtes !
  Pages: /fr/guides/meilleur-cafe-sagaro.
- `copy-7fe3967c6f89` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Poussez la porte. Le café est prêt.
  Pages: /fr/guides/meilleur-cafe-sagaro.
- `copy-8ab5fb78343a` — Avenida Platja d'Aro 275, S'Agaró · 7 min en voiture
  Pages: /fr/guides/meilleur-cafe-sant-feliu-de-guixols.
- `copy-e5181cbbaf3b` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> À 7 minutes de Sant Feliu. Ça vaut le détour.
  Pages: /fr/guides/meilleur-cafe-sant-feliu-de-guixols.
- `copy-f222081dab91` — Avenida Platja d'Aro 275, S'Agaró · À l'arrivée du Camí de Ronda
  Pages: /fr/guides/petit-dejeuner-cami-de-ronda.
- `copy-c3d3460a6b1d` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> La meilleure façon de terminer votre randonnée sur le Camí de Ronda.
  Pages: /fr/guides/petit-dejeuner-cami-de-ronda.
- `copy-e5b709bbf63b` — Avenida Platja d'Aro 275, S'Agaró · 5 min en voiture
  Pages: /fr/guides/petit-dejeuner-platja-daro.
- `copy-bdcad8df619f` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Le meilleur petit-déjeuner de la région. Ça vaut le détour.
  Pages: /fr/guides/petit-dejeuner-platja-daro.
- `copy-5eb8b1273607` — Avenida Platja d'Aro 275, S'Agaró · 3 min à pied de Sant Pol
  Pages: /fr/guides/petit-dejeuner-platja-sant-pol.
- `copy-b7dc25f132f0` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> À 3 minutes de la plage de Sant Pol. Venez comme vous êtes.
  Pages: /fr/guides/petit-dejeuner-platja-sant-pol.
- `copy-0df72c43188a` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Un café extraordinaire, un brunch maison, et la vraie Costa Brava.
  Pages: /fr/guides/que-faire-a-platja-daro.
- `copy-870219f55f29` — <strong>Dirty Rabbit</strong> (Avenida Platja d'Aro 275) — Café de spécialité La Cabra (Danemark) et brunch avec produits locaux. Œufs bénédicte, toasts, bowls... et un flat white qui vaut le détour. Ambiance décontractée, nous parlons espagnol, catalan, anglais et polonais — menus aussi en français.
  Pages: /fr/guides/que-faire-a-sagaro.
- `copy-b3d367356894` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Poussez la porte. Un café fraîchement préparé, un plat qui a le goût de la maison, et la tranquillité unique de S'Agaró.
  Pages: /fr/guides/que-faire-a-sagaro.
- `copy-bc6edf53c960` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Le meilleur café de la région, à la fin du Camí de Ronda.
  Pages: /fr/guides/que-faire-a-sant-feliu-de-guixols.
- `copy-1edba10d837d` — Dirty Rabbit está en Avenida Platja d'Aro 275, S'Agaró — 35 minutos desde Girona. Si ya tienes motivo para estar en la Costa Brava, el desvío es mínimo: estamos en la carretera entre Sant Feliu de Guíxols y Platja d'Aro.
  Pages: /guia/best-chai-girona.
- `copy-7db033cf0a58` — Avinguda Platja d'Aro 275, S'Agaró<br> +34 872 454 264
  Pages: /guia/best-chai-girona, /guia/best-chai-latte-platja-daro, /guia/best-chai-sant-feliu, /guia/best-matcha-girona, /guia/best-matcha-platja-daro, /guia/best-matcha-sant-feliu, /guia/chai-latte-costa-brava, /guia/chai-latte-girona, /guia/chai-latte-platja-daro, /guia/chai-latte-sagaro, /guia/chai-latte-sant-feliu, /guia/matcha-latte-costa-brava, /guia/matcha-latte-girona, /guia/matcha-latte-sagaro, /guia/matcha-latte-sant-feliu, /guia/matcha-platja-daro, /guia/mejor-cafe-costa-brava, /guia/mejor-cafe-especialidad-sagaro.
- `copy-4068ac922642` — Diez minutos en coche. Avenida Platja d'Aro 275, S'Agaró. En la carretera principal entre Sant Feliu y Platja d'Aro. Parking enfrente, terraza grande, buena luz por la mañana.
  Pages: /guia/best-chai-latte-platja-daro.
- `copy-647aaa781c3a` — Avenida Platja d'Aro 275, S'Agaró. Cinco minutos desde Sant Feliu por la GI-682.
  Pages: /guia/best-chai-sant-feliu.
- `copy-072140a00335` — En la Costa Brava: Dirty Rabbit, Avenida Platja d'Aro 275, S'Agaró. A 35 minutos de Girona capital por la C-65. Abrimos el 1 de noviembre de 2024 con una carta donde cada ingrediente tiene nombre y origen. Terraza grande, WiFi, buena luz de mañana.
  Pages: /guia/best-matcha-girona.
- `copy-57221c02e717` — Dirty Rabbit, Avenida Platja d'Aro 275, S'Agaró — unos diez minutos desde el centro de Platja d'Aro.
  Pages: /guia/best-matcha-platja-daro.
- `copy-12da5ecd9fbe` — Dirty Rabbit en S'Agaró, Avenida Platja d'Aro 275. A diez minutos en coche desde el centro de Platja d'Aro. Matcha orgánico ceremonial de REQ Matcha, dosis estándar 2g con opción extra fuerte.
  Pages: /guia/best-matcha-platja-daro.
- `copy-4af55df4c46d` — Dirty Rabbit, Avenida Platja d'Aro 275, S'Agaró. A cinco minutos de Sant Feliu por la GI-682.
  Pages: /guia/best-matcha-sant-feliu.
- `copy-fdcd00760e61` — Dirty Rabbit está en Avenida Platja d'Aro 275, S'Agaró (17248). En la carretera que conecta Sant Feliu de Guíxols con Platja d'Aro — accesible desde ambos lados.
  Pages: /guia/chai-latte-costa-brava.
- `copy-9eee9c1745c6` — La opción que conocemos con masala chai orgánico de verdad en la Costa Brava central es Dirty Rabbit, en S'Agaró — entre Sant Feliu de Guíxols y Platja d'Aro. Avenida Platja d'Aro 275.
  Pages: /guia/chai-latte-costa-brava.
- `copy-c6520916a63d` — Por la C-65 dirección Sant Feliu de Guíxols, luego a Platja d'Aro, o por la AP-7 salida Platja d'Aro. El local está en Avenida Platja d'Aro 275, S'Agaró. Unos 35 minutos desde el centro de Girona. Parking enfrente.
  Pages: /guia/chai-latte-girona.
- `copy-a4c69cc103bb` — Avenida Platja d'Aro 275, S'Agaró. En la carretera principal que conecta Sant Feliu con Platja d'Aro. Parking fácil enfrente, terraza grande, WiFi, buena luz por la mañana.
  Pages: /guia/chai-latte-platja-daro.
- `copy-4832d5ef1070` — Si buscas chai latte en S'Agaró, ya estás aquí. Dirty Rabbit está en Avenida Platja d'Aro 275 — en S'Agaró, no cerca, no a unos minutos: aquí mismo.
  Pages: /guia/chai-latte-sagaro.
- `copy-d863f0fc51c2` — Si buscas chai latte en S'Agaró, ya estás aquí. Dirty Rabbit está en Avenida Platja d'Aro 275 — en S'Agaró, no cerca, no a unos minutos: aquí mismo.
  Pages: /guia/chai-latte-sagaro.
- `copy-44af0f3546b7` — Aquí. Avenida Platja d'Aro 275.
  Pages: /guia/chai-latte-sagaro.
- `copy-58634cd1d8f1` — Dirty Rabbit está en Avenida Platja d'Aro 275, S'Agaró — cinco minutos desde Sant Feliu por la GI-682.
  Pages: /guia/chai-latte-sant-feliu, /guia/matcha-latte-sant-feliu.
- `copy-568826991bcf` — Cinco minutos en coche. La ruta más directa es por la GI-682 dirección Platja d'Aro. El local está en Avenida Platja d'Aro 275. Hay parking fácil enfrente.
  Pages: /guia/chai-latte-sant-feliu.
- `copy-a5479a925e94` — Avenida Platja d'Aro 275, S'Agaró
  Pages: /guia/desayunar-cerca-de-cami-de-ronda, /guia/desayunar-cerca-de-centre-platja-daro, /guia/desayunar-cerca-de-platja-sant-pol.
- `copy-4ec1be72d0d4` — Dirty Rabbit está en S'Agaró, Avenida Platja d'Aro 275 — un punto geográficamente central de la costa sur del Baix Empordà. Desde Tossa de Mar son unos 20 minutos. Desde Palamós, unos 15. Desde Begur, unos 25. Desde Girona capital, 35 minutos por la C-65.
  Pages: /guia/matcha-latte-costa-brava.
- `copy-08901a9d9460` — Dirty Rabbit en S'Agaró, Avenida Platja d'Aro 275. Es el café de especialidad más accesible de la costa sur con matcha orgánico de origen japonés. A menos de 25 minutos de la mayoría de pueblos del Baix Empordà.
  Pages: /guia/matcha-latte-costa-brava.
- `copy-bf93756cba95` — Si estás planeando bajar a la Costa Brava: Dirty Rabbit en S'Agaró, Avenida Platja d'Aro 275. El matcha que usamos es de REQ Matcha, un proyecto de Barcelona gestionado por un japonés que selecciona el té en origen, en Japón. Lo servimos con 2g ceremonial, disponible caliente o frío, con opción de leche vegetal.
  Pages: /guia/matcha-latte-girona.
- `copy-04eea1675a38` — Si estás en S'Agaró buscando matcha latte, ya estás donde tienes que estar. Dirty Rabbit abrió aquí el 1 de noviembre de 2024, en la Avenida Platja d'Aro 275. No hace falta buscar más.
  Pages: /guia/matcha-latte-sagaro.
- `copy-e66e2237df02` — Avenida Platja d'Aro 275, S'Agaró, 17248. Abrimos el 1 de noviembre de 2024. Iwonka lleva el día a día con una lógica sencilla: si no podemos explicar de dónde viene el ingrediente, no entra en carta.
  Pages: /guia/matcha-latte-sagaro.
- `copy-5dc1eac11476` — En Dirty Rabbit, Avenida Platja d'Aro 275. Es el único café de especialidad en S'Agaró que trabaja con matcha orgánico de origen certificado.
  Pages: /guia/matcha-latte-sagaro.
- `copy-7f6f5fa5fbb8` — Unos 4-5 kilómetros por la GI-682 en dirección a Platja d'Aro. El local está en la Avenida Platja d'Aro 275, S'Agaró.
  Pages: /guia/matcha-latte-sant-feliu.
- `copy-95b447cc955d` — Avenida Platja d'Aro 275, S'Agaró — en la carretera principal que conecta Sant Feliu con Platja d'Aro, antes de llegar al núcleo de S'Agaró. Hay parking fácil enfrente.
  Pages: /guia/matcha-platja-daro.
- `copy-b6491d4bed6a` — Avenida Platja d'Aro 275, S'Agaró · 20 min en coche desde Begur
  Pages: /guia/mejor-cafe-begur.
- `copy-db2e12f6ca46` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 20 minutos desde Begur. Abiertos todo el año.
  Pages: /guia/mejor-cafe-begur.
- `copy-cd3aa22be802` — Avenida Platja d'Aro 275, S'Agaró · 10 min en coche desde Calonge
  Pages: /guia/mejor-cafe-calonge.
- `copy-26da38935c7c` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 10 minutos desde Calonge. Esto es tu casa.
  Pages: /guia/mejor-cafe-calonge.
- `copy-693813b1145f` — Avenida Platja d'Aro 275, S'Agaró · 35 min en coche desde Girona
  Pages: /guia/mejor-cafe-girona.
- `copy-95a891971808` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 35 minutos desde Girona. Café + playa + Camí de Ronda.
  Pages: /guia/mejor-cafe-girona.
- `copy-9b9a093104d5` — Avenida Platja d'Aro 275, S'Agaró · 15 min en coche desde Palamós
  Pages: /guia/mejor-cafe-palamos.
- `copy-cc64d7c3b466` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 15 minutos desde Palamós. El mejor café de la Costa Brava te espera.
  Pages: /guia/mejor-cafe-palamos.
- `copy-dae76b27b64a` — Avenida Platja d'Aro 275, S'Agaró · 25 min en coche desde Pals
  Pages: /guia/mejor-cafe-pals.
- `copy-0c1d9583ac2c` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 25 minutos desde Pals. Combina medieval + café + playa.
  Pages: /guia/mejor-cafe-pals.
- `copy-369eec144eaa` — Avenida Platja d'Aro 275, S'Agaró · 5 min en coche desde Platja d'Aro
  Pages: /guia/mejor-cafe-platja-daro.
- `copy-2309d1c0974c` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Abre la puerta, pide un café y quédate el rato que quieras. Esto es tu casa.
  Pages: /guia/mejor-cafe-platja-daro.
- `copy-9a8eede3b46d` — Avenida Platja d'Aro 275, S'Agaró · En el centro
  Pages: /guia/mejor-cafe-sagaro.
- `copy-c7776c770c3a` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> Abre la puerta, pide un café y quédate el rato que quieras.
  Pages: /guia/mejor-cafe-sagaro.
- `copy-cebf61ca7d0c` — Avenida Platja d'Aro 275, S'Agaró · 5 min en coche desde Sant Feliu
  Pages: /guia/mejor-cafe-sant-feliu-de-guixols.
- `copy-b255a1bf34b7` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> A 5 minutos de Sant Feliu. Abre la puerta y quédate el rato que quieras.
  Pages: /guia/mejor-cafe-sant-feliu-de-guixols.
- `copy-4b347e70791f` — <a href="https://www.google.com/maps?cid=13237319999262880412" class="text-red hover:underline">Avenida Platja d'Aro 275</a> — Specialty coffee de La Cabra (Dinamarca) y brunch con producto local. Nuestro sitio, claro, pero es que de verdad creemos que el desayuno es el momento más importante del día. Eggs benedict, tostadas, bowls... y un flat white que merece la pena. Ambiente relajado, hablamos español, catalán, inglés y polaco — y tenemos cartas en ruso, francés y ucraniano.
  Pages: /guia/que-hacer-en-sagaro.
- `copy-07be092dec3f` — <strong>Dirección:</strong> Avda. Platja d'Aro, 275 - Local 2, 17248 S'Agaró, Girona
  Pages: /legal, /privacidad.
- `copy-83f7ba5aaa3c` — Avenida Playa de Aro, 275 · S'Agaró
  Pages: src/components/Footer.astro (shared).
- `copy-3abe81edfe11` — Dirty Rabbit está en S'Agaró, Av. Platja d'Aro 275 — unos 10 minutos en coche desde el centro de Platja d'Aro.
  Pages: /guia/chai-latte-platja-daro, /guia/matcha-platja-daro.
- `copy-cecea533b94a` — Dirty Rabbit está en S'Agaró, Av. Platja d'Aro 275. Diez minutos desde el centro de Platja d'Aro.
  Pages: /guia/best-chai-latte-platja-daro.
- `copy-478414cbf03d` — Dirty Rabbit és a S'Agaró, Av. Platja d'Aro 275, uns 10 minuts en cotxe des del centre de Platja d'Aro.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-0ff4fb244801` — Dirty Rabbit és a S'Agaró, Av. Platja d'Aro 275, uns 10 minuts en cotxe des del centre de Platja d'Aro.
  Pages: /ca/guia/matcha-platja-daro.
- `copy-8ffe258eb497` — Dirty Rabbit és a S'Agaró, Av. Platja d'Aro 275. Deu minuts des del centre de Platja d'Aro.
  Pages: /ca/guia/best-chai-latte-platja-daro.
- `copy-55740da4bf5d` — Dirty Rabbit se trouve à S'Agaró, Av. Platja d'Aro 275 — environ 10 minutes en voiture depuis le centre de Platja d'Aro.
  Pages: /fr/guide/chai-latte-platja-daro, /fr/guide/matcha-platja-daro.
- `copy-870d06044415` — Dirty Rabbit se trouve à S'Agaró, Av. Platja d'Aro 275. Dix minutes depuis le centre de Platja d'Aro.
  Pages: /fr/guide/best-chai-latte-platja-daro.

### regularHours

- `copy-a5bf24b7aa56` — Martes a domingo, 08:00–15:00. Lunes cerrado.
  Pages: /brand-facts.
- `copy-5df6ebddb2b9` — martes a domingo, de 8:00 a 15:00
  Pages: /brunch-sagaro.
- `copy-785525a8699f` — <strong>Horario habitual:</strong> Mar-Dom · 8:00-15:00
  Pages: /brunch-sagaro.
- `copy-962724a2538d` — Brunch en S'Agaró, Costa Brava. Café La Cabra de Copenhague, pan de masa madre Origo de Barcelona, açaí bowl con 14% de açaí real. De martes a domingo, 8h–15h. A 3 minutos de Sant Pol.
  Pages: /brunch.
- `copy-8897214f132e` — Dirty Rabbit es una cafetería de especialidad en Avenida Platja d'Aro 275, S'Agaró. Abrimos en noviembre de 2024. Servimos brunch de martes a domingo, de 8 de la mañana a las 15h.
  Pages: /brunch.
- `copy-6bc20f4d3786` — <strong>De martes a domingo, de 8h a 15h.</strong> En verano (aproximadamente de junio a septiembre) ampliamos hasta las 17h. Cerramos todos los lunes.
  Pages: /brunch.
- `copy-8d9916b34f18` — De martes a domingo, de 8h a 15h. En verano ampliamos hasta las 17h. Cerramos todos los lunes.
  Pages: /brunch.
- `copy-ee8cd8f701b6` — Dimarts a diumenge, 08:00-15:00. Dilluns tancat.
  Pages: /ca/brand-facts.
- `copy-9e28393eae1a` — Brunch a S'Agaró, Costa Brava. Cafè La Cabra de Copenhaguen, pa de massa mare Origo de Barcelona, açaí bowl amb 14% d'açaí real. De dimarts a diumenge, 8h–15h. A 3 minuts de Sant Pol.
  Pages: /ca/brunch.
- `copy-db11c1102834` — Dirty Rabbit és una cafeteria de especialitat a l'Avinguda Platja d'Aro 275, S'Agaró. Vam obrir el novembre del 2024. Servim brunch de dimarts a diumenge, de les 8 del matí fins a les 15h.
  Pages: /ca/brunch.
- `copy-533024536591` — <strong>De dimarts a diumenge, de 8h a 15h.</strong> A l'estiu (aproximadament de juny a setembre) ampliem fins a les 17h. Tanquem tots els dilluns.
  Pages: /ca/brunch.
- `copy-7a4a45d95170` — De dimarts a diumenge, de 8h a 15h. A l'estiu ampliem fins a les 17h. Tanquem tots els dilluns.
  Pages: /ca/brunch.
- `copy-770ed0de016d` — <strong>Horari:</strong> Dimarts-diumenge, 08:00-15:00
  Pages: /ca/guia/millor-cafe-especialitat-costa-brava-2026.
- `copy-0a786170f0bb` — <strong>Inconvenient:</strong> Tanca a les 15:00 i els dilluns.
  Pages: /ca/guia/millor-cafe-especialitat-costa-brava-2026.
- `copy-0fd235ee99ca` — Tuesday-Sunday, 08:00-15:00. Closed Monday.
  Pages: /en/brand-facts.
- `copy-77bfa045d382` — Brunch in S'Agaró, Costa Brava. La Cabra coffee from Copenhagen, Origo sourdough from Barcelona, açaí bowl with 14% real açaí. Tuesday to Sunday, 8am–3pm. 3 minutes from Sant Pol Beach.
  Pages: /en/brunch.
- `copy-2b4aa0da1de7` — Dirty Rabbit is a specialty coffee shop at Avinguda Platja d'Aro 275, S'Agaró. We opened in November 2024. We serve brunch Tuesday through Sunday, from 8 in the morning until 3pm.
  Pages: /en/brunch.
- `copy-2a0fc7d368c9` — <strong>Tuesday through Sunday, 8am to 3pm.</strong> In summer (roughly June to September), we extend to 5pm. Closed every Monday.
  Pages: /en/brunch.
- `copy-8be7f07ae280` — Tuesday through Sunday, 8am to 3pm. In summer we extend to 5pm. Closed every Monday.
  Pages: /en/brunch.
- `copy-fb750f3ba71b` — <strong>Hours:</strong> Tuesday-Sunday, 08:00-15:00
  Pages: /en/guide/best-specialty-coffee-costa-brava-2026.
- `copy-70be13570cb0` — <strong>Downside:</strong> Closes at 15:00 and closed Mondays.
  Pages: /en/guide/best-specialty-coffee-costa-brava-2026.
- `copy-6b48038c7b97` — Mardi-dimanche, 08:00-15:00. Fermé le lundi.
  Pages: /fr/brand-facts.
- `copy-62c633fda95c` — Brunch à S'Agaró, Costa Brava. Café La Cabra de Copenhague, pain au levain Origo de Barcelone, bol d'açaï avec 14% d'açaï réel. Du mardi au dimanche, 8h–15h. À 3 minutes de la plage de Sant Pol.
  Pages: /fr/brunch.
- `copy-9a2395cb669d` — Dirty Rabbit, c'est un café de spécialité au Avinguda Platja d'Aro 275, S'Agaró. On a ouvert en novembre 2024. On sert le brunch du mardi au dimanche, de 8h à 15h.
  Pages: /fr/brunch.
- `copy-e3553089c907` — <strong>Du mardi au dimanche, de 8h à 15h.</strong> En été (grosso modo juin à septembre), on prolonge jusqu'à 17h. Fermé le lundi.
  Pages: /fr/brunch.
- `copy-7f17c610bd50` — Du mardi au dimanche, de 8h à 15h. En été on prolonge jusqu'à 17h. Fermé le lundi.
  Pages: /fr/brunch.
- `copy-3b4a104dcd12` — <strong>Horaires :</strong> Mardi-dimanche, 08:00-15:00
  Pages: /fr/guide/meilleur-cafe-specialite-costa-brava-2026.
- `copy-63ab9767f373` — <strong>Inconvenient :</strong> Ferme a 15:00 et le lundi.
  Pages: /fr/guide/meilleur-cafe-specialite-costa-brava-2026.
- `copy-511481895b5c` — <strong>Horario:</strong> Martes a domingo, 08:00-15:00
  Pages: /guia/mejor-cafe-especialidad-costa-brava-2026.
- `copy-5fdc1f168280` — <strong>Lo menos bueno:</strong> Cierra a las 15:00 y los lunes no abre.
  Pages: /guia/mejor-cafe-especialidad-costa-brava-2026.
- `copy-3e2ab0f46a17` — Mar-Dom de 8:00 a 15:00
  Pages: src/components/Footer.astro (shared).

### summerHours

- `copy-6bc20f4d3786` — <strong>De martes a domingo, de 8h a 15h.</strong> En verano (aproximadamente de junio a septiembre) ampliamos hasta las 17h. Cerramos todos los lunes.
  Pages: /brunch.
- `copy-8d9916b34f18` — De martes a domingo, de 8h a 15h. En verano ampliamos hasta las 17h. Cerramos todos los lunes.
  Pages: /brunch.
- `copy-533024536591` — <strong>De dimarts a diumenge, de 8h a 15h.</strong> A l'estiu (aproximadament de juny a setembre) ampliem fins a les 17h. Tanquem tots els dilluns.
  Pages: /ca/brunch.
- `copy-7a4a45d95170` — De dimarts a diumenge, de 8h a 15h. A l'estiu ampliem fins a les 17h. Tanquem tots els dilluns.
  Pages: /ca/brunch.
- `copy-2a0fc7d368c9` — <strong>Tuesday through Sunday, 8am to 3pm.</strong> In summer (roughly June to September), we extend to 5pm. Closed every Monday.
  Pages: /en/brunch.
- `copy-8be7f07ae280` — Tuesday through Sunday, 8am to 3pm. In summer we extend to 5pm. Closed every Monday.
  Pages: /en/brunch.
- `copy-da1c6ecd5bee` — Same menu all day. During summer when we stay open until 5pm, you can order the full brunch menu through the afternoon. We don't switch to a lunch menu or evening menu — it's brunch from open to close.
  Pages: /en/brunch.
- `copy-e3553089c907` — <strong>Du mardi au dimanche, de 8h à 15h.</strong> En été (grosso modo juin à septembre), on prolonge jusqu'à 17h. Fermé le lundi.
  Pages: /fr/brunch.
- `copy-7f17c610bd50` — Du mardi au dimanche, de 8h à 15h. En été on prolonge jusqu'à 17h. Fermé le lundi.
  Pages: /fr/brunch.
- `copy-95008703096a` — Même carte toute la journée. En été quand on reste ouverts jusqu'à 17h, tu peux commander le brunch complet tout l'après-midi. On ne change pas de carte à midi — c'est brunch du début à la fin.
  Pages: /fr/brunch.

### winterClosure

- `copy-cbab7af5b1db` — Sí. Dirty Rabbit está abierto todo el año, aunque el horario varía por temporada. En invierno el horario puede ser más reducido — consulta antes si vas en diciembre o enero.
  Pages: /articulos/brunch-sagaro.
- `copy-ea85a6e4b4bc` — Dirty Rabbit abre todo el año. Hostal de la Gavina tiene temporadas (consultar). Villamás puede cerrar o reducir en invierno.
  Pages: /articulos/donde-desayunar-sagaro.
- `copy-254d5591faf5` — Trabajamos con una dinámica estacional propia de la Costa Brava. La temporada fuerte va de junio a septiembre, pero también abrimos en meses intermedios. Antes de venir, conviene confirmar el horario actual en Google Maps.
  Pages: /brunch-sagaro.
- `copy-d7bf5c985d41` — , con temporada alta de junio a septiembre y apertura en shoulder seasons. Como cualquier negocio de costa, puede haber ajustes puntuales por época del año, así que el enlace de
  Pages: /brunch-sagaro.
- `copy-c96aea5e1b14` — Dirty Rabbit obre tot l&#39;any. Hostal de la Gavina té temporades (consulta). Villamás pot tancar o reduir a l&#39;hivern.
  Pages: /ca/articles/on-esmorzar-sagaro.
- `copy-994fa518c4eb` — El fred no arruïna el chai. L'iced chai és una de les versions més infravalorades a Espanya; poques cafeteries el tenen fora de l'estiu. El nostre és disponible tot l'any perquè les espècies del masala aguanten perfectament en fred.
  Pages: /ca/guia/best-chai-girona.
- `copy-f806987e10e5` — Tres versions de chai tot l'any: clàssic calent o fred, iced chai, dirty chai amb espresso. Llet vegetal disponible. Entre 3,50 € i 5 €.
  Pages: /ca/guia/best-chai-girona.
- `copy-069f9eaa6d59` — Sí. L'iced chai és disponible tot l'any a Dirty Rabbit. No és una oferta de temporada.
  Pages: /ca/guia/best-chai-girona.
- `copy-75b61afeb557` — Hi ha tres formes de prendre'l. Chai latte clàssic (calent o fred), iced chai tot l'any, i dirty chai amb un shot d'espresso de La Cabra. Cada un resol un moment diferent.
  Pages: /ca/guia/best-chai-latte-platja-daro.
- `copy-8f5d4b522a2d` — El dirty chai, chai latte més espresso, és el que genera més preguntes. La gent el demana per curiositat i el repeteix. L'iced chai, que a la majoria de llocs de la zona no existeix o és de temporada, el tenim disponible tot l'any. Llet vegetal en totes les versions. Entre 3,50 € i 5 €.
  Pages: /ca/guia/best-chai-latte-platja-daro.
- `copy-8bea7453b5c7` — Sí, tot l'any. L'iced chai fred no és una opció de temporada a Dirty Rabbit. Les espècies del masala funcionen bé en fred.
  Pages: /ca/guia/best-chai-latte-platja-daro.
- `copy-16bee81c361c` — Vam obrir al novembre de 2024. El chai d'Awachai és a la carta des del primer dia. Tres versions: chai latte clàssic (calent o fred), iced chai tot l'any, dirty chai amb espresso. Llet vegetal en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/best-chai-sant-feliu.
- `copy-b0811b9ad890` — El matcha és disponible tot l'any, calent o fred. Amb llet de vaca o vegetal. L'Iwonka porta el dia a dia amb una lògica senzilla: si no pot explicar d'on ve l'ingredient, no entra a la carta.
  Pages: /ca/guia/best-matcha-platja-daro.
- `copy-b56293245c75` — La Costa Brava té molt sol i poc fred. L'iced chai té més sentit aquí que en qualsevol altra zona de Catalunya, i a Dirty Rabbit el tenim disponible tot l'any, no només a l'estiu. La majoria de llocs de la zona no l'ofereixen fora de temporada alta.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-0e4adfe82c63` — Vam obrir el 1 de novembre de 2024. L'Iwonka porta el local. El masala chai és d'Awachai, Isère, França, orgànic, barreja real d'espècies. Tres versions: chai latte clàssic (calent o fred), iced chai tot l'any, dirty chai amb espresso. Llet vegetal disponible en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-fdda46e91c9b` — La Costa Brava és una destinació estacional, amb pics a l'estiu i calma a l'hivern. Això condiciona quin tipus de locals sobreviuen i quin tipus de carta tenen. Els que obren tot l'any han de guanyar-se el client local, no només el turista de juliol.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-c5523217d25f` — Tres versions: chai latte clàssic (calent o fred), iced chai fred tot l'any, i dirty chai amb un shot d'espresso de La Cabra. Entre 3,50 € i 5 €. Llet vegetal disponible en totes.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-6fbde4cb1dac` — A la majoria de llocs no. A Dirty Rabbit sí, tot l'any. La Costa Brava té tardors i hiverns suaus, i hi ha qui prefereix el chai fred independentment de l'època.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-0b58316ffb4c` — Chai d'Awachai (Isère, França). Cafè de La Cabra. Pa d'Origo Bakery. Terrassa gran, WiFi, bona llum natural al matí. Oberts tot l'any.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-eda5b4c8045c` — Vam obrir al novembre de 2024. Tres versions: chai latte clàssic (calent o fred), iced chai tot l'any, i dirty chai amb espresso. Llet vegetal disponible. Entre 3,50 € i 5 €. Terrassa gran, WiFi, bona llum al matí.
  Pages: /ca/guia/chai-latte-girona.
- `copy-35511fc9bb42` — L'iced chai és el masala chai fred. La majoria de locals no l'ofereixen fora de l'estiu. Nosaltres el tenim tot l'any perquè les espècies funcionen igual en fred i hi ha qui el prefereix així independentment de la temperatura exterior.
  Pages: /ca/guia/chai-latte-girona.
- `copy-76e839fbc8d4` — Fred funciona igual de bé. L'iced chai no és només una opció d'estiu: el tenim disponible tot l'any perquè les espècies aguanten perfectament en fred.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-23385e139d74` — Vam obrir el 1 de novembre de 2024. El masala chai orgànic d'Awachai va entrar a la carta des del primer dia. El servim en tres versions: chai latte clàssic (calent o fred), iced chai fred tot l'any, i dirty chai, que és el chai latte amb un shot d'espresso de La Cabra. Aquest últim posa en marxa qualsevol. Llet vegetal disponible en totes les versions. Preu entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-f7957508e728` — Sí. A Dirty Rabbit l'iced chai és disponible tot l'any. Les espècies del masala funcionen igual en fred: no és una versió de temporada.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-a4339c7b9b38` — La temperatura no defineix el sabor. El masala chai d'Awachai funciona igual calent que en fred. Per això el servim en tres versions tot l'any: clàssic calent, iced chai, i dirty chai amb espresso.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-a347d9f10395` — Tres: chai latte clàssic (calent o fred), iced chai fred tot l'any, i dirty chai amb un shot d'espresso de La Cabra. Llet vegetal disponible en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-1c1f5c9abf50` — No. El tenim tot l'any. A S'Agaró l'hivern és suau comparat amb l'interior, i hi ha qui el demana fred al desembre. Cap problema.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-7ac043b16cc4` — Vam obrir el 1 de novembre de 2024. L'Iwonka porta el dia a dia. El masala chai d'Awachai és a la carta tot l'any, en les tres versions: clàssic, iced chai i dirty chai. Llet vegetal disponible en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-sant-feliu.
- `copy-b261c0911750` — Sí. L'iced chai és disponible tot l'any a Dirty Rabbit. La costa a la tardor encara té dies càlids, i fins i tot si no n'hi ha, l'iced chai continua sent una opció.
  Pages: /ca/guia/chai-latte-sant-feliu.
- `copy-0de23e7d31dc` — Vam obrir el 1 de novembre de 2024, fora de temporada, a propòsit. No som un local d'estiu. El matcha és disponible tot l'any, calent o fred, amb llet de vaca o vegetal.
  Pages: /ca/guia/matcha-latte-costa-brava.
- `copy-9a47ef1b2b9d` — Tot l'any. Vam obrir el 1 de novembre de 2024, fora de temporada. No tanquem a l'hivern. L'horari pot ajustar-se entre temporades, consulta a les xarxes o truca al +34 872 454 264.
  Pages: /ca/guia/matcha-latte-costa-brava.
- `copy-4de162d90c3d` — Sí, tot l'any. Tant calent com fred, amb llet de vaca o alternatives vegetals.
  Pages: /ca/guia/matcha-latte-sagaro.
- `copy-cd7b35451111` — Sí. A Dirty Rabbit el tenim disponible tot l'any, tant calent com fred, amb llet de civada si ho prefereixes.
  Pages: /ca/guia/matcha-platja-daro.
- `copy-5b6033fd53a0` — A diferència de Fitzroy, Dirty Rabbit obre tot l'any. Així que si véns al gener o febrer buscant bon cafè, aquí estem.
  Pages: /ca/guia/millor-cafe-begur.
- `copy-d3f3c3cf9e37` — Dirty Rabbit · Avinguda Platja d'Aro 275, S'Agaró<br> 20 minuts des de Begur. Oberts tot l'any.
  Pages: /ca/guia/millor-cafe-begur.
- `copy-1eb9ef0039a9` — Dirty Rabbit - Cafè d'especialitat i brunch a S'Agaró. Espai familiar, esmorzars saludables i el millor cafè de la Costa Brava. Obert tot l'any.
  Pages: /ca.
- `copy-5079ff10e0a3` — Yes. Dirty Rabbit is open year-round, though hours vary by season. In winter hours may be shorter — check before going in December or January.
  Pages: /en/articles/brunch-sagaro.
- `copy-dcd5b36bbbd6` — Dirty Rabbit is open year-round. Hostal de la Gavina has seasons (check). Villamás may close or reduce in winter.
  Pages: /en/articles/where-to-breakfast-sagaro.
- `copy-3c89758cbd76` — Cold doesn't ruin chai. Iced chai is one of the most underrated formats in Spain — few cafés have it outside summer. We carry it year-round because Awachai's spice blend holds up perfectly cold, and some people prefer it that way.
  Pages: /en/guide/best-chai-girona.
- `copy-08628714660a` — Three chai versions year-round: classic hot or iced, iced chai, dirty chai with espresso. Plant milk available. €3.50 to €5.
  Pages: /en/guide/best-chai-girona.
- `copy-18e8a733d600` — Yes. Iced chai is available year-round at Dirty Rabbit. It's not a seasonal offer.
  Pages: /en/guide/best-chai-girona.
- `copy-c9b76c0ade69` — There are three ways to have it. Classic chai latte (hot or iced), iced chai year-round, and dirty chai with a shot of La Cabra espresso. Each one works for a different moment.
  Pages: /en/guide/best-chai-latte-platja-daro.
- `copy-a2c5a5ab1164` — The dirty chai — chai latte plus espresso — is the one that gets the most questions. People order it out of curiosity and come back to it. Iced chai, which most places in the area either don't have or only offer in summer, we have year-round. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/best-chai-latte-platja-daro.
- `copy-34c499d85a42` — Yes, year-round. Iced chai isn't a seasonal option at Dirty Rabbit. The masala spices work well cold.
  Pages: /en/guide/best-chai-latte-platja-daro.
- `copy-4114b780d2bb` — We opened in November 2024. Awachai chai has been on the menu from day one. Three versions: classic chai latte (hot or iced), iced chai year-round, dirty chai with espresso. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/best-chai-sant-feliu.
- `copy-a254f507ef76` — Unlike Fitzroy, Dirty Rabbit is open year-round. So if you're visiting in January or February looking for good coffee, we're here. Plus coffee, you can have breakfast (eggs benedict, toast, bowls), stay reading, or walk down to Sant Pol Beach in 3 minutes.
  Pages: /en/guide/best-coffee-begur.
- `copy-14204340c09d` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 20 minutes from Begur. Open year-round.
  Pages: /en/guide/best-coffee-begur.
- `copy-c9ba8118086c` — Matcha is available year-round, hot or cold, with dairy or plant milk. Iwonka runs the day-to-day with a simple rule: if she can't explain where an ingredient comes from, it doesn't go on the menu.
  Pages: /en/guide/best-matcha-platja-daro.
- `copy-9e751f67d173` — Most cafés on the Costa Brava stop serving iced drinks when October arrives. We don't. Iced chai is available year-round at Dirty Rabbit.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-21b19108ff54` — S'Agaró has a genuinely mild winter. January temperatures stay above 10°C most days. There are weeks in February when sitting on the terrace with something cold makes sense. The people who know this are mostly locals — the ones who live here year-round and don't need summer to justify ordering iced drinks.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-a967e300a24d` — Awachai's masala chai is sourced from Isère, France — organic, real spice blend, prepared fresh. Three versions: classic chai latte (hot or iced), iced chai year-round, dirty chai with espresso. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-17a1a1820fae` — The Costa Brava is a seasonal destination — high peaks in summer, quiet in winter. That shapes which places survive and what kind of menu they run. The ones open year-round have to earn the local customer, not just the July tourist.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-6c90c1281e5e` — Three versions: classic chai latte (hot or iced), iced chai year-round, and dirty chai with a shot of La Cabra espresso. €3.50 to €5. Plant milk available in all versions.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-3ac350b2d028` — Most places don't. At Dirty Rabbit, yes — year-round. The Costa Brava has mild autumns and winters, and some people prefer chai cold regardless of season.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-e5e61b558b3a` — Chai from Awachai (Isère, France). Coffee from La Cabra. Bread from Origo Bakery. Large terrace, WiFi, good natural morning light. Open year-round.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-466fe28b1fe3` — We opened in November 2024. Three versions: classic chai latte (hot or iced), iced chai year-round, and dirty chai with espresso. Plant milk available. €3.50 to €5. Large terrace, WiFi, good morning light.
  Pages: /en/guide/chai-latte-girona.
- `copy-b2246f1ba472` — Iced chai is masala chai served cold. Most cafés don't offer it outside summer. We have it year-round because the spices work just as well cold, and some people prefer it that way regardless of the weather.
  Pages: /en/guide/chai-latte-girona.
- `copy-3ce4436f6248` — Cold works just as well. Iced chai isn't just a summer option — we have it available year-round because the spices hold up perfectly cold.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-ca8ea9bcf494` — We opened on 1 November 2024. Awachai's organic masala chai has been on the menu from day one. We serve it three ways: classic chai latte (hot or iced), iced chai year-round, and dirty chai — which is the chai latte with a shot of La Cabra espresso. That last one is something. Plant milk available in all versions. Price: €3.50 to €5.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-0f23234931f1` — Yes. At Dirty Rabbit iced chai is available year-round. The masala spices work just as well cold — it's not a seasonal version.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-767da30d3e25` — Temperature doesn't define the flavour. Awachai's masala works equally well hot or cold. That's why we serve it three ways, year-round: classic hot, iced chai, and dirty chai with espresso.
  Pages: /en/guide/chai-latte-sagaro.
- `copy-0324a45ac297` — Three: classic chai latte (hot or iced), iced chai year-round, and dirty chai with a shot of La Cabra espresso. Plant milk available in all versions. €3.50 to €5.
  Pages: /en/guide/chai-latte-sagaro.
- `copy-d9fc99bb6066` — No. We have it year-round. S'Agaró has mild winters compared to inland Spain, and people order it cold in December. No problem.
  Pages: /en/guide/chai-latte-sagaro.
- `copy-cac7fc6c3786` — We opened on 1 November 2024. Iwonka runs day-to-day. Awachai's masala chai is on the menu year-round, in three versions: classic, iced chai and dirty chai. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/chai-latte-sant-feliu.
- `copy-2e0424be287a` — Yes. Iced chai is available year-round at Dirty Rabbit. The Costa Brava still has warm days in autumn — and even when it doesn't, the iced chai is still an option.
  Pages: /en/guide/chai-latte-sant-feliu.
- `copy-cd54246ae371` — We opened on 1 November 2024 — off-season, deliberately. We're not a summer-only place. Matcha is available year-round, hot or cold, with dairy or plant milk.
  Pages: /en/guide/matcha-latte-costa-brava.
- `copy-6c3f23c1d10a` — Year-round. We opened on 1 November 2024, outside of high season. We don't close in winter. Hours may adjust between seasons — check our social media or call +34 872 454 264.
  Pages: /en/guide/matcha-latte-costa-brava.
- `copy-aec32a615b80` — Yes, year-round. Hot or cold, with dairy or plant milk.
  Pages: /en/guide/matcha-latte-sagaro.
- `copy-2b1666e25e43` — Yes. We have it year-round, hot or cold, with oat milk if you prefer.
  Pages: /en/guide/matcha-platja-daro.
- `copy-efff3f3177b4` — Dirty Rabbit Specialty Coffee in S'Agaro serves ceremonial-grade REQ Matcha on the Costa Brava, with hot and iced matcha drinks made year-round.
  Pages: /en/matcha.
- `copy-e55e576c3d08` — Yes. Dirty Rabbit is a seasonal Costa Brava business with peak months from June to September, but we stay open year-round and keep matcha on the menu.
  Pages: /en/matcha.
- `copy-ecb9629de6d7` — Ceremonial-grade REQ matcha at Dirty Rabbit in S'Agaró. Classic matcha latte, orange matcha, and extra strong — prepared properly, year-round on the Costa Brava.
  Pages: /en/matcha.
- `copy-028454ef3d4b` — If you are searching for the best matcha Costa Brava, the real question is not who writes it on the board. It is who treats matcha with the same care they give to specialty coffee. At Dirty Rabbit in S&apos;Agaró, matcha is not an afterthought. It is a year-round part of the menu, made with ceremonial tea from REQ Matcha and prepared the slow way because texture, color, and taste depend on it.
  Pages: /en/matcha.
- `copy-73832d7810d0` — Open year-round, even though Costa Brava demand peaks June to September
  Pages: /en/matcha.
- `copy-4f2105e2bb37` — This matters on the Costa Brava because many cafés run under intense seasonal pressure. From June to September, service gets faster, queues get longer, and menus often drift toward whatever is easiest to execute. Matcha has become fashionable, but good matcha is still rare. Dirty Rabbit opened with the idea that quality should not disappear just because the beach is full. The shop stays open year-round, and the matcha program stays on the menu through winter, shoulder season, and summer rush alike.
  Pages: /en/matcha.
- `copy-bebbfd21348e` — Dirty Rabbit est ouvert toute l&#39;année. Hostal de la Gavina a des saisons (vérifiez). Villamás peut fermer ou réduire en hiver.
  Pages: /fr/articles/ou-petit-dejeuner-sagaro.
- `copy-9154d8e65655` — Le froid ne gâche pas le chai. Le chai glacé est une des versions les plus sous-estimées en Espagne — peu de cafés le proposent hors de l'été. Chez Dirty Rabbit il est disponible toute l'année parce que les épices du masala tiennent parfaitement en froid.
  Pages: /fr/guide/best-chai-girona.
- `copy-3044d474c723` — Trois versions de chai toute l'année : classique chaud ou froid, chai glacé, dirty chai avec espresso. Lait végétal disponible. Entre 3,50€ et 5€.
  Pages: /fr/guide/best-chai-girona.
- `copy-2c4af8815e3a` — Oui. Le chai glacé est disponible toute l'année chez Dirty Rabbit. Ce n'est pas une offre saisonnière.
  Pages: /fr/guide/best-chai-girona.
- `copy-6dcf31e9e384` — Il y a trois façons de le boire. Chai latte classique (chaud ou froid), chai glacé toute l'année, et dirty chai avec un shot d'espresso de La Cabra. Chacun répond à un moment différent.
  Pages: /fr/guide/best-chai-latte-platja-daro.
- `copy-86d56708126d` — Le dirty chai — chai latte plus espresso — est celui qui génère le plus de questions. Les gens le commandent par curiosité et reviennent. Le chai glacé, que la plupart des cafés de la zone n'ont pas ou seulement en saison, est disponible chez nous toute l'année. Lait végétal dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/best-chai-latte-platja-daro.
- `copy-8f2881519fcd` — Oui, toute l'année. Le chai glacé n'est pas une option saisonnière chez Dirty Rabbit. Les épices du masala fonctionnent très bien en froid.
  Pages: /fr/guide/best-chai-latte-platja-daro.
- `copy-ed36b0883ed9` — Nous avons ouvert en novembre 2024. Le chai d'Awachai est à la carte depuis le premier jour. Trois versions : chai latte classique (chaud ou froid), chai glacé toute l'année, dirty chai avec espresso. Lait végétal dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/best-chai-sant-feliu.
- `copy-b06a21ada361` — Le matcha est disponible toute l'année, chaud ou froid. Avec lait de vache ou végétal. Iwonka, qui gère le quotidien, applique une logique simple : si elle ne peut pas expliquer d'où vient l'ingrédient, il n'entre pas à la carte.
  Pages: /fr/guide/best-matcha-platja-daro.
- `copy-20e8543d4044` — La Costa Brava a beaucoup de soleil et peu de froid. Le chai glacé a plus de sens ici que dans la plupart des régions de Catalogne — et chez Dirty Rabbit nous le proposons toute l'année, pas seulement en haute saison. La majorité des cafés de la zone ne l'ont pas hors saison.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-7803b78de76f` — Nous avons ouvert le 1er novembre 2024. Iwonka gère le café. Le masala chai est d'Awachai, Isère, France — bio, vrai mélange d'épices. Trois versions : chai latte classique (chaud ou froid), chai glacé toute l'année, dirty chai avec espresso. Lait végétal disponible dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-d7822e92047f` — La Costa Brava est une destination saisonnière — avec des pics en été et du calme en hiver. Ça influence quels types d'établissements survivent et quelle carte ils proposent. Ceux qui ouvrent toute l'année doivent mériter leur clientèle locale, pas seulement le touriste de juillet.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-463ab1985399` — Trois versions : chai latte classique (chaud ou froid), chai glacé froid toute l'année, et dirty chai avec un shot d'espresso de La Cabra. Entre 3,50€ et 5€. Lait végétal disponible dans toutes les versions.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-fdcd94924e68` — Dans la plupart des endroits, non. Chez Dirty Rabbit oui — toute l'année. La Costa Brava a des automnes et des hivers doux, et certains préfèrent le chai froid quelle que soit la saison.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-35f2f18d3539` — Chai d'Awachai (Isère, France). Café de La Cabra. Pain d'Origo Bakery. Grande terrasse, WiFi, bonne lumière naturelle le matin. Ouverts toute l'année.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-ea2f10d34698` — Nous avons ouvert en novembre 2024. Trois versions : chai latte classique (chaud ou froid), chai glacé toute l'année, et dirty chai avec espresso. Lait végétal disponible. Entre 3,50€ et 5€. Grande terrasse, WiFi, bonne lumière le matin.
  Pages: /fr/guide/chai-latte-girona.
- `copy-1c5feaf10ccd` — Le chai glacé est le masala chai froid — les épices infusées puis servies sur glace. La plupart des établissements ne le proposent pas hors de l'été. Nous l'avons toute l'année parce que les épices fonctionnent aussi bien en froid, et certains le préfèrent ainsi indépendamment de la température.
  Pages: /fr/guide/chai-latte-girona.
- `copy-df9b17f6031b` — Le froid fonctionne aussi bien. Le chai glacé n'est pas qu'une option estivale — nous le proposons toute l'année parce que les épices tiennent parfaitement en froid.
  Pages: /fr/guide/chai-latte-platja-daro.
- `copy-afe5aa440ed9` — Nous avons ouvert le 1er novembre 2024. Le masala chai bio d'Awachai est à la carte depuis le premier jour. Nous le servons en trois versions : chai latte classique (chaud ou froid), iced chai froid toute l'année, et dirty chai — le chai latte avec un shot d'espresso de La Cabra. Ce dernier réveille à peu près n'importe qui. Lait végétal disponible dans toutes les versions. Prix entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-platja-daro.
- `copy-46b800abe4c4` — Oui. Chez Dirty Rabbit le chai glacé est disponible toute l'année. Les épices du masala fonctionnent aussi bien en froid — ce n'est pas une option saisonnière.
  Pages: /fr/guide/chai-latte-platja-daro.
- `copy-2bdfc7cbefde` — La température ne définit pas le goût. Le masala chai d'Awachai fonctionne aussi bien chaud que froid. C'est pourquoi nous le servons en trois versions toute l'année : classique chaud, chai glacé, et dirty chai avec espresso.
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-7262d054c4b0` — Trois : chai latte classique (chaud ou froid), chai glacé froid toute l'année, et dirty chai avec un shot d'espresso de La Cabra. Lait végétal disponible dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-2c3af06d09fe` — Non. Nous l'avons toute l'année. À S'Agaró l'hiver est doux comparé à l'intérieur des terres, et certains le commandent froid en décembre. Aucun problème.
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-2355aed58a65` — Nous avons ouvert le 1er novembre 2024. Iwonka gère le quotidien. Le masala chai d'Awachai est à la carte toute l'année, dans les trois versions : classique, chai glacé et dirty chai. Lait végétal disponible dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-sant-feliu.
- `copy-a28a34716b1f` — Oui. Le chai glacé est disponible toute l'année chez Dirty Rabbit. La côte en automne a encore des jours chauds — et même si ce n'est pas le cas, le chai glacé reste une option.
  Pages: /fr/guide/chai-latte-sant-feliu.
- `copy-208a017c737e` — Nous avons ouvert le 1er novembre 2024 — hors saison, volontairement. Ce n'est pas un café saisonnier. Le matcha est disponible toute l'année, chaud ou froid, avec lait de vache ou végétal.
  Pages: /fr/guide/matcha-latte-costa-brava.
- `copy-e645ddf9793b` — Toute l'année. Nous avons ouvert le 1er novembre 2024, hors saison. Nous ne fermons pas en hiver. Les horaires peuvent s'ajuster entre les saisons — vérifiez sur nos réseaux ou appelez le +34 872 454 264.
  Pages: /fr/guide/matcha-latte-costa-brava.
- `copy-85b50e857bcd` — Bonne lumière naturelle le matin, WiFi, grande terrasse. Ouverts toute l'année.
  Pages: /fr/guide/matcha-latte-costa-brava.
- `copy-a43acb18b7c9` — Oui, toute l'année. Chaud ou froid, avec lait de vache ou végétal.
  Pages: /fr/guide/matcha-latte-sagaro.
- `copy-d2ef4a731e89` — Oui. Chez Dirty Rabbit nous le proposons toute l'année, chaud ou froid, avec du lait végétal si vous préférez.
  Pages: /fr/guide/matcha-platja-daro.
- `copy-5fd78fb6ef4e` — <span class="text-3xl">🐇</span> Dirty Rabbit — Le meilleur café toute l'année (30 min)
  Pages: /fr/guides/meilleur-cafe-begur.
- `copy-3484678c7914` — Pour le meilleur café de spécialité de la Costa Brava — et ouvert toute l'année — faites le détour jusqu'à S'Agaró.
  Pages: /fr/guides/meilleur-cafe-begur.
- `copy-e2594e7c611c` — Toute l'année
  Pages: /fr/guides/meilleur-cafe-begur.
- `copy-654756c86672` — El frío no arruina el chai. El iced chai es una de las versiones más subestimadas en España — pocas cafeterías lo tienen fuera del verano. Lo nuestro está todo el año porque las especias del masala aguantan perfectamente en frío.
  Pages: /guia/best-chai-girona.
- `copy-e198eb5cb34f` — Tres versiones de chai todo el año: clásico caliente o frío, iced chai, dirty chai con espresso. Leche vegetal disponible. Entre 3,50€ y 5€.
  Pages: /guia/best-chai-girona.
- `copy-c6a58cc3d904` — Sí. El iced chai está disponible todo el año en Dirty Rabbit. No es una oferta de temporada.
  Pages: /guia/best-chai-girona.
- `copy-39248e63fa74` — Hay tres formas de tomarlo. Chai latte clásico (caliente o frío), iced chai todo el año, y dirty chai con un shot de espresso de La Cabra. Cada uno resuelve un momento distinto.
  Pages: /guia/best-chai-latte-platja-daro.
- `copy-390f11697a5e` — El dirty chai — chai latte más espresso — es el que más preguntas genera. La gente lo pide por curiosidad y repite. El iced chai, que en la mayoría de sitios de la zona no existe o es de temporada, lo tenemos disponible todo el año. Leche vegetal en todas las versiones. Entre 3,50€ y 5€.
  Pages: /guia/best-chai-latte-platja-daro.
- `copy-8605086925f8` — Sí, todo el año. El iced chai frío no es una opción de temporada en Dirty Rabbit. Las especias del masala funcionan bien en frío.
  Pages: /guia/best-chai-latte-platja-daro.
- `copy-914b39daa413` — Abrimos en noviembre de 2024. El chai de Awachai está en carta desde el primer día. Tres versiones: chai latte clásico (caliente o frío), iced chai todo el año, dirty chai con espresso. Leche vegetal en todas. Entre 3,50€ y 5€.
  Pages: /guia/best-chai-sant-feliu.
- `copy-2620ad7b198b` — El matcha está disponible todo el año, caliente o frío. Con leche de vaca o vegetal. Iwonka lleva el día a día con una lógica sencilla: si no puede explicar de dónde viene el ingrediente, no entra en carta.
  Pages: /guia/best-matcha-platja-daro.
- `copy-e75c32d1a2bd` — La Costa Brava tiene mucho sol y poco frío. El iced chai tiene más sentido aquí que en cualquier otra zona de Catalunya — y en Dirty Rabbit lo tenemos disponible todo el año, no solo en verano. La mayoría de sitios de la zona no lo ofrecen fuera de temporada alta.
  Pages: /guia/chai-latte-costa-brava.
- `copy-ee0673f3db29` — Abrimos el 1 de noviembre de 2024. Iwonka lleva el local. El masala chai es de Awachai, Isère, Francia — orgánico, mezcla real de especias. Tres versiones: chai latte clásico (caliente o frío), iced chai todo el año, dirty chai con espresso. Leche vegetal disponible en todas. Entre 3,50€ y 5€.
  Pages: /guia/chai-latte-costa-brava.
- `copy-f0d383f50adc` — La Costa Brava es un destino estacional — con picos en verano y quietud en invierno. Eso moldea qué tipo de locales sobreviven y qué tipo de carta tienen. Los que abren todo el año tienen que ganarse al cliente local, no solo al turista de julio.
  Pages: /guia/chai-latte-costa-brava.
- `copy-3489ffefbdcb` — Tres versiones: chai latte clásico (caliente o frío), iced chai frío todo el año, y dirty chai con un shot de espresso de La Cabra. Entre 3,50€ y 5€. Leche vegetal disponible en todas.
  Pages: /guia/chai-latte-costa-brava.
- `copy-c161d8310f28` — En la mayoría de sitios no. En Dirty Rabbit sí — todo el año. La Costa Brava tiene otoños e inviernos suaves, y hay quien prefiere el chai frío independientemente de la época.
  Pages: /guia/chai-latte-costa-brava.
- `copy-4c471b35e15a` — Chai de Awachai (Isère, Francia). Café de La Cabra. Pan de Origo Bakery. Terraza grande, WiFi, buena luz natural por la mañana. Abiertos todo el año.
  Pages: /guia/chai-latte-costa-brava.
- `copy-39bbecb11ccc` — Abrimos en noviembre de 2024. Tres versiones: chai latte clásico (caliente o frío), iced chai todo el año, y dirty chai con espresso. Leche vegetal disponible. Entre 3,50€ y 5€. Terraza grande, WiFi, buena luz por la mañana.
  Pages: /guia/chai-latte-girona.
- `copy-9020a507e0fc` — El iced chai es el masala chai frío — las especias infusionadas en frío o sobre hielo. La mayoría de locales no lo ofrecen fuera del verano, o directamente no lo tienen. Nosotros lo tenemos todo el año porque las especias funcionan igual en frío y hay quien lo prefiere así independientemente de la temperatura exterior.
  Pages: /guia/chai-latte-girona.
- `copy-a88e4b489ffd` — Frío funciona igual de bien. El iced chai no es solo una opción de verano — lo tenemos disponible todo el año porque las especias aguantan perfectamente en frío.
  Pages: /guia/chai-latte-platja-daro.
- `copy-46ffaa0c066b` — Abrimos el 1 de noviembre de 2024. El masala chai orgánico de Awachai entró en carta desde el principio. Lo servimos en tres versiones: chai latte clásico (caliente o frío), iced chai frío todo el año, y dirty chai — que es el chai latte con un shot de espresso de La Cabra. Ese último levanta a cualquiera. Leche vegetal disponible en todas las versiones. Precio entre 3,50€ y 5€.
  Pages: /guia/chai-latte-platja-daro.
- `copy-151190fc06b4` — Sí. En Dirty Rabbit el iced chai está disponible todo el año. Las especias del masala funcionan igual en frío — no es una versión de temporada.
  Pages: /guia/chai-latte-platja-daro.
- `copy-8da2b5f098b0` — La temperatura no define el sabor. El masala chai de Awachai funciona igual caliente que en frío. Por eso lo servimos en tres versiones todo el año: clásico caliente, iced chai, y dirty chai con espresso.
  Pages: /guia/chai-latte-sagaro.
- `copy-ef8601d1bfef` — Tres: chai latte clásico (caliente o frío), iced chai frío todo el año, y dirty chai con un shot de espresso de La Cabra. Leche vegetal disponible en todas. Entre 3,50€ y 5€.
  Pages: /guia/chai-latte-sagaro.
- `copy-e6f08e57e80f` — No. Lo tenemos todo el año. En S'Agaró el invierno es suave comparado con el interior, y hay quien lo pide frío en diciembre. Sin problema.
  Pages: /guia/chai-latte-sagaro.
- `copy-d2aa87a9f8e9` — Abrimos el 1 de noviembre de 2024. Iwonka lleva el día a día. El masala chai de Awachai está en carta todo el año, en las tres versiones: clásico, iced chai y dirty chai. Leche vegetal disponible en todas. Entre 3,50€ y 5€.
  Pages: /guia/chai-latte-sant-feliu.
- `copy-3c236b34feef` — Sí. El iced chai está disponible todo el año en Dirty Rabbit. La costa en otoño todavía tiene días cálidos — y aunque no los tenga, el iced chai sigue siendo una opción.
  Pages: /guia/chai-latte-sant-feliu.
- `copy-a0c2cfe58cd0` — Abrimos el 1 de noviembre de 2024 — fuera de temporada, a propósito. No somos un local de verano. El matcha está disponible todo el año, caliente o frío, con leche de vaca o vegetal.
  Pages: /guia/matcha-latte-costa-brava.
- `copy-8c83e9b9e10d` — Todo el año. Abrimos el 1 de noviembre de 2024, fuera de temporada. No cerramos en invierno. El horario puede ajustarse entre temporadas — consulta en redes o llama al +34 872 454 264.
  Pages: /guia/matcha-latte-costa-brava.
- `copy-e074f47febf9` — Sí, todo el año. Tanto caliente como frío, con leche de vaca o alternativas vegetales.
  Pages: /guia/matcha-latte-sagaro.
- `copy-595e1eff3163` — Sí. En Dirty Rabbit lo tenemos disponible todo el año, tanto caliente como frío, con leche de avena si lo prefieres.
  Pages: /guia/matcha-platja-daro.
- `copy-dbb7c9c7b6fd` — A diferencia de Fitzroy, Dirty Rabbit abre todo el año. Así que si vienes en enero o febrero y buscas buen café, aquí estamos. Además de café, puedes desayunar (eggs benedict, tostadas, bowls), quedarte leyendo, o bajar a la playa de Sant Pol a 3 minutos.
  Pages: /guia/mejor-cafe-begur.
- `copy-db2e12f6ca46` — Dirty Rabbit · Avenida Platja d'Aro 275, S'Agaró<br> 20 minutos desde Begur. Abiertos todo el año.
  Pages: /guia/mejor-cafe-begur.
- `copy-b09ea5016fcc` — <strong>Dirty Rabbit</strong> en invierno o mañanas temprano — WiFi, enchufes, café de La Cabra, y Sant Pol a 3 minutos. Pero recuerda: somos una cafetería, no un coworking. En verano durante las horas punta, prioriza disfrutar del café y deja el portátil en casa.
  Pages: /articulos/cafe-wifi-trabajar-costa-brava.
- `copy-50226666058f` — <strong>Dirty Rabbit</strong> a l&#39;hivern o matins d&#39;hora — WiFi, endolls, cafè de La Cabra, i Sant Pol a 3 minuts. Però recorda: som una cafeteria, no un coworking. A l&#39;estiu durant les hores punta, prioritza gaudir del cafè i deixa el portàtil a casa.
  Pages: /ca/articles/cafes-wifi-treballar-costa-brava.
- `copy-193b66695bda` — <strong>Dirty Rabbit</strong> en hiver ou tôt le matin — WiFi, prises, café La Cabra, et Sant Pol à 3 minutes. Mais rappelez-vous : nous sommes un café, pas un coworking. En été aux heures de pointe, privilégiez profiter de votre café et laissez le laptop à la maison.
  Pages: /fr/articles/cafes-wifi-travail-costa-brava.
- `copy-679701a10ff3` — <strong>Dirty Rabbit</strong> in winter or early mornings — WiFi, plugs, La Cabra coffee, and Sant Pol 3 minutes away. But remember: we&#39;re a café, not a coworking. In summer during peak hours, prioritise enjoying your coffee and leave the laptop at home.
  Pages: /en/articles/cafes-wifi-remote-work-costa-brava.

### menu

- `copy-344fa78f5968` — <strong>Precio medio:</strong> 15–22€ por persona (bebida + plato principal)
  Pages: /articulos/brunch-sagaro.
- `copy-893302d556cf` — Depende. En Dirty Rabbit: 2 adultos + 1 niño, unos 30–40€ con todo. En sitios más baratos: 15–25€. En hoteles de lujo: 50€+.
  Pages: /articulos/desayuno-con-ninos-costa-brava.
- `copy-2fdd1702fb28` — <strong>Dirty Rabbit:</strong> 12–18€ por persona
  Pages: /articulos/donde-desayunar-sagaro.
- `copy-4d7d3b013e8d` — €2,50–5,50 (bebidas), €4–15 (comida)
  Pages: /brand-facts.
- `copy-b60ce0ddb772` — <strong>Avo Good Day — 7,50€.</strong> Aguacate, tomate cherry, aceite de oliva sobre tostada de masa madre. La base ya está buena tal cual. Puedes añadir salmón ahumado Benfumat o jamón ibérico por 3€, manchego o aguacate extra por 2,50€, o un huevo ecológico por 2€. La mayoría pide el huevo. Si te soy sincero, yo probablemente añadiría el salmón.
  Pages: /brunch.
- `copy-66bb6590a06c` — <strong>Bikini Super Classic — 6€.</strong> Cerdo 100% Duroc con Havarti fundido entre pan de masa madre. Es lo que pides cuando quieres algo contundente y real sin complicarte la vida. Tenemos gente que vuelve específicamente por este.
  Pages: /brunch.
- `copy-7eabe39db732` — <strong>Choco Toast — 7,50€.</strong> Plátano caramelizado con chocolate o mantequilla de cacahuete sobre masa madre. Lo pusimos en carta porque queríamos una opción dulce que no fuera una bollería insulsa. Es un plato principal, no un capricho de acompañamiento.
  Pages: /brunch.
- `copy-c20ed8841208` — <strong>Butter Together — 5€.</strong> Masa madre, mantequilla francesa, mermelada de la casa. A veces la opción sencilla es la correcta. Bien cuando ya vas con el cuerpo cargado de café y solo quieres algo para asentar.
  Pages: /brunch.
- `copy-4c9b43576280` — <strong>Mr. Croissant — 6€.</strong> York y Havarti en croissant. Clásico, seguro, sin complicaciones. No hace falta disculparse por eso.
  Pages: /brunch.
- `copy-58659653706c` — <strong>Lord Salmon — 8,50€.</strong> Queso crema, salmón ahumado Benfumat, cebolla encurtida, tomate cherry. Benfumat es un productor catalán que hace el salmón ahumado bien. La cebolla encurtida hace un trabajo importante: corta la riqueza del queso crema y convierte esto en algo más interesante que el típico bagel de salmón.
  Pages: /brunch.
- `copy-8f8e05278f13` — <strong>Cherries Lady — 7,90€.</strong> Queso crema, tomate cherry, cebollino crujiente. Más ligero. Funciona bien si lo pides junto a un café en lugar de como plato único.
  Pages: /brunch.
- `copy-053026f61edf` — El <strong>Açaí Bowl</strong> (10,50€) merece que nos paremos un momento.
  Pages: /brunch.
- `copy-d485dc75da18` — El <strong>Granola Yogurt Bowl</strong> (8€) lleva yogur griego, granola hecha aquí, fruta de temporada y un chorrito de crema de cacahuete. La granola la hacemos nosotros. La fruta varía según lo que esté bien en el mercado, no lo que lleva en la caja desde el lunes. El toque de cacahuete parece un detalle menor y resulta que no lo es.
  Pages: /brunch.
- `copy-08791899990b` — El <strong>Fruit Bowl</strong> (5,50€) es lo que esté bueno ese día.
  Pages: /brunch.
- `copy-10a6b10695d2` — El espresso está a 1,90€. Cortado, americano, cappuccino — la mayor parte de la carta entre 2€ y 2,50€. Flat white a 3€.
  Pages: /brunch.
- `copy-8a32bb94026a` — <strong>Matcha de REQ</strong>, una marca española de matcha que se abastece correctamente en Japón. Caliente o con hielo, de 3,20€ a 4€. Lo usamos porque la calidad es consistente y sabe a matcha — no a polvo verde azucarado. Si has tenido matcha decepcionante en otros sitios de España, este es diferente.
  Pages: /brunch.
- `copy-eef1c017dc08` — <strong>Chai de Awachai</strong>, fabricado en Francia. Chai real con especiado de verdad, no un sirope con sabor a chai mezclado con leche caliente. Clásico (3,50€), con hielo (4€) o dirty con un shot de espresso (5€). El dirty es o exactamente lo que quieres o no es lo tuyo. No hay término medio.
  Pages: /brunch.
- `copy-3238dfd71e24` — <strong>Smoothies — 6,50€.</strong> Preparamos tres: Garden Thief, Rabbit Power y Carrot Kick. Todos hechos al momento. Pregunta en el mostrador qué lleva cada uno.
  Pages: /brunch.
- `copy-23f9e2de2a32` — <strong>Zumo de naranja natural — 4€.</strong> Naranjas de verdad, exprimidas aquí.
  Pages: /brunch.
- `copy-23fb556c4b83` — <strong>Kombucha Bioma — 4,50€.</strong> Una kombucha de calidad para quienes quieren algo frío y ligeramente con gas que no sea café.
  Pages: /brunch.
- `copy-ce52f506d745` — Las tostadas van de 5€ a 7,50€. Los bagels de 7,90€ a 8,50€. El açaí bowl cuesta 10,50€, el granola yogurt bowl 8€ y el fruit bowl 5,50€. Los añadidos para las tostadas son de 2€ a 3€. El café empieza en 1,90€, el matcha desde 3,20€, el chai desde 3,50€, y los smoothies son 6,50€.
  Pages: /brunch.
- `copy-00a8d3d1bd16` — Depèn. A Dirty Rabbit: 2 adults + 1 nen, uns 30–40€ amb tot. A llocs més barats: 15–25€. A hotels de luxe: 50€+.
  Pages: /ca/articles/esmorzar-amb-nens-costa-brava.
- `copy-0882615975f4` — Un cafè a Dirty Rabbit costa entre 2,50€ i 4,50€. En un bar estàndard pagaries 1,50–2,50€. La diferència és d&#39;1–2€ per a una experiència completament diferent. Creiem que val la pena.
  Pages: /ca/articles/guia-cafe-especialitat-costa-brava.
- `copy-097ebd49bc9c` — <strong>Dirty Rabbit:</strong> 12–18€ per persona
  Pages: /ca/articles/on-esmorzar-sagaro.
- `copy-8ba283e6beb1` — €2,50-5,50 (begudes), €4-15 (menjar)
  Pages: /ca/brand-facts.
- `copy-6fe996e4e21a` — <strong>Avo Good Day — 7,50€.</strong> Alvocat, tomàquet cherry, oli d'oliva sobre torrada de massa mare. La base ja és bona tal com és. Hi pots afegir salmó fumat Benfumat o pernil ibèric per 3€, manchego o alvocat extra per 2,50€, o un ou ecològic per 2€. La majoria demana l'ou. Si t'he de ser sincer, jo probablement hi afegiria el salmó.
  Pages: /ca/brunch.
- `copy-23b850e71c68` — <strong>Bikini Super Classic — 6€.</strong> Porc 100% Duroc amb Havarti fos entre pa de massa mare. És el que demanes quan vols alguna cosa contundent i de veritat sense complicar-te. Tenim gent que torna específicament per aquest.
  Pages: /ca/brunch.
- `copy-0a9ae91dd1bb` — <strong>Choco Toast — 7,50€.</strong> Plàtan caramel·litzat amb xocolata o mantequilla de cacauet sobre massa mare. El vam afegir perquè volíem una opció dolça que no fos una brioixeria insípida. És un plat principal, no un capritx de complement.
  Pages: /ca/brunch.
- `copy-745a1140112b` — <strong>Butter Together — 5€.</strong> Massa mare, mantega francesa, melmelada de la casa. De vegades l'opció senzilla és la correcta. Bé quan ja portes el cos carregat de cafè i només vols una mica de menjar per assentar.
  Pages: /ca/brunch.
- `copy-8640b782a829` — <strong>Mr. Croissant — 6€.</strong> York i Havarti en croissant. Clàssic, segur, sense complicacions. No cal disculpar-se per això.
  Pages: /ca/brunch.
- `copy-92e0543800bb` — <strong>Lord Salmon — 8,50€.</strong> Formatge crema, salmó fumat Benfumat, ceba encurtida, tomàquet cherry. Benfumat és un productor català que fa el salmó fumat com toca. La ceba encurtida fa molta feina: talla la riquesa del formatge crema i converteix això en alguna cosa més interessant que el típic bagel de salmó.
  Pages: /ca/brunch.
- `copy-6114bb98b2de` — <strong>Cherries Lady — 7,90€.</strong> Formatge crema, tomàquet cherry, ceba tendra cruixent. Més lleuger. Funciona bé si el demanes juntament amb un cafè en lloc de com a plat únic.
  Pages: /ca/brunch.
- `copy-75487aa46c5d` — El <strong>Açaí Bowl</strong> (10,50€) mereix que ens aturem un moment.
  Pages: /ca/brunch.
- `copy-75aa7517fb82` — El <strong>Granola Yogurt Bowl</strong> (8€) porta iogurt grec, granola feta aquí, fruita de temporada i un raig de crema de cacauet. La granola la fem nosaltres. La fruita varia segons el que estigui bé al mercat, no el que porta a la caixa des de dilluns. El toc de cacauet sembla un detall menor i resulta que no ho és.
  Pages: /ca/brunch.
- `copy-f7396a7fdae5` — El <strong>Fruit Bowl</strong> (5,50€) és el que estigui bo aquell dia.
  Pages: /ca/brunch.
- `copy-d315044b605b` — L'espresso és a 1,90€. Tallat, americà, cappuccino — la major part de la carta entre 2€ i 2,50€. Flat white a 3€.
  Pages: /ca/brunch.
- `copy-7303bbf733ef` — <strong>Matxa de REQ</strong>, una marca espanyola de matxa que s'abasteix correctament al Japó. Calent o amb gel, de 3,20€ a 4€. L'usem perquè la qualitat és consistent i sap a matxa — no a pols verd ensucrat. Si has tingut matxa decebedor en altres llocs, aquest és diferent.
  Pages: /ca/brunch.
- `copy-a045e7e6d048` — <strong>Chai d'Awachai</strong>, elaborat a França. Chai real amb espèciament de veritat, no un xarop amb gust de chai barrejat amb llet calenta. Clàssic (3,50€), amb gel (4€) o dirty amb un shot d'espresso (5€). El dirty és o exactament el que vols o no és el teu — no hi ha terme mig.
  Pages: /ca/brunch.
- `copy-e0c4183efed7` — <strong>Smoothies — 6,50€.</strong> En fem tres: Garden Thief, Rabbit Power i Carrot Kick. Tots fets al moment. Pregunta a la barra què porta cadascun.
  Pages: /ca/brunch.
- `copy-d48ba368dc8c` — <strong>Suc de taronja natural — 4€.</strong> Taronges de veritat, espremudes aquí.
  Pages: /ca/brunch.
- `copy-c6aee3fcb088` — <strong>Kombucha Bioma — 4,50€.</strong> Una kombucha de qualitat per qui vol alguna cosa freda i lleugerament amb gas que no sigui cafè.
  Pages: /ca/brunch.
- `copy-8c92954f295f` — Les torrades van de 5€ a 7,50€. Els bagels de 7,90€ a 8,50€. El açaí bowl val 10,50€, el granola yogurt bowl 8€ i el fruit bowl 5,50€. Els extres per a les torrades són de 2€ a 3€. El cafè comença a 1,90€, el matxa des de 3,20€, el chai des de 3,50€, i els smoothies costen 6,50€.
  Pages: /ca/brunch.
- `copy-f806987e10e5` — Tres versions de chai tot l'any: clàssic calent o fred, iced chai, dirty chai amb espresso. Llet vegetal disponible. Entre 3,50 € i 5 €.
  Pages: /ca/guia/best-chai-girona.
- `copy-8f5d4b522a2d` — El dirty chai, chai latte més espresso, és el que genera més preguntes. La gent el demana per curiositat i el repeteix. L'iced chai, que a la majoria de llocs de la zona no existeix o és de temporada, el tenim disponible tot l'any. Llet vegetal en totes les versions. Entre 3,50 € i 5 €.
  Pages: /ca/guia/best-chai-latte-platja-daro.
- `copy-16bee81c361c` — Vam obrir al novembre de 2024. El chai d'Awachai és a la carta des del primer dia. Tres versions: chai latte clàssic (calent o fred), iced chai tot l'any, dirty chai amb espresso. Llet vegetal en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/best-chai-sant-feliu.
- `copy-caac67cf26cc` — Matcha orgànic de REQ Matcha, un projecte de Barcelona amb fundador japonès que viatja al Japó a seleccionar el te directament. Servim 2 g de matcha de cerimònia estàndard, amb opció extra fort per una mica més. El preu és entre 3,50 € i 5 €.
  Pages: /ca/guia/best-matcha-girona.
- `copy-8b6ab4938bbf` — Entre 3,50 € i 5 €. El matcha de qualitat té un cost de matèria primera més alt, i el preu ho reflecteix.
  Pages: /ca/guia/best-matcha-platja-daro.
- `copy-0b2767d0ea72` — Entre 3,50 € i 5 €. El preu reflecteix el cost de l'ingredient.
  Pages: /ca/guia/best-matcha-sant-feliu.
- `copy-0e4adfe82c63` — Vam obrir el 1 de novembre de 2024. L'Iwonka porta el local. El masala chai és d'Awachai, Isère, França, orgànic, barreja real d'espècies. Tres versions: chai latte clàssic (calent o fred), iced chai tot l'any, dirty chai amb espresso. Llet vegetal disponible en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-c5523217d25f` — Tres versions: chai latte clàssic (calent o fred), iced chai fred tot l'any, i dirty chai amb un shot d'espresso de La Cabra. Entre 3,50 € i 5 €. Llet vegetal disponible en totes.
  Pages: /ca/guia/chai-latte-costa-brava.
- `copy-eda5b4c8045c` — Vam obrir al novembre de 2024. Tres versions: chai latte clàssic (calent o fred), iced chai tot l'any, i dirty chai amb espresso. Llet vegetal disponible. Entre 3,50 € i 5 €. Terrassa gran, WiFi, bona llum al matí.
  Pages: /ca/guia/chai-latte-girona.
- `copy-23385e139d74` — Vam obrir el 1 de novembre de 2024. El masala chai orgànic d'Awachai va entrar a la carta des del primer dia. El servim en tres versions: chai latte clàssic (calent o fred), iced chai fred tot l'any, i dirty chai, que és el chai latte amb un shot d'espresso de La Cabra. Aquest últim posa en marxa qualsevol. Llet vegetal disponible en totes les versions. Preu entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-371b1f1a5172` — A Dirty Rabbit entre 3,50 € i 5 € segons la versió. El chai latte clàssic és l'opció més econòmica; el dirty chai (amb espresso) és a la part alta del rang.
  Pages: /ca/guia/chai-latte-platja-daro.
- `copy-a347d9f10395` — Tres: chai latte clàssic (calent o fred), iced chai fred tot l'any, i dirty chai amb un shot d'espresso de La Cabra. Llet vegetal disponible en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-sagaro.
- `copy-7ac043b16cc4` — Vam obrir el 1 de novembre de 2024. L'Iwonka porta el dia a dia. El masala chai d'Awachai és a la carta tot l'any, en les tres versions: clàssic, iced chai i dirty chai. Llet vegetal disponible en totes. Entre 3,50 € i 5 €.
  Pages: /ca/guia/chai-latte-sant-feliu.
- `copy-aca32bf415ca` — A Dirty Rabbit entre 3,50 € i 5 €. Els que fan servir matcha de cerimònia solen estar a la part alta del rang, perquè el cost de la matèria primera ho justifica.
  Pages: /ca/guia/matcha-platja-daro.
- `copy-a18fce186765` — <strong>Preu cafe:</strong> €2,50-4,00
  Pages: /ca/guia/millor-cafe-especialitat-costa-brava-2026.
- `copy-da859d6025cd` — <strong>Menjar:</strong> €4-15
  Pages: /ca/guia/millor-cafe-especialitat-costa-brava-2026.
- `copy-1b9514e4d03f` — Depends. At Dirty Rabbit: 2 adults + 1 child, about €30–40 with everything. At cheaper places: €15–25. At luxury hotels: €50+.
  Pages: /en/articles/breakfast-with-children-costa-brava.
- `copy-c79a6420bff5` — <strong>Average price:</strong> €15–22 per person (drink + main dish)
  Pages: /en/articles/brunch-sagaro.
- `copy-193a234e60a2` — A coffee at Dirty Rabbit costs between €2.50 and €4.50. At a standard bar you&#39;d pay €1.50–2.50. The difference is €1–2 for a completely different experience. We think it&#39;s worth it.
  Pages: /en/articles/specialty-coffee-guide-costa-brava.
- `copy-e0f43e0eaa8c` — <strong>Dirty Rabbit:</strong> €12–18 per person
  Pages: /en/articles/where-to-breakfast-sagaro.
- `copy-36186647e4d1` — €2.50-5.50 (drinks), €4-15 (food)
  Pages: /en/brand-facts.
- `copy-9f72a2a51c76` — <strong>Avo Good Day — €7.50.</strong> Avocado, cherry tomato, olive oil on toasted sourdough. The base is good on its own. Add Benfumat smoked salmon or Ibérico ham for €3, Manchego or extra avocado for €2.50, or an organic egg for €2. Most people add the egg. Honestly, we'd probably add the salmon.
  Pages: /en/brunch.
- `copy-687123271381` — <strong>Bikini Super Classic — €6.</strong> 100% Duroc pork with melted Havarti on sourdough. This is what you order when you want something real without overthinking it. People come back for it specifically.
  Pages: /en/brunch.
- `copy-e8cdac9f1dd3` — <strong>Choco Toast — €7.50.</strong> Caramelized banana with chocolate or peanut butter on sourdough. We added it because we wanted a sweet option that wasn't a limp pastry. It holds its own as a main order, not just a side thought.
  Pages: /en/brunch.
- `copy-5f9fc1af7207` — <strong>Butter Together — €5.</strong> Sourdough, French butter, house jam. Sometimes the simple option is the right one. Good when you're already full of coffee and want just enough food.
  Pages: /en/brunch.
- `copy-13327eeae0ca` — <strong>Mr. Croissant — €6.</strong> York ham and Havarti in a croissant. Familiar, solid, reliable. No apologies for that.
  Pages: /en/brunch.
- `copy-25a1051f6033` — <strong>Lord Salmon — €8.50.</strong> Cream cheese, Benfumat smoked salmon, pickled onion, cherry tomato. Benfumat is a Catalan producer doing smoked salmon properly. The pickled onion does a lot of work here — cuts through the richness of the cream cheese in a way that makes this more interesting than your average lox bagel.
  Pages: /en/brunch.
- `copy-551f2f4553db` — <strong>Cherries Lady — €7.90.</strong> Cream cheese, cherry tomato, crispy chive. Lighter option. Works well if you're having it alongside coffee rather than as your main thing.
  Pages: /en/brunch.
- `copy-31aa88629368` — The <strong>Açaí Bowl</strong> (€10.50) gets a longer explanation because it's worth it.
  Pages: /en/brunch.
- `copy-c99ed9843889` — Most places in Spain serving açaí bowls use around 5% actual açaí. They get the purple color and thick texture from cheap banana purée, and you end up paying €10 for something that tastes vaguely fruity. Ours uses 14% real açaí. You can taste the difference. Creamy sorbet base, granola, fresh fruit on top. That's what you're paying for.
  Pages: /en/brunch.
- `copy-d41c01c8e7dc` — The <strong>Granola Yogurt Bowl</strong> (€8) is Greek yogurt with house-made granola, seasonal fruit, and a peanut drizzle. The granola is ours — we make it here. The seasonal fruit changes depending on what's actually good, not what's been in a box since Monday. The peanut drizzle sounds like a small thing and it's not.
  Pages: /en/brunch.
- `copy-87280e799fb2` — The <strong>Fruit Bowl</strong> (€5.50) is whatever's good from the market that day.
  Pages: /en/brunch.
- `copy-40232e21ff28` — Espresso is €1.90. Cortado, americano, cappuccino — most of the menu sits between €2 and €2.50. Flat white is €3.
  Pages: /en/brunch.
- `copy-90bd92be95ea` — <strong>REQ matcha</strong> comes from Barcelona. Hot or iced, €3.20 to €4. REQ is a Spanish matcha brand that actually sources properly from Japan. We use them because the quality is consistent and it tastes like matcha — not like green-tinted sweetened powder. If you've had disappointing matcha elsewhere in Spain, this is different.
  Pages: /en/brunch.
- `copy-2691a5d06a43` — <strong>Awachai chai</strong> is from France. This is real chai made with proper spicing, not a chai-flavored syrup added to hot milk. Classic (€3.50), iced (€4), or dirty with a shot of espresso (€5). The dirty version is either exactly what you want or not your thing at all. No in between.
  Pages: /en/brunch.
- `copy-7ea86c4614c2` — <strong>Smoothies — €6.50.</strong> We make three: Garden Thief, Rabbit Power, and Carrot Kick. All made fresh to order. Ask at the counter what's in each one.
  Pages: /en/brunch.
- `copy-dc4ed5cb4b32` — <strong>Fresh OJ — €4.</strong> Real oranges, pressed here.
  Pages: /en/brunch.
- `copy-bb0e4cebda2c` — <strong>Kombucha Bioma — €4.50.</strong> Good-quality kombucha for people who want something cold and lightly fizzy that isn't coffee.
  Pages: /en/brunch.
- `copy-032f90e761de` — Toasts run €5 to €7.50. Bagels are €7.90 to €8.50. The açaí bowl is €10.50, the granola yogurt bowl is €8, and the fruit bowl is €5.50. Add-ons for toasts are €2 to €3 each. Coffee starts at €1.90, matcha from €3.20, chai from €3.50, smoothies are €6.50.
  Pages: /en/brunch.
- `copy-08628714660a` — Three chai versions year-round: classic hot or iced, iced chai, dirty chai with espresso. Plant milk available. €3.50 to €5.
  Pages: /en/guide/best-chai-girona.
- `copy-a2c5a5ab1164` — The dirty chai — chai latte plus espresso — is the one that gets the most questions. People order it out of curiosity and come back to it. Iced chai, which most places in the area either don't have or only offer in summer, we have year-round. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/best-chai-latte-platja-daro.
- `copy-4114b780d2bb` — We opened in November 2024. Awachai chai has been on the menu from day one. Three versions: classic chai latte (hot or iced), iced chai year-round, dirty chai with espresso. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/best-chai-sant-feliu.
- `copy-fe21ecb26f67` — Organic matcha from REQ Matcha — a Barcelona project whose Japanese founder travels to Japan to select the tea directly. Standard dose is 2g ceremonial, with an extra strong option for a little more. Price range: €3.50 to €5.
  Pages: /en/guide/best-matcha-girona.
- `copy-96d7806e2740` — Between €3.50 and €5. Quality matcha has a higher ingredient cost — the price reflects that.
  Pages: /en/guide/best-matcha-platja-daro.
- `copy-4cedfa97f900` — Between €3.50 and €5. The price reflects the ingredient cost.
  Pages: /en/guide/best-matcha-sant-feliu.
- `copy-46800784f157` — <strong>Coffee price:</strong> €2.50-4.00
  Pages: /en/guide/best-specialty-coffee-costa-brava-2026.
- `copy-63cb68a73ef5` — <strong>Food price:</strong> €4-15
  Pages: /en/guide/best-specialty-coffee-costa-brava-2026.
- `copy-fa10681b0783` — The standard version. Awachai's spice blend steeped with black tea, finished with steamed milk. Hot or iced. No added sugar in the blend itself — if you want it sweeter, we can add some. Most people don't. The spice has enough presence on its own. €3.50.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-8d726d5e2795` — Dirty chai gets the most repeat orders of the three. People who try it once tend to come back for it specifically. €5.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-75d26f5ab989` — The cold preparation changes how the spice reads. Cardamom and cinnamon are more muted when cold. Ginger stays present. The overall effect is lighter and cleaner than the hot version. Some people prefer it. If you've only had masala chai hot, try it iced at least once — they're genuinely different drinks. €4.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-a967e300a24d` — Awachai's masala chai is sourced from Isère, France — organic, real spice blend, prepared fresh. Three versions: classic chai latte (hot or iced), iced chai year-round, dirty chai with espresso. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-6c90c1281e5e` — Three versions: classic chai latte (hot or iced), iced chai year-round, and dirty chai with a shot of La Cabra espresso. €3.50 to €5. Plant milk available in all versions.
  Pages: /en/guide/chai-latte-costa-brava.
- `copy-466fe28b1fe3` — We opened in November 2024. Three versions: classic chai latte (hot or iced), iced chai year-round, and dirty chai with espresso. Plant milk available. €3.50 to €5. Large terrace, WiFi, good morning light.
  Pages: /en/guide/chai-latte-girona.
- `copy-ca8ea9bcf494` — We opened on 1 November 2024. Awachai's organic masala chai has been on the menu from day one. We serve it three ways: classic chai latte (hot or iced), iced chai year-round, and dirty chai — which is the chai latte with a shot of La Cabra espresso. That last one is something. Plant milk available in all versions. Price: €3.50 to €5.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-8a0dcbb8b322` — At Dirty Rabbit, between €3.50 and €5 depending on the version. Classic chai latte is at the lower end; dirty chai (with espresso) is at the top.
  Pages: /en/guide/chai-latte-platja-daro.
- `copy-0324a45ac297` — Three: classic chai latte (hot or iced), iced chai year-round, and dirty chai with a shot of La Cabra espresso. Plant milk available in all versions. €3.50 to €5.
  Pages: /en/guide/chai-latte-sagaro.
- `copy-cac7fc6c3786` — We opened on 1 November 2024. Iwonka runs day-to-day. Awachai's masala chai is on the menu year-round, in three versions: classic, iced chai and dirty chai. Plant milk in all versions. €3.50 to €5.
  Pages: /en/guide/chai-latte-sant-feliu.
- `copy-f8fe00204ac1` — Between €3.50 and €5 at Dirty Rabbit. The price reflects the ingredient cost.
  Pages: /en/guide/matcha-platja-daro.
- `copy-4327d608cb6a` — Un café au Dirty Rabbit coûte entre 2,50€ et 4,50€. Dans un bar standard, vous paieriez 1,50–2,50€. La différence est de 1–2€ pour une expérience complètement différente. Nous pensons que ça en vaut la peine.
  Pages: /fr/articles/guide-cafe-specialite-costa-brava.
- `copy-181a3f50108a` — <strong>Dirty Rabbit :</strong> 12–18€ par personne
  Pages: /fr/articles/ou-petit-dejeuner-sagaro.
- `copy-dd741994de38` — Ça dépend. Au Dirty Rabbit : 2 adultes + 1 enfant, environ 30–40€ avec tout. Dans des endroits moins chers : 15–25€. Dans les hôtels de luxe : 50€+.
  Pages: /fr/articles/petit-dejeuner-avec-enfants-costa-brava.
- `copy-8123dde1f44f` — €2,50-5,50 (boissons), €4-15 (restauration)
  Pages: /fr/brand-facts.
- `copy-c751a2db87a7` — <strong>Avo Good Day — 7,50€.</strong> Avocat, tomate cerise, huile d'olive sur levain toasté. La base est bonne comme ça. Tu peux ajouter du saumon fumé Benfumat ou du jambon ibérique pour 3€, du Manchego ou de l'avocat en supplément pour 2,50€, ou un œuf bio pour 2€. La plupart des gens ajoutent l'œuf. Franchement, on ajouterait plutôt le saumon.
  Pages: /fr/brunch.
- `copy-3fe5ffb32fea` — <strong>Bikini Super Classic — 6€.</strong> Porc Duroc 100% avec Havarti fondu sur levain. C'est ce qu'on commande quand on veut quelque chose de vrai sans se prendre la tête. Les gens y reviennent spécifiquement pour ça.
  Pages: /fr/brunch.
- `copy-11e09efc179e` — <strong>Choco Toast — 7,50€.</strong> Banane caramélisée avec chocolat ou beurre de cacahuète sur levain. On l'a ajouté parce qu'on voulait une option sucrée qui ne soit pas une viennoiserie ramollie. Il se suffit à lui-même comme plat principal, pas juste comme accompagnement.
  Pages: /fr/brunch.
- `copy-fd162b69e466` — <strong>Butter Together — 5€.</strong> Levain, beurre français, confiture maison. Parfois la simplicité est la bonne réponse. Idéal quand t'as déjà bu deux cafés et que tu veux juste quelque chose pour tenir.
  Pages: /fr/brunch.
- `copy-4b9fe575e1d7` — <strong>Mr. Croissant — 6€.</strong> Jambon blanc et Havarti dans un croissant. Classique, solide, fiable. On n'en a pas honte.
  Pages: /fr/brunch.
- `copy-cd0e9e768300` — <strong>Lord Salmon — 8,50€.</strong> Cream cheese, saumon fumé Benfumat, oignon mariné, tomate cerise. Benfumat est un producteur catalan qui fait le saumon fumé sérieusement. L'oignon mariné fait vraiment son travail ici : il coupe le gras du cream cheese et rend le tout plus intéressant qu'un lox bagel ordinaire.
  Pages: /fr/brunch.
- `copy-9b239b995604` — <strong>Cherries Lady — 7,90€.</strong> Cream cheese, tomate cerise, ciboulette croustillante. Option plus légère. Bien quand tu le prends avec un café plutôt que comme plat principal.
  Pages: /fr/brunch.
- `copy-58e9ce136b25` — Le <strong>Bol d'açaï</strong> (10,50€) mérite une explication.
  Pages: /fr/brunch.
- `copy-4a688f234a88` — Dans la plupart des endroits en Espagne, les bols d'açaï contiennent environ 5% d'açaï réel. La couleur violette et la texture épaisse viennent d'une purée de banane bon marché, et tu te retrouves à payer 10€ pour quelque chose qui a vaguement un goût de fruits. Le nôtre contient 14% d'açaï réel. On goûte la différence. Base de sorbet crémeux, granola, fruits frais dessus. C'est pour ça que tu paies.
  Pages: /fr/brunch.
- `copy-88b33a363d36` — Le <strong>Bol granola yaourt</strong> (8€), c'est du yaourt grec avec notre granola maison, des fruits de saison et un filet de beurre de cacahuète. Le granola, on le fait nous-mêmes. Les fruits changent selon ce qui est réellement bon ce jour-là, pas ce qui traîne dans un carton depuis lundi. Le filet de cacahuète a l'air d'un détail. Ce n'en est pas un.
  Pages: /fr/brunch.
- `copy-9466310ceeab` — Le <strong>Bol de fruits</strong> (5,50€), c'est ce qui est bon ce matin-là.
  Pages: /fr/brunch.
- `copy-57b71deb3d99` — Espresso à 1,90€. Cortado, americano, cappuccino — la plupart du menu est entre 2€ et 2,50€. Flat white à 3€.
  Pages: /fr/brunch.
- `copy-de7a54ebc2cb` — <strong>Le matcha REQ</strong> vient de Barcelone. Chaud ou glacé, de 3,20€ à 4€. REQ est une marque espagnole de matcha qui s'approvisionne vraiment au Japon. On les utilise parce que la qualité est constante et que ça goûte le matcha — pas une poudre verdâtre et sucrée. Si tu as été déçu par le matcha ailleurs en Espagne, celui-là est différent.
  Pages: /fr/brunch.
- `copy-929139e742a9` — <strong>Le chai Awachai</strong> vient de France. C'est un vrai chai préparé avec de vraies épices, pas un sirop parfumé dans du lait chaud. Classique (3,50€), glacé (4€) ou dirty avec un shot d'espresso (5€). La version dirty, c'est soit exactement ce dont tu avais besoin, soit pas du tout ton truc. Pas de demi-mesure.
  Pages: /fr/brunch.
- `copy-b5b93c469048` — <strong>Smoothies — 6,50€.</strong> On en fait trois : Garden Thief, Rabbit Power, et Carrot Kick. Tous préparés à la commande. Demande au comptoir ce qu'il y a dedans.
  Pages: /fr/brunch.
- `copy-c7a56700c2aa` — <strong>Jus d'orange frais — 4€.</strong> Vraies oranges, pressées ici.
  Pages: /fr/brunch.
- `copy-746053d34c97` — <strong>Kombucha Bioma — 4,50€.</strong> Un bon kombucha pour ceux qui veulent quelque chose de frais et légèrement pétillant qui ne soit pas du café.
  Pages: /fr/brunch.
- `copy-ef5b33c492e3` — Les toasts vont de 5€ à 7,50€. Les bagels de 7,90€ à 8,50€. Le bol d'açaï est à 10,50€, le bol granola yaourt à 8€, le bol de fruits à 5,50€. Les suppléments sur les toasts de 2€ à 3€. Le café à partir de 1,90€, le matcha dès 3,20€, le chai dès 3,50€, les smoothies à 6,50€.
  Pages: /fr/brunch.
- `copy-3044d474c723` — Trois versions de chai toute l'année : classique chaud ou froid, chai glacé, dirty chai avec espresso. Lait végétal disponible. Entre 3,50€ et 5€.
  Pages: /fr/guide/best-chai-girona.
- `copy-86d56708126d` — Le dirty chai — chai latte plus espresso — est celui qui génère le plus de questions. Les gens le commandent par curiosité et reviennent. Le chai glacé, que la plupart des cafés de la zone n'ont pas ou seulement en saison, est disponible chez nous toute l'année. Lait végétal dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/best-chai-latte-platja-daro.
- `copy-ed36b0883ed9` — Nous avons ouvert en novembre 2024. Le chai d'Awachai est à la carte depuis le premier jour. Trois versions : chai latte classique (chaud ou froid), chai glacé toute l'année, dirty chai avec espresso. Lait végétal dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/best-chai-sant-feliu.
- `copy-143d52de7c4d` — Matcha bio de REQ Matcha — un projet de Barcelone dont le fondateur japonais se rend au Japon pour sélectionner le thé directement. Nous servons 2g de matcha cérémoniel standard, avec option extra forte. Le prix est entre 3,50€ et 5€.
  Pages: /fr/guide/best-matcha-girona.
- `copy-f5832d5e2207` — Entre 3,50€ et 5€. Le matcha de qualité a un coût matière plus élevé — le prix le reflète.
  Pages: /fr/guide/best-matcha-platja-daro.
- `copy-da745293c7e9` — Entre 3,50€ et 5€. Le prix reflète le coût de la matière première.
  Pages: /fr/guide/best-matcha-sant-feliu.
- `copy-7803b78de76f` — Nous avons ouvert le 1er novembre 2024. Iwonka gère le café. Le masala chai est d'Awachai, Isère, France — bio, vrai mélange d'épices. Trois versions : chai latte classique (chaud ou froid), chai glacé toute l'année, dirty chai avec espresso. Lait végétal disponible dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-463ab1985399` — Trois versions : chai latte classique (chaud ou froid), chai glacé froid toute l'année, et dirty chai avec un shot d'espresso de La Cabra. Entre 3,50€ et 5€. Lait végétal disponible dans toutes les versions.
  Pages: /fr/guide/chai-latte-costa-brava.
- `copy-ea2f10d34698` — Nous avons ouvert en novembre 2024. Trois versions : chai latte classique (chaud ou froid), chai glacé toute l'année, et dirty chai avec espresso. Lait végétal disponible. Entre 3,50€ et 5€. Grande terrasse, WiFi, bonne lumière le matin.
  Pages: /fr/guide/chai-latte-girona.
- `copy-afe5aa440ed9` — Nous avons ouvert le 1er novembre 2024. Le masala chai bio d'Awachai est à la carte depuis le premier jour. Nous le servons en trois versions : chai latte classique (chaud ou froid), iced chai froid toute l'année, et dirty chai — le chai latte avec un shot d'espresso de La Cabra. Ce dernier réveille à peu près n'importe qui. Lait végétal disponible dans toutes les versions. Prix entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-platja-daro.
- `copy-9a6c9a77d49f` — Chez Dirty Rabbit entre 3,50€ et 5€ selon la version. Le chai latte classique est l'option la moins chère ; le dirty chai (avec espresso) est en haut de la fourchette.
  Pages: /fr/guide/chai-latte-platja-daro.
- `copy-7262d054c4b0` — Trois : chai latte classique (chaud ou froid), chai glacé froid toute l'année, et dirty chai avec un shot d'espresso de La Cabra. Lait végétal disponible dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-sagaro.
- `copy-2355aed58a65` — Nous avons ouvert le 1er novembre 2024. Iwonka gère le quotidien. Le masala chai d'Awachai est à la carte toute l'année, dans les trois versions : classique, chai glacé et dirty chai. Lait végétal disponible dans toutes les versions. Entre 3,50€ et 5€.
  Pages: /fr/guide/chai-latte-sant-feliu.
- `copy-f1072da6c16d` — Entre 3,50€ et 5€ chez Dirty Rabbit. Les établissements qui utilisent du matcha cérémoniel facturent naturellement plus — le coût de la matière première le justifie.
  Pages: /fr/guide/matcha-platja-daro.
- `copy-d7a30ee33615` — <strong>Prix cafe :</strong> €2,50-4,00
  Pages: /fr/guide/meilleur-cafe-specialite-costa-brava-2026.
- `copy-55d09fba7ad1` — <strong>Restauration :</strong> €4-15
  Pages: /fr/guide/meilleur-cafe-specialite-costa-brava-2026.
- `copy-e198eb5cb34f` — Tres versiones de chai todo el año: clásico caliente o frío, iced chai, dirty chai con espresso. Leche vegetal disponible. Entre 3,50€ y 5€.
  Pages: /guia/best-chai-girona.
- `copy-390f11697a5e` — El dirty chai — chai latte más espresso — es el que más preguntas genera. La gente lo pide por curiosidad y repite. El iced chai, que en la mayoría de sitios de la zona no existe o es de temporada, lo tenemos disponible todo el año. Leche vegetal en todas las versiones. Entre 3,50€ y 5€.
  Pages: /guia/best-chai-latte-platja-daro.
- `copy-914b39daa413` — Abrimos en noviembre de 2024. El chai de Awachai está en carta desde el primer día. Tres versiones: chai latte clásico (caliente o frío), iced chai todo el año, dirty chai con espresso. Leche vegetal en todas. Entre 3,50€ y 5€.
  Pages: /guia/best-chai-sant-feliu.
- `copy-315f2e92a4a9` — Matcha orgánico de REQ Matcha — un proyecto de Barcelona cuyo fundador japonés viaja a Japón a seleccionar el té directamente. Servimos 2g de matcha ceremonial estándar, con opción extra fuerte por un poco más. El precio está entre 3,50€ y 5€.
  Pages: /guia/best-matcha-girona.
- `copy-af7093b5db4e` — Entre 3,50€ y 5€. El matcha de calidad tiene un coste de materia prima más alto — el precio lo refleja.
  Pages: /guia/best-matcha-platja-daro.
- `copy-911821a4a4ce` — Entre 3,50€ y 5€. El precio refleja el coste del ingrediente.
  Pages: /guia/best-matcha-sant-feliu.
- `copy-ee0673f3db29` — Abrimos el 1 de noviembre de 2024. Iwonka lleva el local. El masala chai es de Awachai, Isère, Francia — orgánico, mezcla real de especias. Tres versiones: chai latte clásico (caliente o frío), iced chai todo el año, dirty chai con espresso. Leche vegetal disponible en todas. Entre 3,50€ y 5€.
  Pages: /guia/chai-latte-costa-brava.
- `copy-3489ffefbdcb` — Tres versiones: chai latte clásico (caliente o frío), iced chai frío todo el año, y dirty chai con un shot de espresso de La Cabra. Entre 3,50€ y 5€. Leche vegetal disponible en todas.
  Pages: /guia/chai-latte-costa-brava.
- `copy-39bbecb11ccc` — Abrimos en noviembre de 2024. Tres versiones: chai latte clásico (caliente o frío), iced chai todo el año, y dirty chai con espresso. Leche vegetal disponible. Entre 3,50€ y 5€. Terraza grande, WiFi, buena luz por la mañana.
  Pages: /guia/chai-latte-girona.
- `copy-46ffaa0c066b` — Abrimos el 1 de noviembre de 2024. El masala chai orgánico de Awachai entró en carta desde el principio. Lo servimos en tres versiones: chai latte clásico (caliente o frío), iced chai frío todo el año, y dirty chai — que es el chai latte con un shot de espresso de La Cabra. Ese último levanta a cualquiera. Leche vegetal disponible en todas las versiones. Precio entre 3,50€ y 5€.
  Pages: /guia/chai-latte-platja-daro.
- `copy-d28c8a732e96` — En Dirty Rabbit entre 3,50€ y 5€ según la versión. El chai latte clásico es la opción más económica; el dirty chai (con espresso) está en la parte alta del rango.
  Pages: /guia/chai-latte-platja-daro.
- `copy-ef8601d1bfef` — Tres: chai latte clásico (caliente o frío), iced chai frío todo el año, y dirty chai con un shot de espresso de La Cabra. Leche vegetal disponible en todas. Entre 3,50€ y 5€.
  Pages: /guia/chai-latte-sagaro.
- `copy-d2aa87a9f8e9` — Abrimos el 1 de noviembre de 2024. Iwonka lleva el día a día. El masala chai de Awachai está en carta todo el año, en las tres versiones: clásico, iced chai y dirty chai. Leche vegetal disponible en todas. Entre 3,50€ y 5€.
  Pages: /guia/chai-latte-sant-feliu.
- `copy-ee905d0ebb46` — <strong>Precio café:</strong> €2,50-4,00
  Pages: /guia/mejor-cafe-especialidad-costa-brava-2026.
- `copy-6d32331c2776` — <strong>Comida:</strong> €4-15
  Pages: /guia/mejor-cafe-especialidad-costa-brava-2026.

### Structured data variants

- `schema-51defe117c7d` on /brunch-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "addressRegion": "Girona", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-9683a508e35b` on /brunch-sagaro: `{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "15:00"}`
- `schema-cca65354ccb5` on /brunch: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-cca65354ccb5` on /brunch: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-cca65354ccb5` on /brunch: `{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "15:00"}`
- `schema-3b380938ebce` on /ca/brunch: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-3b380938ebce` on /ca/brunch: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-3b380938ebce` on /ca/brunch: `{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "15:00"}`
- `schema-7767440e33a9` on /ca/guia/best-chai-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-7767440e33a9` on /ca/guia/best-chai-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-5db4b7355347` on /ca/guia/best-chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-5db4b7355347` on /ca/guia/best-chai-latte-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-de101b8144aa` on /ca/guia/best-chai-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-de101b8144aa` on /ca/guia/best-chai-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-458a401cab68` on /ca/guia/best-coffee-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-3643ef46653c` on /ca/guia/best-coffee-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-43316d965bf3` on /ca/guia/best-matcha-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-43316d965bf3` on /ca/guia/best-matcha-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-faaab2063f93` on /ca/guia/best-matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-faaab2063f93` on /ca/guia/best-matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-8b23f5a197d6` on /ca/guia/best-matcha-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-8b23f5a197d6` on /ca/guia/best-matcha-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-aecba88c8804` on /ca/guia/best-specialty-coffee-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-aecba88c8804` on /ca/guia/best-specialty-coffee-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.797, "longitude": 3.036}`
- `schema-79079b6c4a54` on /ca/guia/chai-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-79079b6c4a54` on /ca/guia/chai-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-b408c233bdcf` on /ca/guia/chai-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-b408c233bdcf` on /ca/guia/chai-latte-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-8b232d3d2984` on /ca/guia/chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-8b232d3d2984` on /ca/guia/chai-latte-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-f5d81cce0f70` on /ca/guia/chai-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-f5d81cce0f70` on /ca/guia/chai-latte-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-55e5a74676cf` on /ca/guia/chai-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-55e5a74676cf` on /ca/guia/chai-latte-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-ac3a437a6742` on /ca/guia/matcha-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-ac3a437a6742` on /ca/guia/matcha-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-ac3a437a6742` on /ca/guia/matcha-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-362ba9397337` on /ca/guia/matcha-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-362ba9397337` on /ca/guia/matcha-latte-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-245560655412` on /ca/guia/matcha-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-245560655412` on /ca/guia/matcha-latte-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-622b12ae87e6` on /ca/guia/matcha-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-622b12ae87e6` on /ca/guia/matcha-latte-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-cbb3dd871981` on /ca/guia/matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-cbb3dd871981` on /ca/guia/matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-51defe117c7d` on /cafe-especialidad-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "addressRegion": "Girona", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-db0d7a5831ed` on /en/brunch: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-db0d7a5831ed` on /en/brunch: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-db0d7a5831ed` on /en/brunch: `{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "15:00"}`
- `schema-194c2acb98a8` on /en/guide/best-chai-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-194c2acb98a8` on /en/guide/best-chai-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-3aba05adce50` on /en/guide/best-chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-3aba05adce50` on /en/guide/best-chai-latte-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-f715483e8c78` on /en/guide/best-chai-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-f715483e8c78` on /en/guide/best-chai-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-0b93317ce44c` on /en/guide/best-coffee-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-c2e61633209d` on /en/guide/best-matcha-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-c2e61633209d` on /en/guide/best-matcha-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-5d7988462447` on /en/guide/best-matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-5d7988462447` on /en/guide/best-matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-5e5c29aa43c7` on /en/guide/best-matcha-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-5e5c29aa43c7` on /en/guide/best-matcha-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-8fb5d527c3a8` on /en/guide/best-specialty-coffee-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-8fb5d527c3a8` on /en/guide/best-specialty-coffee-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.797, "longitude": 3.036}`
- `schema-82f52b8d2db7` on /en/guide/chai-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-82f52b8d2db7` on /en/guide/chai-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-8d0f39a56772` on /en/guide/chai-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-8d0f39a56772` on /en/guide/chai-latte-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-c5941a247146` on /en/guide/chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-c5941a247146` on /en/guide/chai-latte-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-64393f26b361` on /en/guide/chai-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-64393f26b361` on /en/guide/chai-latte-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-c4097dc48662` on /en/guide/chai-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-c4097dc48662` on /en/guide/chai-latte-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-d49c8636ff83` on /en/guide/matcha-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-d49c8636ff83` on /en/guide/matcha-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-d49c8636ff83` on /en/guide/matcha-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-436536a29221` on /en/guide/matcha-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-436536a29221` on /en/guide/matcha-latte-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-562ee830a4c8` on /en/guide/matcha-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-562ee830a4c8` on /en/guide/matcha-latte-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-c1d09359cd3e` on /en/guide/matcha-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-c1d09359cd3e` on /en/guide/matcha-latte-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-162261712457` on /en/guide/matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-162261712457` on /en/guide/matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-de605158ad01` on /en/matcha: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaro", "postalCode": "17248", "addressRegion": "Girona", "addressCountry": "ES"}`
- `schema-0bc31d893c1f` on /en/matcha: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-1d9b7fd37169` on /fr/brunch: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-1d9b7fd37169` on /fr/brunch: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-1d9b7fd37169` on /fr/brunch: `{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "15:00"}`
- `schema-c65dead5a41f` on /fr/guide/best-chai-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-22c7beb0d8c0` on /fr/guide/best-chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-41506dde0162` on /fr/guide/best-chai-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-f99663bb71fb` on /fr/guide/best-coffee-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-efcc413ac5eb` on /fr/guide/best-coffee-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-b6954356a9ef` on /fr/guide/best-matcha-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-e3b80f06d5c1` on /fr/guide/best-matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-acfc01358e8c` on /fr/guide/best-matcha-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-3574e07410ca` on /fr/guide/best-specialty-coffee-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-3574e07410ca` on /fr/guide/best-specialty-coffee-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.797, "longitude": 3.036}`
- `schema-eb87ff8ff6e8` on /fr/guide/chai-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-a4b5a44eca79` on /fr/guide/chai-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-617f1fb5275f` on /fr/guide/chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-7b0613918da7` on /fr/guide/chai-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-5d7f02e016fa` on /fr/guide/chai-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-5e29382190fe` on /fr/guide/matcha-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-f84d8720d6ea` on /fr/guide/matcha-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-77999cc8c575` on /fr/guide/matcha-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-0e1338b0dbb1` on /fr/guide/matcha-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-afd587c35386` on /fr/guide/matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-afd587c35386` on /fr/guide/matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-253ad91b91a1` on /guia/best-chai-girona: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-253ad91b91a1` on /guia/best-chai-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-e41feaa943fe` on /guia/best-chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-e41feaa943fe` on /guia/best-chai-latte-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-2169eeb4721f` on /guia/best-chai-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-2169eeb4721f` on /guia/best-chai-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-8c2b77290349` on /guia/best-matcha-girona: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-8c2b77290349` on /guia/best-matcha-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-fa244082bd9c` on /guia/best-matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-fa244082bd9c` on /guia/best-matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-d98538f8d779` on /guia/best-matcha-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-d98538f8d779` on /guia/best-matcha-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-041bf5e576ce` on /guia/chai-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-041bf5e576ce` on /guia/chai-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-c2a342db71bb` on /guia/chai-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-c2a342db71bb` on /guia/chai-latte-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-1c640bc58001` on /guia/chai-latte-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-1c640bc58001` on /guia/chai-latte-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-663fe3f7ca2f` on /guia/chai-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-663fe3f7ca2f` on /guia/chai-latte-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-dcffb5b047dc` on /guia/chai-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-dcffb5b047dc` on /guia/chai-latte-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-661b61b946cf` on /guia/matcha-latte-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-661b61b946cf` on /guia/matcha-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-661b61b946cf` on /guia/matcha-latte-costa-brava: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-90257c4a95d7` on /guia/matcha-latte-girona: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-90257c4a95d7` on /guia/matcha-latte-girona: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-79c605fdf56b` on /guia/matcha-latte-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-79c605fdf56b` on /guia/matcha-latte-sagaro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-96aebee1a52b` on /guia/matcha-latte-sant-feliu: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-96aebee1a52b` on /guia/matcha-latte-sant-feliu: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-08a41edd574c` on /guia/matcha-platja-daro: `{"@type": "PostalAddress", "streetAddress": "Avenida Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-08a41edd574c` on /guia/matcha-platja-daro: `{"@type": "GeoCoordinates", "latitude": 41.7882, "longitude": 3.0323}`
- `schema-4aa0a27234ab` on /guia/mejor-cafe-costa-brava: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-26dd256a6851` on /guia/mejor-cafe-especialidad-sagaro: `{"@type": "PostalAddress", "streetAddress": "Avinguda Platja d'Aro 275", "addressLocality": "S'Agaró", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-984009e294f3` on src/layouts/Layout.astro (shared): `{"@type": "PostalAddress", "streetAddress": "Carrer de la Conca 17", "addressLocality": "S'Agaró", "addressRegion": "Girona", "postalCode": "17248", "addressCountry": "ES"}`
- `schema-984009e294f3` on src/layouts/Layout.astro (shared): `{"@type": "GeoCoordinates", "latitude": 41.7967591, "longitude": 3.048506}`
- `schema-984009e294f3` on src/layouts/Layout.astro (shared): `{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "15:00"}`

### Translation-backed contact values

- ca: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Dm-Dg: 8:00–15:00 (cuina fins 14:00)", "closed": "Dilluns tancat"}` — corresponding contact page and any component reading footer translations.
- en: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Tue–Sun: 8:00–15:00 (kitchen until 14:00)", "closed": "Monday closed"}` — corresponding contact page and any component reading footer translations.
- es: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Mar-Dom: 8:00–15:00 (cocina hasta 14:00)", "closed": "Lunes cerrado"}` — corresponding contact page and any component reading footer translations.
- fr: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Mar-Dim : 8h00–15h00 (cuisine jusqu'à 14h00)", "closed": "Fermé le lundi"}` — corresponding contact page and any component reading footer translations.
- pl: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Wt–Nd: 8:00–15:00 (kuchnia do 14:00)", "closed": "Poniedziałek — zamknięte"}` — corresponding contact page and any component reading footer translations.
- ru: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Вт–Вс: 8:00–15:00 (кухня до 14:00)", "closed": "Понедельник — выходной"}` — corresponding contact page and any component reading footer translations.
- uk: `{"address": "Avinguda de Platja d'Aro, 275", "city": "17248 S'Agaró, Girona", "hours": "Вт–Нд: 8:00–15:00 (кухня до 14:00)", "closed": "Понеділок — вихідний"}` — corresponding contact page and any component reading footer translations.
