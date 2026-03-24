'use strict'
//functions
let num1 = 5
let num2 = 10

let c

c = num1 + num2
// console.log(c)

num1 = 10
num2 = 15

c = num1 + num2
// console.log(c)

// to shorten this code and avoid repetitive blocks of code, we'll use function

let a = 5
let b = 10

function sum(a, b) {
  //a, b are parameters of the funtion. They can always be changed
  const c = a + b
  console.log(c)
}

// sum(a, b)

a = 10
b = 15

const sumValue = sum

// console.log(sumValue)

// sum(a, b) //we just need to call the function and new changes will be applied

// console.dir(sum)

//checking variable in global and local scopes
let go = 5

function test(go) {
  console.log(go)
}

// console.log(go)
// test()

//transfer of value by reference
const dude1 = {
  name: 'vlad',
  age: 16,
}

function increaseDudesAge(dude) {
  //inside the function, we're mutating the outter object (dude1)
  dude.age += 1
  return dude
}

increaseDudesAge(dude1) //object's transfer by reference
// console.log(dude1.age)
// increaseDudesAge(dude)

//dude and dude1 refer to the same object

//TODO creating a copy of the object
const chelick1 = {
  name: 'bogdan',
  age: 24,
}

function increaseChelicksAge(chelick) {
  const updatedChelick = Object.assign({}, chelick)
  updatedChelick.age += 1
  return updatedChelick
}

const updatedChelick1 = increaseChelicksAge(chelick1)
console.log(chelick1.age)
console.log(updatedChelick1.age)

//TODO callback functions
function anotherFn() {
    //instructions
}

function fnWithCallback(callbackFn) { //in this function teh callback fn is being called
    callbackFn()
}

fnWithCallback(anotherFn)

//example with setTimeout

function printMyName() {
    console.log('Bogdan')
} 

setTimeout(printMyName, 3000) //setTimeout is a built-in function