// A palindromic number reads the same both ways. The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

let findLargestPalindrome = () => {

  let palindromes = []

  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let product = j * i
      let checkPalindrome = product.toString().split('').reverse().join('')
      product.toString() === checkPalindrome ? palindromes.push(product) : null
    }
  }

  let largestPalindrome = 0
  palindromes.forEach( x => {
    x > largestPalindrome ? largestPalindrome = x : null
  })

  return largestPalindrome

}

console.log(findLargestPalindrome())
