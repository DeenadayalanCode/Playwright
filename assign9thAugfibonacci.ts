//******************Fibonacci ****************/

function fibonacci(n: number): number[] {
// Stores the generated Fibonacci numbers.
  
  const series : number[] =[];

// First two values used to generate the sequence.
  let [first,second] = [0,1];

// Generate the requested number of values.
  for (let i = 0 ; i <= n; i++) {
// Add the current value to the result.
    series.push(first);
// Move to the next two values:
// first becomes second, and second becomes their sum.
    [first, second] = [second, first + second]
  }
  return series;
}
console.log(fibonacci(15));