fn main() {
    println!("Hello, world!");
    let mut x = [2, 1, 5, 1, 3, 2];
    let mut y = [2, 3, 4, 1, 5];
    let result = max_sum_subarray(&mut x, 3);
    let res2 = max_sum_subarray(&mut y, 2);
    println!("the result {}", result);
    println!("the res2 {}", res2);
}

fn max_sum_subarray(arr: &mut [i32], k: i32) -> i32 {
    let mut sum = 0;
    let mut windowstart = 0;
    let mut max = 0;
    let margin = k - 1;
    for (i, num) in arr.iter().enumerate() {
        sum += num;
        if i >= margin as usize {
            if sum > max {
                max = sum;
            }
            sum -= arr[windowstart];
            windowstart += 1;
        }
    }
    return max;
}
