const { app, BrowserWindow } = require("electron");
const { remote } = require("electron");

const startBtn = remote.document.getElementById("start");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
  });

  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
});

function handleStart() {
  console.log("start");
}

startBtn.addEventListener("click", handleStart);
