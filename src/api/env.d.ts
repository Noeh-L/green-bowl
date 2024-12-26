/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_AUTH_DOMAIN: string;
  readonly VITE_PROJECT_ID: string;
  readonly VITE_APP_STORAGE_BUCKET: string;
  readonly VITE_APP_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_APP_ID: string;
  // Ajoutez toutes les autres variables d'environnement que vous utilisez dans votre projet.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
