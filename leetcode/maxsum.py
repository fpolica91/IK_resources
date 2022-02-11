def maxScore(cardPoints, k):
    size = len(cardPoints)
    prefix = [None] * size
    suffix = [None] * size
    sum = 0
    maxvalue = 0
    prefix[0] = cardPoints[0]
    
    for i in range(1,size):
        prefix[i] = prefix[i - 1] + cardPoints[i]
    
    suffix[size -1] = cardPoints[size -1]
    
    for j in range(size - 2, -1, -1):
        suffix[j] = suffix[j +1] + cardPoints[j]
    
    

    for i in range(0, k):
        index = (k - (i + 1))
        if size - index == size:
            sum = prefix[i]  
        else:
            sum = prefix[i] + suffix[size - index]
        maxvalue = max(maxvalue, sum)
        
    counter = 1
    for j in range(size -1, k,-1):
        index = k - (counter) - 1
        counter +=1
        if index >= 0:
            sum = suffix[j] + prefix[index]
        else:
            sum = suffix[j]
        maxvalue = max(maxvalue, sum)
        
        
    
    return maxvalue
    