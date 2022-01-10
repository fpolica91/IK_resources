def left_triangle(n):
    for i in range(n + 1):
        for j in range(i):
            print(i, end="")
        print()


left_triangle(5)
