// this represents brute force approach
/**
 * 
 * @param {*} k size of subarray
 * @param {*} list the list that will hold the subsarrays
 *
 */
function find_averages_of_subarrays(k, list) {
  // this will store
  let results = []
  let len = list.length
  for(let i = 0; i < k ; i++){
    // sum will reset on each loop
    let sum = 0.0
    for(let j = i; j < i + k; j++){
      /***
        1st j = 0, i + k = (0+ 5) -> range is  0 to 5
        2nd pass j = 1 , i + k = (1 + 5) -> range is 1 - 6
        3rd pass j = 2 , i + k = (2 + 5) -> range is 2 - 7
      */
      sum += list[j];
    }
    results.push(sum/k);
  }
  return results
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

// using the window pattern 
/**
 * [1,3,6,7,8] , k = 3
   1 -> 1 + 3 + 6 = 10
   2 -> (10 - 1) + 7 = 16
   3 -> (16 - 7) + 8 = 17
 */

function find_averages_subarays(arr, k){
    let currentSlot = 0
    let results = []
    let sum = 0.0
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
      if(i >= k -1){
        results.push(sum / k);
        sum -= arr[currentSlot];
        currentSlot++;
      }
      return results
    }
}
const res = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${res}`);
