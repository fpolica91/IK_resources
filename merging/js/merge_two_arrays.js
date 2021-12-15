/***
 * NOTE
 * given two ordered lists merge them
 *  A =  [1,2,3,4,5]
 * B = [6,7,8]
 * C = []
 * i, j ,k refer the to indices of the arrays respectively
 * i = 0; j=0; k=0
 * compare A[i] > B[j] ? c[k] = a[i] && k++
 * else a[k] = B[j] && k++
 * this merge proces should repeat as long as i < sizeof A and j < sizeof B
 */

 const sum = (n) => (n * (n+1)) / 2;

function mergeArrays(array1, array2, result) {
  const sizeofParam1 = array1.length;
  const sizeofParam2 = array2.length;
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < sizeofParam1 && j < sizeofParam2) {
    if (array1[i] < array2[j]) {
      result[k] = array1[i];
      k++;
      i++;
    } else {
      result[k] = array2[j];
      k++;
      j++;
    }
  }

  // we copy from the index that's out of range of while loop
  for (; i < sizeofParam1; i++) {
    result[k] = array1[i];
    k++;
  }

  for (; j < sizeofParam2; j++) {
    result[k] = array2[j];
    k++;
  }

  return result;
}

console.log(mergeArrays([1, 2, 3, 4, 6], [5, 7, 8], []));
