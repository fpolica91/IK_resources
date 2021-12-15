function insertionSort(array) {
  const sizeofList = array.length;
  for (let i = 1; i < sizeofList; i++) {
    let j = i - 1;
    let curr = array[i];
    while (j >= 0 && curr < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    // we find the spot to insert when here
    array[j + 1] = curr;
  }
  return array;
}

console.log(insertionSort([9, 1, 5, 2]));
