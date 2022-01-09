def reverse_pyramid(n):
    for i in range(n):
        for j in range(i):
            print(" ", end="")
        for j in range(i, n):
            print(" *", end="")
        print()


reverse_pyramid(5)
