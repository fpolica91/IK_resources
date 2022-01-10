def right_descending(n):
    for i in range(n):
        for j in range(i):
            print(" ", end="")
        for j in range(i, n):
            print(n - i, end="")
        print()


right_descending(5)
