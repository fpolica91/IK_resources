import math

def prime(num):
    maxPrime = -1
    
    while num % 2 ==0:
        maxPrime =2
        num >>= 1
        
    for i in range(3, int(math.sqrt(num)) + 1, 2): 
        while num % i == 0: 
            maxPrime = i 
            num //= i
    return num if num > 2 else maxPrime

        
    
    
    

    
   
        
        
    

print(prime(600851475143))
    