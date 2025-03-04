/// <reference types="vite/client" />

interface Window {
  dataLayer: any[];
  gtag: (command: string, action: string, params?: any) => void;
}