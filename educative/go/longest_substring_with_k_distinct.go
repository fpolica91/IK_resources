package main
import "fmt"

// find the longest substring with only k different characters
func longest_substring_with_k_distinct(str string, k int) int {
	var print = fmt.Println
	print("starting algorithm")
	var maxlen = 0
	var start = 0;
	var frequencyChars = make(map[string]int);
	for end, c := range str{
		var rightchar = string(c);
		frequencyChars[rightchar] += 1;
		for len(frequencyChars) > k{
			var leftchar = string(str[start]);
			frequencyChars[leftchar] -= 1;
			if frequencyChars[leftchar] == 0{
				delete(frequencyChars, leftchar);
			}
			start += 1;
		}
		maxlen = max(maxlen, end - start + 1);
	}
	return maxlen
}

func max(n, m int) int {
	if n > m {
			return n
	}
	return m
}


func main(){
	fmt.Println(longest_substring_with_k_distinct("araaci", 2))
	fmt.Println(longest_substring_with_k_distinct("araaci", 1))
	fmt.Println(longest_substring_with_k_distinct("cbbebi", 3))
}