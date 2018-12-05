PrettyBandwidth
==========

Based on: davglass/prettysize

Helper utility to provide pretty printed bandwidth speed (best used for logging or CLI output)


UsagePrettyBandwidth
-----

```
npm install prettybandwidth
```

```javascript

const prettyb = require('prettybandwidth');

let str = prettyb(1024);
  //str = "1 kb/s"

    str = prettyb(1024 * 1024);
  //str = "1 Mb/s"

    str = prettyb(123456789);
  //str = "117.7 Mb/s"
```

It supports the following sizes:

* b/s
* kb/s
* Mb/s
* Gb/s
* Tb/s
* Pb/s
* Eb/s

Arguments
---------

```javascript
prettyb(123456, true, true, 2);

/*

First arg is size
Second argument is to remove the space from the output
Third argument is to use a single character for the size.
Forth argument is the number of decimal places to return, default is 1. 
*/


let str = prettyb(1024 * 1024, true);
  //str = "1Mb/s"

    str = prettyb(123456789, {nospace: true}) // prettyb(123456789, true, true);
  //str = "117.7M"

    str = prettyb(123456789, {one: true}) // prettyb(123456789, false, true);
  //str = "117.7 M"

    str = prettyb(123456789, {one: true, places: 2}) // prettyb(123456789, false, true, 2);
  //str = "117.74 M"

```
