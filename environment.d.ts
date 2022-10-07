declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        CLIENT_ID: string;
        CLIENT_SECRET: string;
        SESSION_SECRET: string;
        DATABASE_USERNAME: string,
        DATABASE_PASSWORD: string,
        DATABASE_HOST: string,
        DATABASE: string,
        APP_BASE_URI: string,
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}