
const colors = require('colors');
const fs = require('fs');
const os = require('os');
const rl = require('readline');
function mainWindow() {
  console.log('You are running on v1.0.1, to start making a app, please visit https://github.com/McBakonMahn/phoenix-nodeos/blob/main/README.md#building-the-os'.green)

  console.log('Welcome to Phoenix Custom NodeOS!'.green);
  const consolereadline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  consolereadline.question('enter a path:', (path) => {
    const RunApp = require('./' + path);
    RunApp.start();
  })
}

module.exports = {
  mainWindow,
}