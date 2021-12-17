
#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;
int longest_substring_with_k_distinct(const string str, int k)
{
  int len = str.size();
  int windowStart = 0;
  int maxLength = 0;
  unordered_map<char, int> charCount;
  for (int windowend = 0; windowend < len; windowend++)
  {
    char rightChar = str[windowend];
    charCount[rightChar]++;
    while ((int)charCount.size() > k)
    {
      char leftChar = str[windowStart];
      charCount[leftChar]--;
      if (charCount[leftChar] == 0)
      {
        charCount.erase(leftChar);
      }
      windowStart++;
    }
    maxLength = max(maxLength, windowend - windowStart + 1);
  }

  return maxLength;
}

int main()
{
  string str = "araaci";
  int result = longest_substring_with_k_distinct(str, 2);
  cout << result << endl;
  return 0;
}
