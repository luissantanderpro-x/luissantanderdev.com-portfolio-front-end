// src/webpack.d.ts
declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: string;
    export default value;
  }
  
  declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    const value: string;
    export default value;
  }
  
  // Declare require.context globally
  declare const require: {
    context: (path: string, recursive: boolean, pattern: RegExp) => {
      keys: () => string[];
      (key: string): string;
    };
  };
  