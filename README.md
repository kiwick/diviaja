# diviaja
Web de Diviaja, viajes y planes con Diana. Desarrollada con Astro y preparada para GitHub Pages.

Base técnica creada desde cero con Astro 7.3.5, TypeScript estricto y npm.
Incluye únicamente la página provisional «Diviaja — En preparación».
El diseño, los textos y las imágenes se incorporarán más adelante.

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

Abre `http://localhost:4321/diviaja/` (o la dirección indicada en la terminal).

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

Abre `http://localhost:4321/diviaja/` (o la dirección indicada en la terminal).
En PowerShell, si la política de ejecución bloquea `npm.ps1`, usa `npm.cmd`
en lugar de `npm` en estos comandos.

## Configuración

- `src/pages/index.astro`: única página provisional.
- `astro.config.mjs`: salida estática, `site: 'https://kiwick.github.io'` y
  `base: '/diviaja'`, siguiendo la [documentación de Astro para GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
- `tsconfig.json`: configuración estricta de TypeScript de Astro.
- `package-lock.json`: versiones resueltas de las dependencias para `npm ci`.

El README y el `.gitignore` originales se conservan. El `.gitignore` ya excluye
`node_modules/`, `dist` y `.astro/`.

Esta base no incluye frameworks de interfaz, Tailwind, CMS ni backend.
No configura despliegue, dominio ni DNS; la publicación se abordará después.
