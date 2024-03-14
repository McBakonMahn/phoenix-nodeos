const home = require('./explorer.js')

//printing text in ouput
function typeText(string) {
  console.log(string);
  home.mainWindow();
}

//sum of 2 nrs
function sum(a,b) {
   console.log(a+b);
   home.mainWindow();
   return a+b;
}

//subtraction of 2 nrs
function sub(a,b) {
   console.log(a-b);
   home.mainWindow();
   return a-b;
}

//multiplication of 2 nrs
function mul(a,b) {
   console.log(a*b);
   home.mainWindow();
   return a*b;
}

//division of 2 nrs
function div(a,b) {
   console.log(a/b);
   home.mainWindow();
   return a/b;
}

//exponentiation of 2 nrs
function exp(a,b) {
   console.log(a**b);
   home.mainWindow()
   return a**b;
}

//modulo of 2 nrs
function mod(a,b) {
   console.log(a%b);
   home.mainWindow();
   return a%b;
}

//increment of a nr
function inc(a) {
   console.log(++a);
   home.mainWindow();
   return ++a;
}

//decrement of a nr
function dec(a) {
   console.log(--a);
   home.mainWindow();
   return --a;
}

module.exports = {
  typeText,
  sum,
  sub,
  mul,
  div,
  exp,
  mod,
  inc,
  dec
}