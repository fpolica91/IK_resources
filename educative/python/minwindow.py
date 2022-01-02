def minWindow(str, pattern) :
    charsFrequency = {}
    start = 0
    startindex = 0
    minlen = len(str)
    matches = 0
    for char in pattern:
        if char not in charsFrequency:
            charsFrequency[char] = 0
        charsFrequency[char] +=1
    
    for end in range(len(str)):
        rightchar = str[end]
        if rightchar in charsFrequency:
            charsFrequency[rightchar] -=1
            if charsFrequency[rightchar] == 0:
                matches+=1
        while matches == len(pattern):
            if(minlen > end - start +1):
                minlen = end - start  +1
                startindex = start
            leftchar = str[start]
            start +=1
            if leftchar in charsFrequency:
                if charsFrequency[leftchar] == 0:
                    matches -=1
                charsFrequency[leftchar] +=1
    if minlen > len(str):
        return ""
    
    return str[startindex: startindex + minlen]
                
                
            
            
                
            
        
            
            
            
print(minWindow("aabdec", "abc"))