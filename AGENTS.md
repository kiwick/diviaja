# Reglas de trabajo en Diviaja

## Corregir causas y revisar todas las apariciones

- Cuando se reporte un defecto, localizar su causa común y buscar todas sus apariciones en la web: estilos compartidos, componentes, variantes y tamaños de pantalla. El ejemplo señalado no limita la revisión a ese elemento.
- Corregir la causa dentro del alcance autorizado, sin parches de letras individuales ni soluciones que oculten el problema. Mantener coherencia entre todas las instancias afectadas.
- El usuario no es el QA. Antes de entregar, revisar por cuenta propia la página completa y los detalles relevantes en un navegador real, compararlos con la referencia aprobada y corregir lo detectado.
- En cambios visuales, comprobar 320, 360, 390, 768, 1024, 1440 y 1920 px. Revisar tipografía y glifos, saltos de línea, densidad, márgenes, padding, alturas, equilibrio de columnas, transiciones y encuadres, además de accesibilidad y desbordamientos.
- Un build correcto, la ausencia de scroll horizontal o la alineación de cajas no equivalen a una aprobación visual. Ejecutar `check` y `build` y distinguir sus resultados de la inspección visual efectiva.
- Conservar textos, recursos, orden y funcionalidades salvo autorización para cambiarlos. Las decisiones actuales prevalecen sobre las guías anteriores; las instrucciones de la tarea prevalecen sobre el formato de entrega sugerido por los documentos.
- Finalizar con un informe Markdown que indique causas, cambios, archivos, comprobaciones reales, limitaciones y estado de Git/PR. No inventar puntuaciones ni pruebas. Respetar si la tarea pide solo el informe, sin paquetes ni anexos.
- No incluir `reports/` en commits ni pull requests.
