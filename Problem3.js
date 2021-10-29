// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const num = 600851475143;

// Function to determine if given number is prime or not
const isPrime = (number) => {
  if (number < 2) // 0 and 1 are not prime
    return false;

  if (number === 2) // 2 is prime
    return true;
  
  if (number % 2 === 0) //even numbers are not prime
    return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) // number divides evenly with something, so not prime
      return false;
  }

  return true; // if we get here, the number must be prime
}

let biggestPrime = 0;
let i = 3; //Prime factor candidate

while (i < Math.sqrt(num)) {  // Only need to run up to the square root of the number being checked
  if (num % i === 0 && isPrime(i)) // Candidate is a factor of number and is a prime number
    biggestPrime = i;

  i += 2;  // No reason to check even numbers, so increment by 2
}

console.log("The biggest prime is:", biggestPrime);