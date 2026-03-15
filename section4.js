'use strict'
//objects
const myBackpack = {
  liquid: 'water',
  food: 'can of beans',
  gadget: false,
}

const hisBackpack = {
  food: 'can of beans',
  liquid: 'water',
  gadget: false,
}

hisBackpack.weapon = 'pistol'
myBackpack.food = 'half eaten can of beans'

// console.log(myBackpack.gadget)
// console.log(hisBackpack)
// console.log(myBackpack)

//TODO delete operator
delete hisBackpack.liquid
// console.log(hisBackpack)

//TODO adding a property with []
myBackpack['explosive'] = 'hand grenade'
delete myBackpack['liquid']

console.log(myBackpack)

//TODO best example when bracket notation [] is used
const backpackPropertyName = 'explosive'
hisBackpack[backpackPropertyName] = 'flashbang'

console.log(hisBackpack)

//TODO reaching object hierarchy
const tools = {
  hammer: 17,
  axe: 4,
  sword: 11,
  proTools: {
    catapult: 2,
    cannon: 6,
  },
}

tools.proTools['bomb'] = 100

console.log(tools)

console.log(tools.proTools.cannon)

//TODO variable usage
const name = 'bogdan'
const postsQty = 35

const userProfile = {
    name: name, // we can shorten it to just 'name,'
    postsQty: postsQty, //here as well 'postsQty,'
    isHired: false
}

//TODO mTODO ethods
const myCity = {
    city: 'New York',
    cityGreeting: function () {
         console.log('Greetings!')
     }
}

console.log(myCity)
myCity.cityGreeting()

//we can shorten function in the object

const myCountry = {
    country: 'Ukraine',
    countryGreeting() { 
        console.log('Здарова')
    }
}

myCountry.countryGreeting()

//TODO converting JSON to JavaScript and Js to JSON
const myStats = {
    age: 16,
    name: 'igor',
    hobby: 'CODING'
}

JSON.stringify(myStats) //myStats is now a string in JSON

const myStatsStringified = JSON.stringify(myStats) //we can use this variable to parse myStats
JSON.parse(myStatsStringified) //myStats is js again