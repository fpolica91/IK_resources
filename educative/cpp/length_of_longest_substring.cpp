#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int length_of_longest_substring(const string str, int k)
{
  unordered_map<char, int> charsFrequency;
  int start = 0;
  int maxlen = 0;
  int mostfrequent = 0;
  for (int end = 0; end < str.size(); end++)
  {
    char rightchar = str[end];
    charsFrequency[rightchar] += 1;
    mostfrequent = max(mostfrequent, charsFrequency[rightchar]);
    if ((end - start + 1 - mostfrequent) > k)
    {
      char leftchar = str[start];
      charsFrequency[start] -= 1;
      start += 1;
    }
    maxlen = max(maxlen, end - start + 1);
  }
  return maxlen;
}

int main()
{
  string str = "aabccbb";
  int result = length_of_longest_substring(str, 2);
  cout << result << endl;
}