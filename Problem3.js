// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

let int = 600851475143

let findLargestPrimeFactor = x => {
  let factors = []

  for (let i = 1; i <= x; i++) {
    x % i === 0 ? factors.push(i) : null
  }

  let nonPrimeFactors = []
  let primeFactors = []

  factors.forEach( x => {
    for (let j = 2; j < x; j++) {
      if (x % j === 0) {
        nonPrimeFactors.push(x)
      } else if (j === x-1 && !nonPrimeFactors.includes(x)) {
        primeFactors.push(x)
      }
    }
  })

  let currentLargest = 0

  primeFactors.forEach( x => {
    x > currentLargest ? currentLargest = x : null
  })

  return currentLargest
}

console.log(findLargestPrimeFactor(int))
