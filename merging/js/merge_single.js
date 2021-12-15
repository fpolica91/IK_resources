function mergeSingle(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let temp = [];
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }
  for (; i <= mid; i++) {
    temp[k++] = arr[i];
  }
  for (; j <= high; j++) {
    temp[k++] = arr[j];
  }
  return temp;
}
let x = [1, 4, 7, 2, 5, 6];
const high = x.length - 1;
const mid = ~~(high / 2);

console.log(mergeSingle(x, 0, mid, high));

function mergeList(arr, low, mid, high) {
  let i = 0;
  let j = mid + 1;
  let k = low;
  let temp = [];

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else temp[k++] = arr[j++];
  }
  for (; i <= mid; i++) {
    temp[k++] = arr[i];
  }
  for (; j <= high; j++) {
    temp[k++] = arr[j];
  }
  return temp;
}

console.log(mergeList(x, 0, mid, high));
