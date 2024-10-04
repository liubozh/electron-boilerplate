// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import {
  WINDOW_CLOSE,
  WINDOW_MAXIMIZE,
  WINDOW_MINIMIZE,
} from '@/lib/constants';
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.invoke(WINDOW_MINIMIZE),
  maximize: () => ipcRenderer.invoke(WINDOW_MAXIMIZE),
  close: () => ipcRenderer.invoke(WINDOW_CLOSE),
});
