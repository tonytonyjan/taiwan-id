const MAP = {
  A: [1, 0], B: [1, 1], C: [1, 2], D: [1, 3], E: [1, 4], F: [1, 5], G: [1, 6], H: [1, 7], I: [3, 4],
  J: [1, 8], K: [1, 9], L: [2, 0], M: [2, 1], N: [2, 2], O: [3, 5], P: [2, 3], Q: [2, 4], R: [2, 5],
  S: [2, 6], T: [2, 7], U: [2, 8], V: [2, 9], W: [3, 2], X: [3, 0], Y: [3, 1], Z: [3, 3]
}, MULTIPLIER = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];

const REGEX = /^[A-Z]\d{9}$/;

(function(exports){
  exports.check = function (id) {
    if(!id.match(REGEX)) return false;
    numbers = MAP[id[0]].concat(id.split('').slice(1, 10).map(c => +c))
    let sum = 0, i = 11;
    while(i--) sum += numbers[i] * MULTIPLIER[i];
    return sum % 10 == 0;
  }
  exports.generate = function () {
    let keys = Object.keys(MAP),
        key = keys[Math.random() * keys.length << 0],
        numbers = MAP[key].concat(('' + (Math.random() * 20000000 + 10000000 << 0))
                          .split('').map(c => +c));
    let sum = 0, i = 10;
    while(i--) sum += numbers[i] * MULTIPLIER[i];
    return key + numbers.concat((10 - sum % 10) % 10).slice(2,11).join('');
  }
})(typeof exports === 'undefined' ? this.TaiwanIdChecker = {} : exports);
