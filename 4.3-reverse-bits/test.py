import solution

tests = [
  {
    'value': int('0000000011111111', 2),
    'expected': int('1111111100000000', 2)
  },
  {
    'value': int('0000000000001111', 2),
    'expected': int('1111000000000000', 2)
  },
  {
    'value': int('0000000000110000', 2),
    'expected': int('0000110000000000', 2)
  }
]

for test in tests:
  assert solution.reverseBits(test['value']) == test['expected']
