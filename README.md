# PrettyBandwidth [![NPM version](https://img.shields.io/npm/v/prettybandwidth.svg?style=flat)](https://www.npmjs.com/package/prettybandwidth) [![NPM monthly downloads](https://img.shields.io/npm/dm/prettybandwidth.svg?style=flat)](https://npmjs.org/package/prettybandwidth) [![Build Status](https://app.travis-ci.com/acronpl/prettybandwidth.svg?branch=master)](https://app.travis-ci.com/acronpl/prettybandwidth)

>  Convert bandwidth values to prettier format (123456789 -> 117.7 Mb/s)

```
Supported bandwidth units:
* b/s
* kb/s
* Mb/s
* Gb/s
* Tb/s
* Pb/s
* Eb/s
```

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save prettybandwidth
```


## Usage

```js
const prettyb = require('prettybandwidth');

let x = prettyb(1024);
  //x = "1 kb/s"

    x = prettyb(1024 * 1024);
  //x = "1 Mb/s"

    x = prettyb(123456789);
  //x = "117.7 Mb/s"
```

### Options

```javascript
prettyb(123456, true, true, 2);

/*
First arg is bandwidth in bytes (integer)
Second argument is to remove the space from the output (boolean)
Third argument is to use a single character for the bandwidth (boolean)
Forth argument is the number of decimal places to return, default is 1 (integer). 
*/


let x = prettyb(123456789, {short: true}) // prettyb(123456789, true);
  //x = "117.7Mb/s"

    x = prettyb(123456789, {unitOnly: true}) // prettyb(123456789, false, true);
  //x = "117.7 M"

    x = prettyb(123456789, {unitOnly: true, precision: 2}) // prettyb(123456789, false, true, 2);
  //x = "117.74 M"
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

## About
### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### License
Copyright © 2018, [acronpl](https://github.com/acronpl).
Released under the [MIT License](LICENSE).

***
