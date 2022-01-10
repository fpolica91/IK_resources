def right_triangle(n):
    for i in range(n + 1):
        for j in range(i, n):
            print(" ", end="")
        for j in range(i):
            print(i, end="")
        print()


right_triangle(5)
