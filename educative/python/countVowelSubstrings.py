def countVowelSubstrings(word):
    vows = "aeiou"
    map = set()
    count = 0
    for i in range(0, len(word)):
        map.clear()
        for j in range(i, len(word)):
            char = word[j]
            if char in vows:
                map.add(char)
                if len(map) == 5:
                    count += 1
            else:
                break

    return count


# optimized solution
class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        return self.countAtMostVowels(word, 5) - self.countAtMostVowels(word, 4)

    def countAtMostVowels(self, word: str, k: int) -> int:
        count = 0
        j = 0
        vowels = "aeiou"
        charmap = {}

        for i in range(len(word)):
            char = word[i]
            if char not in vowels:
                charmap = {}
                j = i + 1
                continue

            if word[i] not in charmap:
                charmap[word[i]] = 0
            charmap[word[i]] += 1

            while len(charmap) > k:
                leftchar = word[j]
                charmap[leftchar] -= 1
                if charmap[leftchar] == 0:
                    del charmap[leftchar]
                j += 1

            count += i - j + 1

        return count
