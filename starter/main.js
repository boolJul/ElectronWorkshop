const { app, BrowserWindow, ipcMain, dialog, Notification, Tray, Menu } = require('electron');
const path = require('path');

let tray = null; // wird für die optionale Tray-Übung verwendet

function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createMainWindow();

  // TODO: Wenn gewünscht, hier ein Tray-Icon initialisieren und ein Kontextmenü definieren

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// TODO: IPC-Handler für 'dialog:openFile'
ipcMain.handle('dialog:openFile', async () => {
  // Hier soll ein Datei-Öffnen-Dialog angezeigt und der Dateiinhalt zurückgegeben werden
});

// TODO: IPC-Handler für 'window:openAbout'
ipcMain.on('window:openAbout', () => {
  // Erstelle ein zweites BrowserWindow und lade 'about.html'
});

// TODO: Beispiel für Notification (optional)
function showNotification () {
  new Notification({ title: 'Electron Workshop', body: 'Hello from the Main process!' }).show();
}
