def descending_left_triangle(n):
    for i in range(n):
        for j in range(i, n):
            print(n - i, end="")
        print()


descending_left_triangle(5)
