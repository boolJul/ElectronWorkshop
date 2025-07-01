const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  openAbout: () => ipcRenderer.send('window:openAbout'),
  onFileContent: (callback) => ipcRenderer.on('file-content', (event, data) => callback(data))
});
