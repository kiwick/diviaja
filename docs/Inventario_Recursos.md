# Inventario y uso de recursos

Todos los archivos son locales. No se incluyen código ni fuentes tipográficas. No usar logos, iconos o texto rasterizado del boceto como sustituto de elementos reales.

## Referencia visual

| Archivo | Uso |
| --- | --- |
| design/references/home-direccion-visual-aprobada.png | Referencia de estilo, secuencia y composición. No insertar como la página ni copiar sus márgenes a sangre. |

## Imágenes y logos

| Archivo bajo design/source-images/ | Uso y tratamiento |
| --- | --- |
| perhentian-aerea.webp | Fotografía aérea de Perhentian suministrada previamente. Hero/mosaico. Mantener escena real. |
| diana-borneo.webp | Fotografía real de Diana. Sección de presentación. Preservar identidad y aspecto. |
| borneo-apoyo.webp | Recurso anterior del proyecto para la franja de experiencia. No inventar detalles de su procedencia ni usarlo como prueba de un viaje personal concreto. |
| marrakech-apoyo.webp | Recurso anterior para experiencia/Marruecos. No inventar procedencia o ubicación más precisa. |
| suecia-apoyo.webp | Recurso anterior para experiencia/Suecia. No inventar procedencia o ubicación más precisa. |
| archer-travel.png | Logo de Archer utilizado hasta ahora. Partner discreto en footer. |
| evolution-travel.png | Logo de Evolution Travel utilizado hasta ahora. Partner discreto en footer. |
| escenas-ilustrativas-3x2.png | Fuente generada con IA: seis escenas ilustrativas en una cuadrícula. Extraer imágenes independientes durante la implementación; no usar sprites CSS. |

## Distribución de escenas-ilustrativas-3x2.png

Resolución: 1536 × 1024. Tres columnas y dos filas. Cada celda mide 512 × 512, sin separadores añadidos.

| Fila | Columna | Escena | Uso previsto |
| --- | --- | --- | --- |
| Superior | Izquierda | Familia en Londres | Hero principal del mosaico |
| Superior | Centro | Terrazas de arroz | Filipinas, mosaico secundario |
| Superior | Derecha | Calle europea | Una escapada |
| Inferior | Izquierda | Familia y castillo de Disney | Un viaje en familia; única aparición de Disney |
| Inferior | Centro | Playa y embarcación tradicional | Un viaje más lejos / inspiración Filipinas |
| Inferior | Derecha | Tren en estudio de cine | Banda de entradas / Harry Potter, imagen ilustrativa |

Las escenas son ilustrativas, no fotos de Diana ni evidencia de experiencias personales. No atribuirles una localización concreta no verificada. El tren generado no es documentación exacta del estudio de Harry Potter.

## Preparación que realizará Codex

Codex generará archivos de imagen independientes a partir de las seis celdas, manteniendo estas fuentes intactas. Elegirá nombres descriptivos, formatos, tamaños y recortes según la composición y el rendimiento, sin escalar una celda pequeña de forma que la pérdida de calidad quede oculta en el informe. Si falta resolución para un uso, señalarlo antes de darlo por válido.

Usar imágenes HTML reales con alt pertinente y dimensiones/reserva de espacio, en lugar de sprites de fondos para fotografías de contenido. Preparar versiones responsive cuando aporten valor. No modificar fotografías reales para inventar escenas, no reemplazar personas y no inventar experiencias de Diana.

Conservar el material fuente en design/. Publicar únicamente los recursos necesarios mediante la estructura Astro que decida Codex. No copiar docs/ ni los bocetos a public/ por defecto.

## Viajes de empresa — 5 de octubre de 2026

Fotografías independientes descargadas y convertidas a WebP local; Astro genera tamaños responsive. Los bocetos se usan únicamente como referencia de composición.

| Archivo | Autor y procedencia | Licencia verificada | Uso |
| --- | --- | --- | --- |
| `src/assets/empresa-viajera.webp` | [Gustavo Fring, Pexels, foto 4173214](https://www.pexels.com/photo/stylish-woman-with-suitcase-walking-in-airport-4173214/) | [Pexels License](https://www.pexels.com/license/): uso comercial y modificación permitidos, sin atribución obligatoria. | Viajera de negocios en aeropuerto; representa una viajera, no a Diana ni una recomendación de Diviaja por la modelo. Home y presentación de empresas. Fuente descargada: 1600 × 1067 px; WebP: 1400 × 934 px. |
| `src/assets/empresa-hotel.webp` | [Tim Photoguy, Unsplash, FPS7a7XQZ0w](https://unsplash.com/photos/empty-hotel-lobby-FPS7a7XQZ0w) | [Unsplash License](https://unsplash.com/license): uso comercial y modificación permitidos, sin atribución obligatoria. | Recepción de hotel como ejemplo visual; no se promete un hotel concreto. Fuente y WebP: 1000 × 667 px. |

Se preservan las restricciones de ambas licencias sobre redistribución de stock y uso de personas o marcas para sugerir respaldo comercial.
