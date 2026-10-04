# Dirección visual y criterios de aceptación

## Referencia aprobada

Abrir design/references/home-direccion-visual-aprobada.png. Mantener su tono editorial cálido, fondos crema, verde oscuro, títulos serif, cuerpo legible, fotografía protagonista y detalles personales manuscritos discretos. El diseño debe resultar cercano, no elitista ni genérico de agencia.

Conservar su secuencia: cabecera breve, hero de texto y mosaico, tres tipos de planes, banda de entradas, Diana y explicación comercial, experiencia personal, contacto y footer.

La referencia contiene textos rasterizados y escenas generadas. No usarla como fondo de toda la página, ni para sustituir HTML real, ni para extraer la identidad de Diana. Su fotografía real se suministra aparte.

## Correcciones obligatorias respecto al boceto

El usuario rechazó las implementaciones anteriores por sus márgenes y alineaciones. La aprobación fue del estilo visual, no de aquel código ni de todos los bordes a sangre del boceto.

Establecer un único sistema de ancho máximo y márgenes laterales compartido por la cabecera, hero, planes, entradas, presentación de Diana, experiencia, contacto y footer. Los fondos pueden ocupar todo el viewport; los límites exteriores del contenido deben alinearse. Ninguna fotografía debe tocar el borde del viewport por accidente. No ajustar cada sección con valores laterales independientes ni resolver desbordamientos ocultándolos globalmente.

Definir una escala coherente de espacios verticales, separaciones internas y tipografía. Las composiciones pueden cambiar a una columna al estrecharse la pantalla. No forzar el layout de escritorio en tablet o móvil.

Equilibrar el hero sin texto amontonado ni fotografías excesivas. Evitar imágenes estiradas, cortes de rostros o recortes que pierdan el motivo principal. La foto real de Diana no debe alterarse para inventar otra persona.

Los logos de partners son secundarios. Preservar sus formas y proporciones. Integrarlos con un tratamiento que funcione sobre el footer oscuro, sin deformaciones ni tamaños dominantes. Centrar sus cajas y ajustar su tamaño óptico, no solo igualar el ancho de archivo.

La firma manuscrita debe ser Diana. Elegir un recurso legible y consistente entre dispositivos, sin depender de que el usuario tenga instalada una fuente concreta. Fuentes con licencia compatible y preferiblemente locales.

## Verificación exigida antes de aprobar la implementación

- Renderizar y revisar la web real a 360, 390, 768, 1024 y 1440 píxeles de ancho. Comprobar también 320 y 1920 para detectar extremos.
- Verificar que no hay scroll horizontal, solapamientos, texto cortado, CTAs fuera de su contenedor ni imágenes invadiendo las columnas.
- Medir y comprobar los límites laterales compartidos. Registrar los valores de contenedor y márgenes elegidos. La revisión debe incluir cabecera, hero, fotos de planes, foto de Diana, contacto y footer.
- Comprobar que ambos logos están alineados en una misma línea en escritorio y organizados con intención en móvil.
- Revisar página completa y detalles del hero, Diana y footer. Incluir capturas reales de navegador como archivos anexos al informe, no imágenes generadas para simular resultados.
- Validar enlaces, navegación por teclado, foco, contraste, etiquetas del formulario, títulos y carga de imágenes. Confirmar que las rutas funcionan bajo /diviaja en la fase de Pages.
- Ejecutar los checks y el build disponibles. Informar de las pruebas efectivamente realizadas y de cualquier bloqueo. No atribuir una revisión visual a una inspección de código o a un build correcto.
- Aspirar a los objetivos de rendimiento y accesibilidad de la guía. Registrar resultados reales, sin inventar puntuaciones.

No dar la implementación por terminada solo porque compila. Si el navegador no está disponible, explicar esa limitación y dejar la revisión visual pendiente.
