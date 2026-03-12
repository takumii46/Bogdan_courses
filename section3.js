'use strict'
// const myName = 34

// console.log(myName)

// myName = 33

// console.log(myName)

//reference type
// by changing a value in a reference, all the references will change the new values of the object
let newObject = {
  number: 25,
  booleanValue: true,
}

let reference2 = newObject

// console.log(reference2)

let reference3 = newObject

reference3.number = 26

reference2.string = 'hello'
console.log(newObject)
console.log(reference3)
console.log(reference2)

// Static and dynamic typifications
// String a = 'hey there'
// int b = 10
// b = 'xyz'
//this is static typification, there is no such in js

//dynamic typification
function a() {
     console.log('hey there')
 }

a() // 'hey there'
 
a = 10 // a is not a function anymore

a() //uncaught TypeError: a is not a function