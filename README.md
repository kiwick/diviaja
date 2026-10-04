# diviaja
Web de Diviaja, viajes y planes con Diana. Desarrollada con Astro y preparada para GitHub Pages.

Home creada desde cero con Astro 7.3.5, TypeScript estricto y npm, siguiendo
las decisiones y recursos de `docs/` y `design/`. Contenido estático y accesible
sin JavaScript de interfaz.

## Requisitos

- Node.js 22.12.0 o superior (comprobado con Node.js 24.21.0).
- npm 9.6.5 o superior.

## Desarrollo local

Desde la raíz del repositorio, instala las dependencias con el archivo de bloqueo:

```sh
npm ci
```

Arranca el servidor de desarrollo:

```sh
npm run dev
```

Abre `http://localhost:4321/` (o la dirección indicada en la terminal).

## Comprobación y generación

```sh
npm run check
npm run build
```

`check` comprueba los archivos Astro y TypeScript. `build` genera el sitio estático
en `dist/`. Para revisar el resultado localmente:

```sh
npm run preview
```

Abre `http://localhost:4321/` (o la dirección indicada en la terminal).
En PowerShell, si la política de ejecución bloquea `npm.ps1`, usa `npm.cmd`
en lugar de `npm` en estos comandos.

## Configuración

- `src/pages/index.astro`: home completa; también existen formulario, confirmación y privacidad.
- `src/components/`: marca, iconos, botones de contacto y footer.
- `src/layouts/SiteLayout.astro`: documento HTML, metadatos y datos estructurados.
- `src/styles/global.css`: fuentes locales, contenedor compartido y diseño responsive.
- `src/config/site.ts`: contactos centralizados y función compartida de rutas.
- `src/assets/`: tres ilustraciones en uso y logos derivados; las antiguas celdas de Londres, playa y tren ya no se importan.
- `design/fotos-reales-v3/`: fotografías de Tower Bridge y playa de Perhentian retocadas con IA, instrucciones del paquete y cuatro originales de Londres conservados.
- `design/harry-potter/`: fotografía de la maqueta de Hogwarts `IMG_5203.jpeg`, instrucciones y tres fotografías de reserva conservadas.
- `design/entradas-experiencias/`: boceto aprobado y cinco recursos separados del panel beige; procedencia en `docs/Inventario_Entradas_Experiencias.md`.
- `design/source-images/`: originales suministrados, conservados intactos.
- `astro.config.mjs`: salida estática, `site: 'https://diviaja.com'` y
  raíz `/`, siguiendo la [documentación de Astro para GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
- `tsconfig.json`: configuración estricta de TypeScript de Astro.
- `package-lock.json`: versiones resueltas de las dependencias para `npm ci`.

El README y el `.gitignore` originales se conservan. El `.gitignore` ya excluye
`node_modules/`, `dist` y `.astro/`.

## Recursos y licencias

Las fuentes se sirven localmente desde paquetes Fontsource fijados en el archivo
de bloqueo: Libre Caslon Display para la marca DIVIAJA y todos los títulos,
DM Sans para texto y Caveat para anotaciones y firma.
Solo se incluyen los subconjuntos latinos normales. Las tres tienen
licencia SIL OFL 1.1; sus textos completos se distribuyen en `public/licenses/`.

- [DM Sans](https://fontsource.org/fonts/dm-sans/about), DM Sans Project Authors.
- [Caveat](https://fontsource.org/fonts/caveat/about), Caveat Project Authors.
- [Libre Caslon Display](https://fontsource.org/fonts/libre-caslon-display/about), Libre Caslon Display Authors / Impallari Type.

Los SVG de interfaz se han escrito para este proyecto. Sharp (Apache-2.0), usado
solo en desarrollo/build, permite regenerar los derivados de las fuentes locales:

```sh
npm run prepare:images
```

Las tres celdas ilustrativas todavía en uso se extraen a 512 × 512 sin
ampliación; siguen necesitando originales de mayor resolución para pantallas de
alta densidad. Londres utiliza `londres-tower-bridge-retocada.png` (1672 × 941)
y la tarjeta de playa, `perhentian-playa-retocada.png` (1536 × 1024), del paquete
v3. Son fotografías aportadas y retocadas con IA según su LEEME. Astro genera
WebP responsive directamente desde esos PNG, sin ampliar los originales.
La fotografía aérea de Perhentian del mosaico es una toma distinta y se conserva.
El panel de entradas y experiencias utiliza cinco imágenes con nombres HTML,
optimizadas por Astro sin ampliación: la foto aportada de la maqueta de Hogwarts
y cuatro representaciones de categorías generadas con IA. El inventario interno
documenta su procedencia; el boceto no se publica como imagen de la sección.

## Alcance y pendientes

No incluye frameworks de interfaz, Tailwind, CMS, backend ni analítica.
El formulario usa FormSubmit, mantiene reCAPTCHA y permite elegir Email,
WhatsApp o Teléfono. Un script mínimo valida la obligatoriedad condicional del
número. El correo directo y los CTA de WhatsApp se conservan.
La privacidad conserva marcadores legales pendientes y noindex; debe completarse.

## Publicación

Producción: https://diviaja.com/ . Astro genera rutas en la raíz, sin prefijo de repositorio.
El workflow `.github/workflows/deploy.yml` usa Node 24 y `npm ci`, ejecuta
`check`, `build` y `node scripts/check-production.mjs`. Las PR solo se validan.
Solo `main` puede desplegar, tanto mediante push como mediante ejecución manual.
GitHub Pages conserva el dominio personalizado configurado en el repositorio.
`robots.txt` permite el rastreo; `sitemap.xml` incluye home y formulario.
Gracias y privacidad mantienen noindex y quedan fuera del sitemap.

Los originales de reserva y bocetos se conservan localmente y no forman parte del
artefacto publicado. El sitio desplegado contiene únicamente `dist/`.
Los informes y capturas de revisión se guardan localmente en `reports/` y no
deben añadirse a commits ni PRs. La revisión actual incluye limitaciones de
imágenes y verificaciones de navegador en `reports/implementacion-home.md`.
