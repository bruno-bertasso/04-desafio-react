```bash
yarn add typescript @types/node @types/react @types/react-dom @types/jest
npx tsc --init
touch src/react-app-env.d.ts
```

Conteúdo de **src/react-app-env.d.ts**

```typescript
/// <reference types="react-scripts" />
```

> Sem ele não dá pra importar imagens por exemplo, dá erro de tipos.

yarn add -D @types/react-router-dom @types/styled-components @types/react-modal

children: React.ReactNode;
