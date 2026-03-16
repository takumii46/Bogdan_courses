//conditional instructions
//TODO if
const a = 3
const b = a

if (a === b) {
  console.log('nice')
}

console.log(a === b) //type and value coincide, so true

//another example
let value = 10

if (value < 15) {
  value += 100
  console.log(value)
}

//if with !
const person = {
  age: 17,
}

if (person.age !== 18) {
  console.log('You are not an adult')
}

//TODO if ... else
let numVal = 15

if (numVal < 5) {
  numVal += 20 //it's ignored, because it's false
} else {
  numVal -= 10
}

//TODO if ... else if ... else

const age = 25

// if (age > 18) {
//   console.log('welcome')
// } else if (age >= 12) {
//   ;console.log('Teens have less content to explore')
// } else {
//   console.log('Restricted access, none of the requirements are found')
// }

if (age >= 18) {
  console.log('welcome')
}

if (age >= 12 && age < 18) {
  console.log('Teens have less content to explore')
}

if (age < 12) {
  console.log('Get lost, kiddo')
}

//TODO using if in functions
const sumPositiveNumbers = (a, b) => {
  a = 5
  b = 6

    if (typeof a === 'number' && typeof b === 'number') {
      return 'All of the arguments are numbers'
    }
    
  if (typeof a !== 'number' || typeof b !== 'number') {
    //if the conditions conincides, other connditional instructors will be ignored and function will stop work at return
    return 'One of arguments is not a number'
  }

  if (a <= 0 || b <= 0) {
    return 'Numbers are not positive'
  }
  return a + b
}

console.log(sumPositiveNumbers())

//TODO switch

const month = 2
switch (month) {
    case 12:
        console.log('december')
        break
    case 11: 
        console.log('november')
        break
    case 2:
        console.log('february')
        break //if there's 
    default:
        console.log('january')
}