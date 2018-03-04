// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square
// of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers
// and the square of the sum.

let findSumofSquaresAndSquareOfSum = () => {

  let arr = []
  let sumOfSquares = 0

  for (let i = 1; i <= 100; i++) {
    sumOfSquares += Math.pow(i, 2)
    arr.push(i)
  }

  let squareOfSums = Math.pow(arr.reduce((acc, cv) => acc+cv), 2)

  return squareOfSums -sumOfSquares

}

console.log(findSumofSquaresAndSquareOfSum())
