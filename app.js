const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 700,
    height: 760,
  });

  win.loadFile("src/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
