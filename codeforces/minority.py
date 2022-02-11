def minority(s):
    return min((len(s) - 1) // 2, s.count('0'), s.count('1'))
  


print(minority("1010101010111"))

