//  **********  Home Assignment- ODD or Even  **********
function isOddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}

let number = 7;
console.log(`${number} is ${isOddOrEven(number)}`);