Implementa únicamente la sección de entradas y experiencias de la home siguiendo referencias/boceto-aprobado.png. El usuario ha aprobado ese boceto. Este encargo sustituye la instrucción anterior de mantener una sola foto de Harry Potter en este bloque.

## Alcance y diseño

Integra el contenido de la franja «También entradas a los estudios de Harry Potter, actividades y experiencias» dentro del panel de fondo beige más oscuro. Elimina la franja clara separada y el espacio que dejaba. No cambies ese beige por verde oscuro.

Usa el contenedor compartido y los márgenes ya corregidos en el proyecto. En escritorio, texto a la izquierda y mosaico de cinco imágenes a la derecha, equilibrados como el boceto, aproximadamente 42% / 58%, con separación moderada. Mantén las fuentes locales aprobadas, el verde petróleo de los textos y el fondo existente. No aumentes el tamaño de los títulos respecto a la escala del sitio por copiar los píxeles del boceto. La referencia marca composición y jerarquía, no dimensiones fijas.

Texto definitivo:

- Antetítulo: «ENTRADAS Y EXPERIENCIAS».
- Título: «Y si solo necesitas unas entradas, también.»
- Cuerpo: «Cuéntame el plan. Te ayudo a buscar opciones y a organizar lo que haga falta.»
- Línea de ejemplos, dentro del mismo panel: «Harry Potter · Universal Orlando · Magic Kingdom · Fórmula 1 · MotoGP».

La línea anterior sustituye el antiguo «También entradas…», no hay que repetir ambos textos. Los ejemplos no delimitan la oferta de Diana. No añadas destinos al menú ni cambies CTA, formularios, logos, otras secciones o textos generales. No añadas enlaces ficticios a las tarjetas. Conserva el recorrido de contacto existente.

## Collage y recursos

Construye el collage con cinco imágenes separadas mediante componentes y CSS del proyecto. No uses el boceto como imagen de la sección y no incrustes textos en las fotos.

Primera fila de escritorio, tres piezas:

1. assets/harry-potter-hogwarts.jpeg, foto real aportada por el usuario. Nombre visible: «Harry Potter». Alt: «Maqueta de Hogwarts en los estudios de Harry Potter cerca de Londres».
2. assets/universal-orlando.png. Nombre visible: «Universal Orlando».
3. assets/magic-kingdom.png. Nombre visible: «Magic Kingdom».

Segunda fila, dos piezas más anchas:

4. assets/formula-1.png. Nombre visible: «Fórmula 1».
5. assets/motogp.png. Nombre visible: «MotoGP».

Respeta el orden, las cinco experiencias distintas, separaciones pequeñas y uniformes (orientativamente 8 px) y esquinas discretas. Los nombres van en HTML sobre una sombra o degradado muy suave que garantice contraste. Las fotografías deben tener protagonismo sin desplazar el texto ni convertir esta sección en una galería enorme.

Harry Potter es una foto real de una maqueta. Los otros cuatro recursos están generados con IA para representar las categorías y no muestran pruebas de asistencia de Diana ni un evento, piloto o equipo contratado. Conserva esta procedencia en el inventario interno. No añadas la etiqueta visible «imagen ilustrativa» ni otra advertencia en este bloque. No atribuyas las imágenes generadas a Diana, no describas un evento específico que no esté identificado y no inventes disponibilidad, precios, afiliaciones oficiales ni acreditaciones.

En móvil apila texto y collage, conservando márgenes y un ritmo compacto. Reorganiza las cinco piezas para que se lean los nombres y se reconozcan los sujetos: puedes usar dos columnas y una pieza a ancho completo. Evita huecos vacíos y no reduzcas todo el mosaico de escritorio a una miniatura. En tableta adapta la composición antes de que el texto o las imágenes queden estrechos. Comprueba especialmente la torre de Magic Kingdom, el globo de Universal, las torres de Hogwarts, el coche y el motorista; ajusta object-position por recurso y breakpoint si hace falta.

Optimiza mediante Astro con dimensiones declaradas, tamaños responsivos y carga diferida apropiada a su posición en la página. No publiques PNG pesados sin optimización. No añadas librerías, carruseles ni JavaScript para este mosaico. Mantén compatibilidad con GitHub Pages y el base /diviaja/.

## Verificación y entrega

Revisa tú el resultado en navegador, al menos a 360, 390, 768, 1024 y 1440 px: contenedor, márgenes, espacios, textos, contraste de etiquetas, carga, recortes y ausencia de desbordamiento. Revisa las secciones contiguas para comprobar que retirar la franja no deja espacios residuales. Si hay un defecto, busca sus otras apariciones y corrige la causa, no únicamente un ejemplo. No pidas al usuario que haga de QA.

Ejecuta npm run check y npm run build. Indica únicamente las comprobaciones realmente ejecutadas. Si alguna revisión no es posible, deja la limitación explícita y no la des por superada.

Entrega solamente un informe Markdown descargable o adjuntable en reports/seccion-entradas-experiencias.md con archivos modificados, recursos utilizados, verificaciones reales, incidencias pendientes, estado de Git y ruta absoluta. No generes ZIPs de revisión ni solicites pantallazos. Mantén reports/ fuera de Git. No hagas commit, push, PR, merge ni despliegue en esta tarea.
