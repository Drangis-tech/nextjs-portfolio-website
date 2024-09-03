// types/cookieconsent.d.ts
interface CookieConsent {
    initialise(config: any): void;
    allowedCategory(category: string): boolean;
    // Add any other methods or properties you need
  }
  
  interface Window {
    cookieconsent?: CookieConsent;
  }
  
  declare var window: Window;