//Ternary operator
const value = 12

value ? console.log('condition is true') : console.log('condition is false')

console.log(
  value ? console.log('condition is true') : console.log('condition is false'),
) //undefined, because .log returns undefined

//example with functions
// const value1 = 11
// const value2 = 21

// value1 && value2 ? myFn1(value1, value2) : myFn2()

//another example

let positiveVal = 11
console.log(positiveVal >= 0 ? positiveVal : -positiveVal)

positiveVal = -10

const negativeVal = positiveVal >= 0 ? positiveVal : -positiveVal //assignment of the result by a variable using ternary operator

console.log(negativeVal)