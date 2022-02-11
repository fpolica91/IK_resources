function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = arr1.length;
  let f = arr2.length;

  const results = [];

  // return;
  while (i < k && j < f) {
    const elem1 = arr1[i];
    const elem2 = arr2[j];
    if (elem1 < elem2) {
      results.push(elem1);
      i++;
    } else {
      results.push(elem2);
      j++;
    }
  }

  for (; i < k; i++) {
    results.push(arr1[i]);
  }
  for (; j < f; j++) {
    results.push(arr2[j]);
  }

  return results;
}

console.log(mergeArrays([1, 3, 4, 5], [2, 6, 7, 8]));
