function _delete(list, index) {
  let sizeof = list.length;
  let i;

  // start at index and shift all other elements back
  for (i = index; i < sizeof - 1; i++) {
    list[i] = list[i + 1];
  }
  list.length = list.length - 1;
  return list;
}

console.log(_delete([1, 2, 3, 4, 5], 2));
