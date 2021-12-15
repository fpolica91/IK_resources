function reverse(list) {
  let i = 0;
  let j = list.length - 1;
  while (i < j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
    i++;
    j--;
  }
  return list;
}

console.log(reverse(["a", "b", "c"]));
