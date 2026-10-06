import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://diviaja.com',
  // The complete page CSS is small; embed it once to avoid a blocking round trip.
  build: { inlineStylesheets: 'always' },
});
