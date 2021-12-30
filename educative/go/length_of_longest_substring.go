package main
import "fmt"




func length_of_longest_substring(str string, k int) int{
	var print = fmt.Println
	print("starting algorithm")
	var start = 0;
	maxlen := 0;
	var mostfrequent = 0;
	var map_char = make(map[string]int);
	
	for end, c := range str{
		var rightchar = string(c);
		map_char[rightchar] += 1;
		mostfrequent = max(mostfrequent, map_char[rightchar]);
		if (end - start + 1 - mostfrequent) > k{
			var leftchar = string(str[start]);
			map_char[leftchar] -= 1;
			start += 1;
		}
		maxlen = max(maxlen, end - start + 1);
	}

	return maxlen;
}

func max(n, m int) int {
	if n > m {
			return n
	}
	return m
}

func main(){
	result := length_of_longest_substring("aabccbb", 2)
	fmt.Println(result)
}



