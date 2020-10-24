const { app, BrowserWindow } = require('electron')
const electron = require('electron')

var win;

function createWindow () {
  win = new BrowserWindow({
    width: 510,
    height: 135,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()
}

const { ipcMain } = require('electron')

ipcMain.handle('close', (event, ...args) => {
  app.quit()
})

ipcMain.handle('mini', (event, ...args) => {
  win.minimize()
})

ipcMain.handle('git', (event, ...args) => {
  const {shell} = require('electron');
  shell.openExternal("https://github.com/Catarang1/e2qit")
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})