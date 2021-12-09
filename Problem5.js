// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let numbers = [19, 17, 13, 11, 7, 5, 3, 2, 16, 9, 4]; // Start with primes for efficiency. Only need perfect squares for composites.

let n = 1;

while (numbers.every((element) => n % element === 0) === false) n++;

console.log(n);
