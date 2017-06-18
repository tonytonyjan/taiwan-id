const Benchmark = require('benchmark');
const taiwanid = require('taiwanid');
const TaiwanId = require('../index');
const listeners = require('./listeners');

const SAMPLE_ID = 'A123456789';
const suite = new Benchmark.Suite;

suite
  .add('TaiwanId#check', function() {
    TaiwanId.check(SAMPLE_ID);
  })
  .add('taiwanid#verify', function() {
    taiwanid.verify(SAMPLE_ID);
  })
  .on('cycle', listeners.cycle)
  .on('complete', listeners.complete)
  .run({ 'async': true });
