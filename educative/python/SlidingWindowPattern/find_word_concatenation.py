


def find_word_concatenation(str, arr):
  if len(arr) == 0 or len(arr[0]) ==0:
    return []
  charmap = {}
  result = []
  sizeofword = len(arr[0])
  sizeoflist = len(arr)

  # construct the map withe the words and how many times they occur
  # ["cap", "map"] = {'cap': 1, 'map': 1}
  for item in arr:
    if item not in charmap:
      charmap[item] = 0
    charmap[item] +=1
  #end of construct map

  # cmapcapmap anything after index 4 would be to short to contain our concatonated word
  for i in range((len(str) - sizeoflist * sizeofword) + 1):
    seen = {}
    for j in range (0, sizeoflist):
      wordindex = i + j * sizeofword
      word = str[wordindex: wordindex + sizeofword]
    # the word is not part of the concat substring
      if word not in charmap:
        break

      if word not in seen:
        seen[word] = 0
      seen[word] +=1
    

      if seen[word] >  charmap.get(word, 0):
        break
    
      if j + 1 == sizeoflist:
        result.append(i)
  
  return result
    
      
      

  
  

  





print(find_word_concatenation("cmapcapmap", ["cap", "map"]))

# print(find_word_concatenation("barfoothefoobarman", ["foo", "bar"]))
