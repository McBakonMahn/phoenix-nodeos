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

If the pats is in `ugc`, use:
```js
const system = require('./../sys/system.js')
```


For making a variable, you use `const` which is built in Node.js.
Example:
```js
const variable = 30
```
For making a function, you use `function` + function name followed by `(parameters)` then its content goes in `{}`
Example:
```js

