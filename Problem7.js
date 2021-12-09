/*************
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
 *************/

const isPrime = (n) => {
  if (n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  let upperLimit = Math.floor(Math.sqrt(n)); //The largest possible factor of a number x is sqrt(x). No reason to check numbers above this limit.
  let f = 5;
  while (f <= upperLimit) {
    if (n % f === 0) return false;
    if (n % (f+2) === 0) return false;
    f += 6;
  }
  return true;

}

let limit = 10001;
let count = 1;
let num = 1;

while (count !== limit){
  num +=2;
  if (isPrime(num)) count++;
}

console.log(num, "is prime number", limit);