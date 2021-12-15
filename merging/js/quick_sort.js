function partition(list, low, high) {
  let pivot = list[low];
  let i = low;
  let j = high;
  do {
    // this while loop should stop when list[i] > pivot
    do {
      i++;
    } while (pivot >= list[i]);

    do {
      j--;
    } while (list[j] > pivot);

    if (i < j) {
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
  } while (i < j);
  let temp = list[low];
  list[low] = list[j];
  list[j] = temp;

  return j;
}

function quickSort(list, low, high) {
  let j;
  if (low < high) {
    j = partition(list, low, high);
    quickSort(list, low, j);
    quickSort(list, j + 1, high);
  }
  return list;
}

console.log(quickSort([7, 1, 9, 3, 2], 0, 5));
