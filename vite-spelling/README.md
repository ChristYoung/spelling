# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# 使用Tailwind CSS 
## 安装
 - yarn add tailwindcss postcss autoprefixer -D
 - tailwindcss init --postcss
 - 修改postcss.config.js
   ```js
   module.exports = {
   plugins: {
      tailwindcss: {},
      autoprefixer: {},
   },
   };
   ```
 - 修改tailwind.config.js
   ```js
   export default {
   content: [ './index.html', './src/**/*.{ts,tsx}' ],
   theme: {
      extend: {
         colors: {
         'primary-light': '#F0F0F0',
         'primary-dark': '#1B1A22',
         }
      },
   },
   plugins: [],
   }
   ```
 - 修改src/index.css
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
 - 修改src/main.tsx
   ```tsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App.tsx'
   import './index.css' // 引入index.css

   ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   )
   ```