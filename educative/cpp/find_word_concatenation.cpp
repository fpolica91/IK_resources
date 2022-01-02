#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

vector<int> find_word_concatenation(const string &str, const vector<string> &words)
{
  vector<int> resultIndices;
  int wordsCount = words.size();
  int wordLength = words[0].length();
  unordered_map<string, int> wordFrequencyMap;
  for (auto word : words)
  {
    wordFrequencyMap[word]++;
  }
  for (int i = 0; i < (str.length() - wordsCount * wordLength + 1); i++)
  {
    unordered_map<string, int> seen;
    for (int j = 0; j < words.size(); j++)
    {
      int wordindex = i + j * wordLength;
      string word = str.substr(wordindex, wordLength);
      if (wordFrequencyMap.find(word) != wordFrequencyMap.end())
      {
        break;
      }
      seen[word]++;
      if (seen[word] > wordFrequencyMap[word])
      {
        break;
      }
      if (j + 1 == wordsCount)
      {
        resultIndices.push_back(i);
      }
    }
  }

  return resultIndices;
}

int main()
{
  vector<int> chars = find_word_concatenation("catfoxcat", vector<string>{"cat", "fox"});
}