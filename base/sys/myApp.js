const explorer = require('./explorer.js')
const system = require('./system.js')
const a = 5
const b = 18
const c = system.sum(a,b)
function start() {
   console.log(`\nThis is my first app!`);
   console.log(`The sum of ${a} and ${b} is ${c}`);
   explorer.mainWindow();
}

module.exports = {
  start,
}