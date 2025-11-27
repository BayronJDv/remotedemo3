import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3003,
  },
    output: {
    // Si estamos en producción (Vercel), usa tu dominio real.
    // Si estamos en local (dev), usa undefined (que por defecto es la raíz local).
    assetPrefix: process.env.NODE_ENV === 'production' 
      ? 'https://remotedemo3.vercel.app/' 
      : undefined,
  },
});
