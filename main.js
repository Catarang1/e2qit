const { app, BrowserWindow } = require('electron')
const electron = require('electron')
const remote = electron.remote

function createWindow () {
  const win = new BrowserWindow({
    width: 510,
    height: 135,
    frame: false,
    transparent: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()
}

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