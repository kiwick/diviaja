# Diviaja: recursos para la implementación con Codex

Fecha: 4 de octubre de 2026.

Este paquete contiene únicamente documentos e imágenes. No contiene código web, configuraciones, workflows ni implementaciones anteriores.

Extraer el contenido de esta carpeta en la raíz del repositorio Astro existente. La raíz debe contener LEEME.md, docs/ y design/, junto a package.json y src/ que ya creó Codex. No extraer dentro de public/ ni sustituir archivos de la base Astro.

## Orden de lectura

1. docs/Decisiones_Actuales.md.
2. docs/Diviaja_Project_Brief_v2.md.
3. docs/Diviaja_Brand_Content_Guide_v2.md.
4. docs/Diviaja_Web_SEO_GEO_Guide.md.
5. docs/Direccion_Visual_y_Validacion.md.
6. docs/Contenido_Home.md.
7. docs/Inventario_Recursos.md.
8. Abrir design/references/home-direccion-visual-aprobada.png.

Las decisiones actuales prevalecen sobre los documentos anteriores. La imagen es una referencia estética, no un plano literal de márgenes ni un asset que deba insertarse como página.

## Estado técnico conocido

Repositorio: kiwick/diviaja. Base Astro creada por Codex y PR #1 integrada en main. Según el informe del usuario, el commit final de main es 8faba57a73860b28f3828cd9ed5110fa64155586. Verificar el estado actual antes de trabajar; no restablecer el repositorio a ese commit.

VS Code y Codex son el entorno de implementación. ChatGPT define estrategia, contenidos, dirección visual y recursos. Todo el código lo crea Codex desde cero.

## Primera tarea tras extraer

Leer y comprobar el paquete. Informar de cualquier recurso ausente o contradicción. No implementar todavía páginas ni configurar despliegue o DNS hasta recibir la siguiente instrucción.

## Informes

Cada tarea debe terminar con un informe Markdown compartible como archivo. En VS Code, guardarlo en reports/ e indicar su ruta absoluta. Incluir cambios, archivos afectados, pruebas con resultados reales, incidencias, commit, rama, estado de Git y PR cuando exista. No incluir reports/ en commits ni PRs. No depender de capturas manuales para transmitir el estado técnico.
