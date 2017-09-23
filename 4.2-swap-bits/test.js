const { equal } = require('assert');
const swapBits = require('./solution');

equal(swapBits(1, 1, 0), 2);
equal(swapBits(2, 1, 0), 1);
equal(swapBits(3, 1, 0), 3);
equal(swapBits(4, 1, 0), 4);
equal(swapBits(5, 1, 0), 6);
