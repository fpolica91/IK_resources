package main
import "fmt"

// smallest sum of subarray that adds up to s
func smallest_subarray_with_given_sum(arr []int, s int) int{
	var print = fmt.Println
	print("starting algorithm")
	var start = 0
	var sum = 0
	var minlen = 1000000
	for end := 0; end < len(arr); end++{
		sum += arr[end]
		for sum >= s{
			minlen = min(minlen, (end - start + 1))
			sum -= arr[start]
			start += 1
		}
	}
	return minlen
}


func min(n, m int) int {
	if n < m {
			return n
	}
	return m
}


func main(){
	list := []int{2, 1, 5, 2, 3, 2}
	var result = smallest_subarray_with_given_sum(list, 7)
	fmt.Println(result)
}