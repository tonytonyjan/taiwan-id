const Benchmark = require('benchmark');
const taiwanid = require('taiwanid');
const TaiwanId = require('../index');
const listeners = require('./listeners');

const SAMPLE_ID = 'A123456789';
const suite = new Benchmark.Suite;

suite
  .add('TaiwanId#generate', function() {
    TaiwanId.generate();
  })
  .add('taiwanid#generate', function() {
    taiwanid.generate();
  })
  .on('cycle', listeners.cycle)
  .on('complete', listeners.complete)
  .run({ 'async': true });
