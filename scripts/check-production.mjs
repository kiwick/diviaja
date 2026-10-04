import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const root = new URL('../dist/', import.meta.url);
const pages = ['', 'cuentame-tu-plan/', 'gracias/', 'privacidad/'];
for (const path of pages) {
  const html = await readFile(new URL(`${path}index.html`, root), 'utf8');
  assert(!html.includes('kiwick.github.io') && !html.includes('/diviaja/'), `Old URL in ${path}`);
  assert(html.includes(`href="https://diviaja.com/${path}"`), `Canonical missing in ${path}`);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
  const noindex = /name="robots" content="noindex, follow"/.test(html);
  assert.equal(noindex, ['gracias/', 'privacidad/'].includes(path));
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    const resource = match[1].split('?')[0];
    await access(new URL(`.${resource}${resource.endsWith('/') ? 'index.html' : ''}`, root));
  }
  if (path === 'cuentame-tu-plan/') {
    assert(html.includes('action="https://formsubmit.co/diana@dicreativa.com"'));
    assert(html.includes('value="https://diviaja.com/gracias/"'));
    assert(html.includes('name="Preferencia de contacto"'));
    assert(html.includes('name="_honey"'));
    assert(!html.includes('name="_captcha"') && !html.includes('name="_autoresponse"'));
  }
  if (path === 'privacidad/') assert(html.includes('[NOMBRE COMPLETO O RAZÓN SOCIAL PENDIENTE]'));
}
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
assert(sitemap.includes('<loc>https://diviaja.com/</loc>'));
assert(sitemap.includes('<loc>https://diviaja.com/cuentame-tu-plan/</loc>'));
assert(!sitemap.includes('gracias') && !sitemap.includes('privacidad'));
assert((await readFile(new URL('robots.txt', root), 'utf8')).includes('Sitemap: https://diviaja.com/sitemap.xml'));
assert.equal((await readFile(new URL('CNAME', root), 'utf8')).trim(), 'diviaja.com');
console.log('Production URLs, local links, indexing and FormSubmit configuration verified.');
