def mult(arr):
    n = len(arr)
    prefix = [None] * n
    answer = [None] * n
    
    prefix[0] = arr[0]
    
    for i in range(1,n):
        prefix[i] = prefix[i -1] * arr[i]
    
    suffix = [None] * n
    suffix[n -1] = arr[n-1]
    
    for j in range(n - 2, -1 , -1):
        suffix[j] = suffix[j + 1] * arr[j]

    
    answer[0] = suffix[1]
    answer[n -1] = prefix[n -2]
    
    for i in range(1,n - 1):
        answer[i] = prefix[i -1] * suffix[i + 1]