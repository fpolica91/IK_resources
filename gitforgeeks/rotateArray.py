def rotateArr(self,A,D,N):
  for _ in range(0, D):
      temp = A[0]
      for j in range(0, len(A) - 1):
          A[j] = A[j +1]
      A[len(A) - 1] = temp


def rotateArr(self,A,D,N):
    B = A.copy()
    for i in range(len(A)):
        position = (i+(N -D)) % N
        A[position] = B[i]
    return A
