/// <reference types="vite/client" />

interface MetaEnv {
  readonly SENDGRID_API_KEY: string;
  readonly SENDER_EMAIL: string;
}

interface ImportMeta {
  readonly env: MetaEnv;
}
