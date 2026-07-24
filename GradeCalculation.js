//**********  Home Assignment- Grade Calculation  **********
function calculateGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  }

  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}

let score = 60;
console.log(`Score: ${score}, Grade: ${calculateGrade(score)}`);
