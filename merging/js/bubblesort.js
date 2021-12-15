function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let flag = 0;
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag === 0) break;
  }
  return arr;
}

// console.log(bubbleSort([10, 3, 9, 1, 7, 6, 8, 0, 4, 5, 2]));
console.log(bubbleSort([2, 9, 1]));
