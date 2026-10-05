# Decisiones actuales de Diviaja

Estas decisiones posteriores prevalecen sobre las guías v2 cuando exista contradicción.

## Forma de trabajo

La implementación comercial comienza desde cero sobre la base Astro creada por Codex. No reutilizar ningún HTML, CSS o JavaScript de los ZIP anteriores. ChatGPT aporta instrucciones y recursos. Codex toma las decisiones de implementación dentro del alcance autorizado. Avanzar por tareas delimitadas. No desplegar, modificar DNS ni configurar el dominio sin una instrucción específica.

## Marca y alcance comercial

- Diviaja es la marca. La persona es Diana. Usar siempre Diana, también en la firma. No usar «Di».
- Puede gestionar cualquier destino, el viaje completo o una parte: escapadas, viajes familiares, vuelos, hoteles, traslados, entradas, actividades y experiencias.
- No presentar los destinos conocidos como un catálogo cerrado ni afirmar que puede cubrir literalmente cualquier servicio sin comprobar su disponibilidad.
- Equilibrar planes cercanos y viajes más lejanos. No posicionar la landing exclusivamente como viajes exóticos, largos, de lujo o de gran presupuesto.
- Mostrar Disney una sola vez. Harry Potter Studios/Londres puede tener presencia diferenciada como ejemplo de entradas. El tren ilustrativo no se presenta como fotografía auténtica del estudio.
- Incorporar Perhentian mediante la fotografía aérea suministrada. Filipinas puede aparecer como inspiración.
- No incorporar fiordos noruegos.
- No inventar experiencias personales, credenciales adicionales, descuentos, disponibilidad, afiliaciones ni mejores precios.

## Servicio y remuneración

Explicar de forma clara que la ayuda no supone coste adicional en reservas remuneradas por el proveedor. Diana recibe la comisión del proveedor. Si una opción lleva un cargo específico por su servicio, se explica antes de reservar. No prometer gratuidad universal para cualquier gestión ni que todas las opciones son más baratas.

## Navegación y footer

- Landing sin enlaces de menú a Malasia, Marruecos o Suecia.
- Sin enlace «Sobre mí» en el menú. La presentación de Diana se descubre al hacer scroll.
- CTA principal: WhatsApp. También formulario, teléfono y email cuando corresponda.
- Logos Archer Travel y Evolution Travel discretos, con tamaño óptico equilibrado y centrados verticalmente en la misma línea del footer. Evitar grandes rectángulos blancos sobre el fondo oscuro.
- El footer incluye Aviso legal, Privacidad y Cookies. Los logos forman parte de ese footer, sin otra franja debajo.

## Páginas previstas

Home, página de formulario/contacto, aviso legal, privacidad, cookies y 404. No crear páginas de destino ni un blog en la primera implementación.

GitHub Pages es estático. La solución de envío del formulario debe acordarse antes de implementarla. No simular un envío exitoso ni introducir un proveedor externo por iniciativa propia. Un enlace mailto no equivale a un formulario con envío automático.

Los textos legales deben reflejar la operativa real y dejar identificados los datos pendientes de titular, NIF, domicilio y proveedores. No inventarlos. No añadir analítica ni cookies de seguimiento en esta fase. No implementar un banner decorativo sin necesidad real.

## Datos de contacto utilizados hasta ahora

WhatsApp y teléfono: +34 660 590 686. Email: diana@diviaja.com, indicado por la titular como destinatario actual. Los datos están centralizados en `src/config/site.ts` para páginas, enlaces de correo y formulario. Cambiar el destinatario de FormSubmit requiere una activación independiente; interceptar el POST no acredita la recepción de correo.

Dominio objetivo: diviaja.com. La base técnica actual utiliza la dirección de proyecto kiwick.github.io/diviaja. La transición de dominio y base se hará en la tarea de despliegue, no durante el inventario de recursos.
