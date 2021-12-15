function merge(arr, low, mid, high ){
  let i = low;
  let j = mid + 1;
  let k = low;
  let temp =[]
  // console.log(arr, low, mid, high, temp)
  while(i <= mid && j <= high){
    if(arr[i] < arr[j]){
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  while(i <= mid){
    temp[k++] = arr[i++]
  }
  while(j <= high){
    temp[k++] = arr[j++]
  }

  for(let x = low; x <= high; x ++){
    arr[x] = temp[x]
  }
  return arr
}


function mergeSort(arr, size){
  let low;
  let mid;
  let high;
  let p
  let i;
  for(p = 2; p <= size; p *=2){
    for(i = 0; (i + p -1) < size; i+=p){
      low = i;
      high = i + p -1;
      mid = ~~((low + high) / 2)
      merge(arr, low, mid, high)
    }
  }
  let isLess = ~~(p/2)
  if(isLess < size){
   merge(arr, 0, isLess, size -1)
  }
  return arr
} 

let list = [1, 4, 7, 2, 5, 6];
const high = list.length - 1;
const mid = ~~(high / 2);

// console.log(merge(x, 0, mid, high, []))
console.log(mergeSort(list, list.length -1))