def largest():
    i = 100
    xxl = 0
    prod = 0
    for i in range(100,998):
      current = i
      for j in range(i + 1, 998):
        prod = current * j
        rev = str(prod)[::-1]
        if(str(prod) == rev):
            xxl = max(xxl, prod)
    return xxl



print(largest())