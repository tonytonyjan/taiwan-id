const MAP = {
  A: [1, 0], B: [1, 1], C: [1, 2], D: [1, 3], E: [1, 4], F: [1, 5], G: [1, 6], H: [1, 7], I: [3, 4],
  J: [1, 8], K: [1, 9], L: [2, 0], M: [2, 1], N: [2, 2], O: [3, 5], P: [2, 3], Q: [2, 4], R: [2, 5],
  S: [2, 6], T: [2, 7], U: [2, 8], V: [2, 9], W: [3, 2], X: [3, 0], Y: [3, 1], Z: [3, 3]
}, MULTIPLIER = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];

const REGEX = /^[A-Z]\d{9}$/;

(function(exports){
  exports.check = function (id) {
    if(!id.match(REGEX)) return false;
    let sum = MAP[id[0]][0] * MULTIPLIER[0] +
      MAP[id[0]][1] * MULTIPLIER[1] +
      id[1] * MULTIPLIER[2] +
      id[2] * MULTIPLIER[3] +
      id[3] * MULTIPLIER[4] +
      id[4] * MULTIPLIER[5] +
      id[5] * MULTIPLIER[6] +
      id[6] * MULTIPLIER[7] +
      id[7] * MULTIPLIER[8] +
      id[8] * MULTIPLIER[9] +
      id[9] * MULTIPLIER[10];
    return sum % 10 == 0;
  }
  exports.generate = function () {
    let keys = Object.keys(MAP),
        key = keys[Math.random() * keys.length << 0],
        id = key + (Math.random() * 20000000 + 10000000 << 0);
    let sum = MAP[key][0] * MULTIPLIER[0] +
      MAP[key][1] * MULTIPLIER[1] +
      id[1] * MULTIPLIER[2] +
      id[2] * MULTIPLIER[3] +
      id[3] * MULTIPLIER[4] +
      id[4] * MULTIPLIER[5] +
      id[5] * MULTIPLIER[6] +
      id[6] * MULTIPLIER[7] +
      id[7] * MULTIPLIER[8] +
      id[8] * MULTIPLIER[9];
    return id + ((10 - sum % 10) % 10);
  }
})(typeof exports === 'undefined' ? this.TaiwanIdChecker = {} : exports);
