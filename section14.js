//Instructions
//TODO expressions-statements
'use strict' //this is expression-statement as well
// a = a + 3
// c = a + b
// d = 'Good ' + 'day'
// myFn(c, d)
// console.log('Hey there')

//TODO inctruction or expression?
function myFn(a) {
  console.log(a)
}

const b = true
let c = 10

myFn(2 + 3)
myFn(b)
myFn((c = c + 1)) // we assing a value of a variable, so this is an expression
//myFn(c = c + 1;) //because we added ;, this is an instruction
// myFn(let d) // declaring a new variable is instruction, error will occur

//my examples
function thisFn(param1) {
  console.log(param1)
}

let param2 = true
let param3 = 10;

thisFn(7 + 7)
thisFn(param2)
thisFn((param3 = param3 + 2))
thisFn()
thisFn()

