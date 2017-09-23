const { equal } = require('assert');
const computeParity = require('./solution');

equal(computeParity(0), 0);
equal(computeParity(1), 1);
equal(computeParity(2), 1);
equal(computeParity(3), 0);
equal(computeParity(4), 1);
equal(computeParity(5), 0);
equal(computeParity(6), 0);
