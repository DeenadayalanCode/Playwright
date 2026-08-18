//******************Factorial ****************/
function factorial(n: number): number {
  // Check for negative numbers
  if (n < 0) {
    throw new Error('Factorial cannot be calculated for a negative number.');
  }
  // Check for non-integer values
  if (!Number.isInteger(n)) {
    throw new Error('Factorial can only be calculated for an integer.');
  }

  let result: number = 1;

  // Multiply every integer from 2 through n
  for (let i: number = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Valid examples
console.log(`Factorial of 0 is ${factorial(0)}`);
console.log(`Factorial of 1 is ${factorial(1)}`);
console.log(`Factorial of 3 is ${factorial(3)}`);
console.log(`Factorial of 4 is ${factorial(4)}`);
console.log(`Factorial of 5 is ${factorial(5)}`);
console.log(`Factorial of 7 is ${factorial(7)}`);

// Invalid example
try {
  console.log(`Factorial of -3 is ${factorial(-3)}`);
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  }
}
