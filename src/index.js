const { app, BrowserWindow, ipcMain,Menu  } = require("electron");
const path = require("path");
if (require("electron-squirrel-startup")) {
  app.quit();
}
let mainWindow;
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 720,
    icon: path.join(__dirname, "icon/pdf.ico"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
let fileToOpen = "";
  if (process.argv.length >= 2){
     fileToOpen = process.argv[1];
  }
  
  // console.log(path.extname(fileToOpen));
  if (path.extname(fileToOpen) === ".pdf") {
    mainWindow.loadURL(fileToOpen);
  } else {
    mainWindow.loadFile(path.join(__dirname, "index.html"));
  }
  mainWindow.maximize();
  Menu.setApplicationMenu(null); 
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("file-dropped", (event, filePath) => {
  mainWindow.loadURL(filePath);
});
