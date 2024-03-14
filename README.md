# phoenix-nodeos
![Static Badge](https://img.shields.io/badge/PhoenixNodeOS-v._1.0.1-green) ![Static Badge](https://img.shields.io/badge/npm-v10.2.3-red?style=flat)


Simple Operating System written in Node.js


# Building the OS

First, you need to make sure the dependencies are installed. You can check this if by running `npm i` in the shell.

![Static Badge](https://img.shields.io/badge/newVersion-%23ff0000)
![Static Badge](https://img.shields.io/badge/buildTools-green)



First, you require the system. If your app is in the `sys` directory, use:
```js
const system = require('./system.js')
```

If you use a custom directory for apps, you may need additional `Node.js` knowledge.

For making a variable, you use `const` which is built in Node.js.
Example:
```js
const variable = 30
```

For making a function, you use `function` + function name followed by `(parameters)` then its content goes in `{}`
Example:
```js
function start(param) {
   console.log(param);
}
```


## Functions

After completing the steps above, you can use these functions:

`system.typeText()`

**typeText** is used to display output in the console. Here is an example of using **typeText**:

```js
system.typeText("Hello World!")
```


`system.sum()`

**sum** is used for calculating the sum of 2 numbers/values. Here is an example:

Displaying the returned value in output:

```js
system.sum(1, 5)
```
Assigning the returned value to a variable:

```js
const c = system.sum(1, 5)
```


The same process applies to:

`sub` - substraction

`mul` - multiplication

`div` - division

`sub` - substraction

`exp` - exponentiation

`mod` - modulo (finding the last digit of a number)


`system.dec()`

`system.inc()`

**inc** (increment) and **dec** (decrement) are used to increase/decrease a number/value by 1. Example:

Displaying the returned value in output:

```js
system.inc(6) //replace inc with dec for decrement
```

Assigning the returned value to a variable:

```js
const c = system.inc(6) //replace inc with dec for decrement 
```
