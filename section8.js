//Operators
let a, b //coma , operator

a = 10 // = assignment operator
b = a

let c = a + b // + adding operator (+ is being primarily processed, = secondary)
console.log(c)

//TODO spread operator
const button = {
  width: 100,
  text: 'Purchase',
}

const redButton = {
  ...button,
  color: 'red',
  gradient: {
    red: true,
    blue: true,
  },
}

console.table(redButton)
console.table(button)

//combination of object using ...
const buttonInfo = {
  text: 'Purchase',
}

const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300,
}

const nestedBtn = {
  ...buttonInfo,
  ...buttonStyle,
}

console.table(nestedBtn)

//strings concatenation
console.log('Hello ' + 'World')

const hooray = 'Hooray'
const vacation = 'vacation'

const slogan = hooray + ' ' + vacation

console.log(slogan)

//template string literal (шаблонные строки)
const see = 'see'
const ya = 'ya'

const farewell = `${see} ${ya}` //any expression can be called in {}
console.log(farewell)

//another example
const myName = 'Hey, my name is Igor'
const myResidency = 'and I live in Germany'

const introduction = `${myName} ${myResidency}`
console.log(introduction)