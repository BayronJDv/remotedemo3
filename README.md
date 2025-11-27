# Microfrontend: Lateral (remote3)

Este repositorio es un microfrontend remoto que expone el componente lateral (`Lateral`), utilizado como carrito de compras.

## Funcionalidad

- Muestra los productos agregados al carrito.
- Escucha eventos para actualizar su estado.
- Expone el componente `Lateral` vía Module Federation.
- Puerto por defecto: 3001 (Nota: Puede entrar en conflicto con `remote`, se sugiere cambiar a 3003 en `rsbuild.config.ts`).

## Ejecución

```bash
npm install
npm run dev
```
