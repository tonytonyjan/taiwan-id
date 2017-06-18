# Taiwan ID


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
