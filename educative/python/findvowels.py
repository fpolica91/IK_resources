def countVowelSubstrings(word):
    start = 0
    matches = 0
    count = 0
    str = "aeiou"

    charmap = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1}

    for end in range(len(word)):
        char = word[end]
        if char in charmap:
            charmap[char] -= 1
            if charmap[char] == 0:
                matches += 1

        if matches == len(charmap):
            count += 1

        while end >= len(charmap):
            leftchar = word[start]
            start += 1
            if leftchar in charmap:
                if charmap[leftchar] == 0:
                    matches -= 1
                charmap[leftchar] += 1
    return count
