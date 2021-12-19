use std::cmp;
use std::collections::HashMap;
use std::collections::HashSet;

fn main() {
    println!("Hello, world!");
    let mut x = [2, 1, 5, 1, 3, 2];
    let mut y = [2, 3, 4, 1, 5];

    let mut z = [2, 1, 5, 2, 3, 2];
    let mut i = [2, 1, 5, 2, 8];
    let mut d = [3, 4, 1, 1, 6];
    let result = max_sum_subarray(&mut x, 3);
    let res2 = max_sum_subarray(&mut y, 2);
    let word = "araaci";
    let smallest = smallest_subarray_with_given_sum(&mut z, 7);
    let smallest2 = smallest_subarray_with_given_sum(&mut i, 7);
    let smallest3 = smallest_subarray_with_given_sum(&mut d, 8);
    // println!("the result {}", result);
    // println!("the res2 {}", res2);
    println!("the shortest suba-rray >=  to 7 is of length {}", smallest);
    println!("the shortest suba-rray >=  to 7 is of length {}", smallest2);
    println!("the shortest suba-rray >=  to 8 is of length {}", smallest3);
}

fn smallest_subarray_with_given_sum(arr: &mut [i32], s: i32) -> i32 {
    let mut sum = 0;
    let mut smallestLen = i32::max_value();
    let mut windowstart = 0;
    for (i, num) in arr.iter().enumerate() {
        sum += num;
        while sum >= s {
            let mut size = i - windowstart + 1;
            smallestLen = cmp::min(smallestLen, size as i32);
            sum -= arr[windowstart];
            windowstart += 1;
        }
    }
    return smallestLen;
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
