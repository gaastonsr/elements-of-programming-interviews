function computeParity(number) {
  let result = 0;

  while (number > 0) {
    result = result ^ 1;
    number = number & (number - 1);
  }

  return result;
}

module.exports = computeParity;
