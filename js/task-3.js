function filterArray(numbers, value) {
  const result = [];
  for (const n of numbers) n > value && result.push(n);
  return result;
}

// MAKE IT EASY
// function filterArray(numbers, value) {
//   return numbers.filter(n => n > value);
// }

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]