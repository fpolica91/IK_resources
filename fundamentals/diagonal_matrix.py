# in diagonal matrices, i will be equal to j where elem != 0
class Struct:
    def __init__(self, n):
      self.list = ['x' for i in range(10)]
      self.n = n


def set(struct, i, j, elem):
  if (i == j):
    struct.list[i -1] = elem
   


def display(matrix):
  for i in range(matrix.n):
    for j in range(matrix.n):
      if i == j:
        print(matrix.list[i], end=" ")
      else:
        print("0", end=" ")
    print()












def main():
  m = Struct(n=4)
  set(m, 1,1, 5),set(m, 2,2,8), set(m, 3,3,7), set(m, 4,4,9)
  display(m)

main()
