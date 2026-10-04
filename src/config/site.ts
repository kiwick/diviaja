// Supplied contact details: confirm with Diana before publishing.
export const contact = { name: 'Diana', phone: '+34660590686', phoneLabel: '660 590 686', email: 'diana@dicreativa.com' };
export const whatsappHref = `https://wa.me/${contact.phone.replace('+', '')}`;
export const sitePath = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\/+|\/+$/g, '')}${path ? '/' : ''}`;
// Add routes only after their pages have been implemented.
export const futurePages: { contact?: string; legal: { label: string; href?: string }[] } = {
  contact: sitePath('cuentame-tu-plan'),
  legal: [{ label: 'Aviso legal' }, { label: 'Privacidad', href: sitePath('privacidad') }, { label: 'Cookies' }],
};
