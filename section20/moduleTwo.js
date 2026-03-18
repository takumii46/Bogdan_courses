//import file
import { sum as sumNums, mult as multNums } from './moduleOne.mjs'

console.log(sumNums(10, 2))
console.log(multNums(10, 2))

const res1 = sum(10, 2)
const res2 = sum(5, 10)

console.log(res1)
console.log(res2)

// console.log(myName) //referenceError

//import of multiple exports
import { one as oneRenamed, two as twoRenamed } from './moduleOne.mjs'

console.log(oneRenamed)
console.log(twoRenamed)
