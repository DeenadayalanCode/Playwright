//  **********  Home Assignment- NumberType  **********
function checkNumberType(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Neutral";
  }
}

let number = -5;
console.log(`${number} is ${checkNumberType(number)}`);