/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_GH_LINK: string;
  readonly VITE_APP_GH_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
