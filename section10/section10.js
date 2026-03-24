//TODO spread operator
const button = {
  width: 100,
  text: 'Purchase',
}

const redButton = {
  ...button,
  color: 'red',
  gradient: {
    red: true,
    blue: true,
  },
}

console.table(redButton)
console.table(button)

//TODO ombination of object using ...
const buttonInfo = {
  text: 'Purchase',
}

const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300,
}

const nestedBtn = {
  ...buttonInfo,
  ...buttonStyle,
}

console.table(nestedBtn)
