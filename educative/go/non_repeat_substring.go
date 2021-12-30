package main
import "fmt"


func non_repeat_substring(str string) int{
	var print = fmt.Println
	print("starting algorithm")
	var start = 0;
	maxlen := 0;
	var char_index = make(map[string]int);
	for end, c:= range str{
		var _ = end;
		var rightchar = string(c);
		if item, ok := char_index[rightchar]; ok{
			start = max(start, item + 1);
		}
		char_index[rightchar] = end;
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
	result := non_repeat_substring("aabccbb")
	fmt.Println(result)
}
