/****************
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 ****************/

const sumOfInts = (limit) => {
  //sum of consecutive integers = n(n + 1)/2
  return (limit * (limit + 1)) / 2;
};

sumOfSquares = (limit) => {
  //sum of consecutive squares = (2n + 1)(n + 1)n/6
  return ((2 * limit + 1) * (limit + 1) * limit) / 6;
};

let n = 1000;

let result = sumOfInts(n) ** 2 - sumOfSquares(n);

console.log(result);
