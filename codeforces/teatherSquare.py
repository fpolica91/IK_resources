
def teatherSquare(m, n ,a):
  length = m / a if  m % a == 0 else (m // a) + 1
  width = n / a if  n % a == 0 else (n // a) + 1
  return length * width


print(teatherSquare(20,20,4))