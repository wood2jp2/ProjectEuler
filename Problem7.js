// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

let nthPrimeNumber = () => {
  let totalPrimeNumbers = 0
  let primes = []
  let nonprimes = []


  for (let j = 2; totalPrimeNumbers < 10000; j++) {

    if (j % 2 === 0 && j !== 2) {
      nonprimes.push(j)
    } else {
      for (let k = 2; k <= j; k++) {
        if (j === 2) {
          primes.push(j)
        } else if (j % k === 0) {
          nonprimes.push(j)
        } else if (k === j-1 && !nonprimes.includes(j)) {
          primes.push(j)
          totalPrimeNumbers++
        }
      }
    }
  }

  return primes[primes.length-1]
}

console.log(nthPrimeNumber())
