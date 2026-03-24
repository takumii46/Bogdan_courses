//classes and prototypes
class Comment {
  constructor(text) {
    this.text = text //this variable indicates on an exempler of a class
    this.votesQty = 0 //0 because constructor is being called when we create a new exempler for a particular object
    // this.text = 5 //even though it's a second text, exemplers are all unique
  }

  upvote() {
    this.votesQty += 1
  }

  downvote() {
    this.votesQty -= 1
  }

  //TODO static methods
  static mergeComments(first, second) { //this static method is in the constructor. It will not be available on the level with exemplers
    return `${first} ${second}`
  }
}

Comment.mergeComments('First comment', 'Second comment') //method is accessible as a property of the class (Comment) and will NOT inherit exemplers (copies) of the class

//TODO creating an exempler of a class
const firstComment = new Comment('First comment') //Comment is a prototype for this exempler. firstComment is an object

console.log(firstComment)

//TODO chain inherit
firstComment.text

//TODO ownership check
console.log(firstComment instanceof Comment) //firstComment is an exempler (copy) of Comment and inherits all of its properties, so true
console.log(firstComment instanceof Object) //every object iherits all properties of its parent object, so true
console.log(firstComment instanceof Array)

//TODO calling methods
firstComment.upvote() //this variable dynamically indexes on this object
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.downvote()
console.log(firstComment.votesQty)
//methods can be called multiply

//Проверка принадлежности свойств экземпляру объекта
console.log(firstComment.hasOwnProperty('text')) //true, it's own property
console.log(firstComment.hasOwnProperty('votesQty')) //true it's own property
console.log(firstComment.hasOwnProperty('upvote')) //false, it'a an inherited property
console.log(firstComment.hasOwnProperty('downvote')) //false, it'a an inherited property

//creating multiple exemplers (copies)
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

// typeof Comment.prototype === typeof firstComment.__proto__

//TODO exstension of other classes
class NumbersArray extends Array { //parent constructor will be called automatically
    // Array is a parent class for NumbersArray 
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
//в данном примере конструктор не нужен, потому-что когда расширяется Array, то при создании нового экземпляря класса NumbersArray, конструктор родительского класса (Array) вызовется автоматически

const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
// myArray.sum()