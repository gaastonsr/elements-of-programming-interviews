function swapBits(number, i, j) {
  const ithValue = number >>> i & 1;
  const jthValue = number >>> j & 1;

  if (ithValue === jthValue)
    return number;

  const bitMask = (1 << i) | (1 << j);
  return number ^ bitMask;
}

module.exports = swapBits;
