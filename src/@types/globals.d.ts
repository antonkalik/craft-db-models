export declare global {
  namespace NodeJS {
    namespace env {
      interface ProcessEnv extends IProcessEnv {}
    }
  }
}

interface IProcessEnv {
  JWT_SECRET: string;
  NODE_ENV: 'development' | 'production';
  PORT: number;
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}