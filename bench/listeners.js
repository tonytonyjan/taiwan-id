exports.cycle = function(event) {
  console.log(String(event.target));
}

exports.complete = function () {
  let fastest = this.filter('fastest')[0];
  let slowest = this.filter('slowest')[0];
  console.log(`${fastest.name} is faster than ${slowest.name} by ${fastest.hz / slowest.hz} times.`);
}
