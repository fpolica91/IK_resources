def triangle(n):
    for i in range(n):
        # in other words i = 0; j < i; j ++
        for j in range(n - i):
            print(" * ", end="")
        print("\r")


triangle(5)
