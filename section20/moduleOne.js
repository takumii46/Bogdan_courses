//export file
const sum = (a, b) => a + b

const mult = (a, b) => a * b

const myName = 'Igor'

//multiple exports
const one = 1
const two = 2

// export default sum
export { one, two } //a module cannot have multiple DEFAULT exports
export { sum, mult }
