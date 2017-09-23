def reverseBits(n):
  head = 15
  tail = 0

  while head > tail:
    headBit = (n >> head) & 1
    tailBit = (n >> tail) & 1

    if headBit != tailBit:
      bitMask = (1 << head) | (1 << tail)
      n ^= bitMask

    head -= 1
    tail += 1

  return n
