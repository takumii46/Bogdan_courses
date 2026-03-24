//Promises
const myPromise = new Promise((resolve, reject) => {
  //2 params "resolve" and "reject" must be in the promise
  //executions of asynchronous functions
  //inside of this fn, by the result we must invoke whether resolve or reject
})
//newly created Promise will be in the "pending" state

//TODO receiving Promise's result
myPromise
  .then(value => {
    //actions in case of successful resolve
    //значение value - значение, переданное в вызове функции resolve внутри Промиса
  })
  .catch(error => {
    //actions in case of rejecting the Promise
    //значение error - значение, переданное в вызове функции reject внитри Промиса
  })

//TODO using Promises in fetch
// fetch('https://jsonplaceholder.typicode.com/') //fetch creates a Promise, which will be in the pending state
//   .then(response => response.json)//json method returns Promise as well
//   .then(json => console.log(json))
//   .catch(error => console.error(error))
//fetch and json return a Promise
  
fetch('https://jsonplaceholder.typicode.com/') 
  .then(response => {
    console.log(response)
    return response.json()
  }) 
  .then(json => console.log(json))
  .catch(error => console.error(error)) 
  