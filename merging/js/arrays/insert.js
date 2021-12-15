/**
  this program illustrates inserting at a given index and
 */
// [1,2,3,4,5]
// index 3 insert 9
//

function insertAt(list, index, element) {
  let sizeof = list.length;

  for (i = sizeof; i > index; i--) {
    list[i] = list[i - 1];
  }
  list[index] = element;
  return list;
}

console.log(insertAt([1, 2, 4, 5], 2, 3));
