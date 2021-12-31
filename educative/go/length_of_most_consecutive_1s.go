package main
import "fmt"


// return the longest length of consecutive 1s after k substitutions
func length_of_most_consecutive_1s(arr []int, k int) int{
	var print = fmt.Println
	print("starting algorithm")
	var start = 0
	var onesCount = 0;
	var maxlen = 0;
	for end := 0; end < len(arr); end++{
		if arr[end] ==1 {
			onesCount += 1
		}
		if (end - start + 1 - onesCount) > k{
			if arr[start] == 1{
				onesCount -= 1
			}
			start += 1
		}
		maxlen = max(maxlen, end - start + 1)
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
	list := []int{0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1}
	fmt.Println(length_of_most_consecutive_1s(list, 2))
	fmt.Println(length_of_most_consecutive_1s([]int{0,1,0,0,1,1,0,1,1,0,0,1,1}, 3))

}