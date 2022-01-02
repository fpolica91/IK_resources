#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

string minwindow(const string str, const string pattern)
{
  unordered_map<char, int> charFrequencyMap;
  int minlen = str.length();
  int matches = 0;
  int start = 0;
  int startindex = 0;

  for (auto chr : pattern)
  {
    charFrequencyMap[chr]++;
  }
  for (int end = 0; end < str.length(); end++)
  {
    char rightchar = str[end];
    if (charFrequencyMap.find(rightchar) != charFrequencyMap.end())
    {
      charFrequencyMap[rightchar]--;
      if (charFrequencyMap[rightchar] >= 0)
      {
        matches++;
      }
    }
    while (matches == pattern.length())
    {
      if (minlen > end - start + 1)
      {
        minlen = end - start + 1;
        startindex = start;
      }
      char leftchar = str[start];
      start++;
      if (charFrequencyMap.find(leftchar) != charFrequencyMap.end())
      {
        if (charFrequencyMap[leftchar] == 0)
        {
          matches--;
        }
        charFrequencyMap[leftchar]++;
      }
    }
  }

  if (minlen > str.length())
  {
    return "";
  }

  return str.substr(startindex, minlen);
}

int main()
{

  cout << minwindow("aabdec", "abc") << endl;
  cout << minwindow("abdbca", "abc") << endl;
  return 0;
}
