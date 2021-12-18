function fruits_into_baskets(fruits) {
  let maxLength = 0;
  const fruiTypes = {};
  let startwindow = 0;
  for (let end = 0; end < fruits.length; end++) {
    leftFruit = fruits[end];
    if (!(leftFruit in fruiTypes)) {
      fruiTypes[leftFruit] = 0;
    }
    fruiTypes[leftFruit]++;
    while (Object.keys(fruiTypes).length > 2) {
      const rightFruit = fruits[startwindow];
      fruiTypes[rightFruit]--;
      if (fruiTypes[rightFruit] === 0) delete fruiTypes[rightFruit];
      startwindow++;
    }
    maxLength = Math.max(maxLength, end - startwindow + 1);
  }

  return maxLength;
}

console.log(fruits_into_baskets(["A", "B", "C", "A", "C"]));
console.log(fruits_into_baskets(["A", "B", "C", "B", "B", "C"]));
