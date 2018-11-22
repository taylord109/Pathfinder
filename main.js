const {BrowserWindow, app} = require("electron");
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    });
    win.loadFile('dist/pathfinder/index.html');
    // win.loadURL(
    //   url.format({
    //       pathname: path.join(__dirname, `/dist/index.html`),
    //       protocol: 'file:',
    //       slashes: true
    //     })
    // );
    //// un comment below to open the DevTools
    //win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
