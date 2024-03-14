const colors = require('colors');
const rl = require('readline');
const config = require('./config.js');
const username = config.getUsername();
const password = config.getPassword();
const explorer = require('./base/sys/explorer.js');
const loginWindow = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

function loginrequest() {
   loginWindow.question('Welcome, ' + username + '! Please enter your password: ', (pass) => {
     if (pass === password) {
       console.log('Login successful!'.green);
       loginWindow.close();
       explorer.mainWindow();
     }
     else {
       console.log('Incorrect password!'.red);
       proccess.exit(1);
     }
   })
}

module.exports = {
  loginrequest,
}