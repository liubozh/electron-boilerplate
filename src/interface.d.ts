export interface IElectronAPI {
  minimize: () => Promise<void>;
  maximize: () => Promise<void>;
  close: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
