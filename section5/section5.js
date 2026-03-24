'use strict'
//mutations
//TODO copy by value
const a = 10
let b = a

b = 30

console.log(a)
console.log(b)

//values of reference type
const person = {
  name: 'Dima',
  age: 17,
}

person.age = 22
person.isAdult = false
console.log(person.age)
console.log(person.isAdult)

//we changed value, followingly we mutated the object despite that the object was declared as const

//TODO mutation of (object's) copies

const coWorker = {
  name: 'bogdan',
  stack: 'frontend',
  yearsOfXp: 10,
}

const coWorkerCopy = coWorker //we copied the reference of coWorker and mutated coWorker

coWorker.name = 'igor'
coWorker.yearsOfXp = 0

console.log(coWorkerCopy)
console.log(coWorker)

//TODO how to avoid mutations
// variant1: Object.assign({}, variable)
const guy = {
  name: 'yuri',
  age: 33,
}

const guy2 = Object.assign({}, guy)
guy2.age = 34

console.log(guy)
console.log(guy2)

//variant2: {...variable} ... is spread
const boy = {
  name: 'mikhail',
  age: 12,
}

const boy2 = { ...boy }
boy2.age = 13

console.log(boy)
console.log(boy2)

//variant3 JSON.parse(JSON.stringify(variable)), complete avoidance of mutation
const swagBoy = {
  name: 'darren',
  age: 22,
  coolStuff: {
    weed: '10 grams',
    alcohol: '10 cans of beer',
  },
}

const swagBoy2 = JSON.parse(JSON.stringify(swagBoy))
swagBoy2.age = 23
swagBoy2.coolStuff.alcohol = '8 cans of beer'

console.log(swagBoy)
console.log(swagBoy2)
