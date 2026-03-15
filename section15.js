//arrays
const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)
//these 2 array are created in 2 different parts of js memory and keep 2 different references

console.log(myArray === myArray2) //false

//TODO array vs object
const thisObj = {
  val1: 1,
  val2: 2,
  val3: 3,
}

console.log(thisObj)

const thisArray = [1, 2, 3]
console.log(thisArray)

//reading/getting acces to values of an array
const analyzedArray = [1, false, null]

console.log(analyzedArray[0])
console.log(analyzedArray[1])
console.log(analyzedArray[2])

analyzedArray[2] = undefined
delete analyzedArray[1]

console.log(analyzedArray)
console.log(analyzedArray.length)

//adding/changing elements
const changedArray = [1, 2, 3, 4]

changedArray[1] = 'string'
changedArray[4] = 'true'
changedArray[6] = 'true' //automatically adds an empty slot in the index of 6

console.log(changedArray)
console.log(changedArray.length)

//methods of arrays
//TODO push
const pushedArray = [1, 2, 3]

pushedArray.push('4')
pushedArray.push(true)

console.log(pushedArray)

//TODO pop
const popedArray = [1, 2, 3]

popedArray.pop()
const removedElement = popedArray.pop()

console.log(popedArray)
console.log(removedElement)

//TODO unshift
const unshiftedArray = [1, 2, 3]
unshiftedArray.unshift(0)
unshiftedArray.unshift(-1)

console.log(unshiftedArray)

//TODO shift
const shiftedArray = [1, 2, 3]

const shiftedElement = shiftedArray.shift() //works as ctrl + x as well

console.log(shiftedArray)
console.log(shiftedElement)

//TODO forEach
const sortedArray = [1, 2, 3]

const result = sortedArray.forEach(el => console.log(el * 2)) //(el), despite multiplying, the orginal array did not change

console.log(sortedArray) //original array did not change
console.log(result)

//TODO map
const mappedArray = [1, 2, 3]

const newMap = mappedArray.map(el => el * 2) //map returns the result implicitly
const newMapFn = mappedArray.map(function (el) { //anonimous fn expression
  return el * 2
})
const newMapUndefined = mappedArray.map(el => {
  el * 2
}) // there is no return in this callback function, so [undefined, undefined, undefined]

console.log(newMap) //map created new array
console.log(mappedArray) //original array did not change
console.log(newMapUndefined) //return is missing
