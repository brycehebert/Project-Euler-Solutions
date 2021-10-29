// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (number) => {
  let reverse = Number([...number.toString()].reverse().join(""));

  return number === reverse;
};

let largest = 0,
  num1 = 0,
  num2 = 0;

for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    if (i * j > largest && isPalindrome(i * j)) {
      largest = i * j;
      num1 = i;
      num2 = j;
    }
  }
}

console.log("Largest palindromic product is:", largest);
console.log(`Numbers are ${num1} and ${num2}`);
