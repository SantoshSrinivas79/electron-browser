var app  = require('app')
var BrowserWindow = require('browser-window')
app.commandLine.appendSwitch('ignore-certificate-errors', true)
var mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 1030, height: 720, frame: false })
  mainWindow.loadUrl('file://' + require('path').join(__dirname, 'browser.html'))
  mainWindow.on('close', function(e) {
  	console.log("This is getting closed");
    // e.preventDefault();
  })


})


