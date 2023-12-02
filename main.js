const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Carga tu archivo index.html
  mainWindow.loadFile('index.html');

  // Abre las DevTools (quitar en producción)
  mainWindow.webContents.openDevTools();

  // Evento cuando la ventana es cerrada
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Crea la ventana principal cuando la aplicación está lista
app.whenReady().then(createWindow);

// Sal cuando todas las ventanas estén cerradas (excepto en macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Crea una nueva ventana en macOS cuando la aplicación está activa
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
