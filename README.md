# Taiwan ID [![Build Status](https://travis-ci.org/tonytonyjan/taiwan-id.svg?branch=master)](https://travis-ci.org/tonytonyjan/taiwan-id)

## Installation

```
npm install taiwan-id
```

## Usage

```js
var TaiwanId = require('taiwan-id');
TaiwanId.check('A123456789'); // true
var randomId = TaiwanId.generate();
TaiwanId.check(randomId); // true
```

## Benchmark

Benchmark files is located at [`bench` directory](bench) and compared with [taiwanid](https://github.com/yutin1987/taiwanid).

```
$ date
Sun Jun 18 19:45:48 CST 2017

$ env SUIT=check npm run bench
TaiwanId#check x 6,016,230 ops/sec ±1.49% (88 runs sampled)
taiwanid#verify x 1,315,703 ops/sec ±1.06% (89 runs sampled)
TaiwanId#check is faster than taiwanid#verify by 4.5726347909882294 times.

$ env SUIT=generate npm run bench
TaiwanId#generate x 2,544,113 ops/sec ±3.25% (82 runs sampled)
taiwanid#generate x 358,304 ops/sec ±0.88% (86 runs sampled)
TaiwanId#generate is faster than taiwanid#generate by 7.100428146111385 times.
```
