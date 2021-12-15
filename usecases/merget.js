/**
 * @abstract the goal of this algorithm is to merge elements and remove duplicates
 */

function mergeAndRemove(array1, array2) {
  const len1 = array1.length;
  const len2 = array2.length;
  const temp = [];

  const dictionary = {};

  for (let i = 0; i < len1; i++) {
    if (dictionary[array1[i]] !== 1) {
      dictionary[array1[i]] = 1;
      temp.push(array1[i]);
    }
  }
  for (let j = 0; j < len2; j++) {
    if (dictionary[array2[j]] !== 1) {
      dictionary[array2[j]] = 1;
      temp.push(array2[j]);
    }
  }

  return temp;

  //write merge algorithm
}

console.log(
  mergeAndRemove(
    ["shirt", "pants", "tie", "tie", "blazer"],
    ["headband", "tie", "shoes", "blazer", "pants"]
  )
);
