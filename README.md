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
