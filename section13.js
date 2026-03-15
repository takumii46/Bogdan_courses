//working with errors
const fnWithError = () => {
  throw new Error('Some error')
}

fnWithError()

// console.log('Continue')

//TODO try/catch

const errorFn = () => {
    throw new Error('error')
}

try {
    errorFn()
} catch (error) {
    console.error(error) //we call the whole error
    console.log(error.message) //only text error
}

console.log('continue')