//Cycles
//TODO for
for (let i = 0; i < 5; i++) {
  // console.log(i)
}

//for cycle for arrays (NOT RECOMMENDED)
const sortedThroughArray = [1, 2, 3]

for (let i = 0; i <= sortedThroughArray.length; i++) {
  console.log(sortedThroughArray[i])
  console.log(i)
}

//TODO while
let numI = 0

while (numI < 5) {
  console.log(numI)
  numI++ //if there will be no this instruction, the cycle will run everlasting
}

//TODO do ... while
//1 example
let doWhileI = 6

do {
  console.log(doWhileI)
  doWhileI++
} while (doWhileI <= 5)

//TODO for ... in
const forInObj = {
  val1: 10,
  val2: true,
  val3: 'string',
}

for (const key in forInObj) {
  console.log(key, forInObj[key])
}

//for ... in for arrays (NOT RECOMMENDED)
const myArray = [true, 10, 'string', undefined]
for (const key in myArray) {
    console.log(myArray[key]) //key is the index of myArray
}

//TODO forEach for objects
const myObject = {
  a: 'string',
  b: 10,
  c: undefined,
}

Object.keys(myObject).forEach(key => {
  console.log(key, myObject[key]) //if .key - undefined, undefined, undefined
})

Object.values(myObject).forEach(key => {
  console.log(key, myObject[key]) //Object.values/keys converts object to array, so [key]
})

//TODO for ... of
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter) //string is iterable, so we can return value of every letter of the string
}

//for ... of for arrays (NOT RECOMMENDED)
const forOfArray = [true, 10, 'string']
for (const element of forOfArray) {
    console.log(element)
}

//TODO Object.keys converts object to array
Object.keys({}) //[]
