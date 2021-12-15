function selectionSort(array1) {
  const len = array1.length;
  for (let i = 0; i < len; i++) {
    let j = i;
    let k = i;
    for (j; j < len; j++) {
      if (array1[k] > array1[j]) {
        k = j;
      }
    }
    let temp = array1[i];
    array1[i] = array1[k];
    array1[k] = temp;
  }
  return array1;
}

console.log(selectionSort([7, 4, 1, 5, 2, 3, 6]));
