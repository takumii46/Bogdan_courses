//destructuring
//TODO destructuring objects
const userProfile = {
  name: 'Druid',
  age: 23,
  hobby: 'ice hockey',
}

const { name, age } = userProfile //new variable declarement and assignment values based on the object's properties
const { hobby } = userProfile

console.log(name)
console.log(hobby)

//TODO destructuring arrays
const languages = ['english', 'japanese']

const [worldDomination, lovelyLanguage] = languages

console.log(worldDomination)
console.log(lovelyLanguage)

//destructuring in functions
const userResume = {
  name: 'Igor',
  yearsOfXp: 0,
  stack: 'Frontend dev',
}

// function userResumeReview  ({ name, yearsOfXp, stack }) {
//   if ((commentsQty = 0)) {
//     return `User ${name} does not have any experience.`
//   }
//   return `User ${name} has ${yearsOfXp} of experience and pretending for ${stack}.`
// }

// const userResumeReview = ({ name, yearsOfXp, stack }) => {
//   if (yearsOfXp === 0) {
//     return `User ${name} does not have any experience.`
//   }
//   return `User ${name} has ${yearsOfXp} of experience and pretending for ${stack}.`
// }

const userResumeReview = profile => {
  const { name, yearsOfXp, stack } = profile
  if (yearsOfXp === 0) {
    return `User ${name} does not have any experience.`
  }
  return `User ${name} has ${yearsOfXp} of experience and pretending for ${stack}.`
}

console.log(userResumeReview(userResume))
