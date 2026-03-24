'use strict'
//Scope
let a
let b

function myFn() {
  let b
  a = true //this a is in the global scope, we did not declare it in the function
  b = 10 //this b is in the local scope of the myFn, we declared it earlier
  console.log(b)
}

//in this case we've changed the outer variable regarding to myFn, which is bad

myFn() //if we do not call the function, both a and b are gonna be undefined

console.log(a) //global scope
console.log(b) //global scope

//TODO chain of the scope
const x = 5

function newFn() {
  function innerFn() {
    console.log(x)
  }
  innerFn()
}

newFn()

//example with strict mode where a variable is not declared with a keyword let/const
function shittyFn() {
    noKeyword = true
    console.log(noKeyword)
}

shittyFn()

// console.log(noKeyword)
