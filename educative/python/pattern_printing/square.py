def print_square(n):
    for _ in range(n):
        for _ in range(n):
            print("* ", end="")
        print("\r")


print_square(5)
