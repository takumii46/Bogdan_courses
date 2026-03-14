//functional expressions and arrow functions
//TODO functional expressions
const myFn = function (a, b) {
  let c
  a = a + 1
  c = a + b
  return c
}

myFn(3, 3)

//functional expression as callback
setTimeout(function () {
  //   console.log('delayed mesaage')
}, 1000)

//TODO arrow functions
const arrowFn = (a, b) => {
  let c
  a = a + 1
  c = a + b
  return c
}

//calling arrowed function in an another function
setTimeout(() => {
  // console.log('delayed message')
}, 1000)

//TODO parameter value of a function by default
function multByFactor(value, mult = 2) {
  return value * mult
}

multByFactor(10, 2)
multByFactor(10)

//exmaple with an anonimous fn
const addFn = function (num1, num2 = 5) {
  return num1 + num2
}

addFn(3)

//example with arrow function
const subtractFn = (num1, num2 = 5) => {
  return num1 - num2
}

subtractFn(6)

//TODO more complex example
// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

function newPost(post, addedAt = Date()) {
  return {
    //for explicit return, i used return and the object
    ...post,
    addedAt,
  }
}

const firstPost = {
  id: 1,
  author: 'Bogdan',
}

console.log(newPost(firstPost))
