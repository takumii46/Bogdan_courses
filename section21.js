//classes and prototypes
class Comment {
    constructor(text) {
        this.text = text //this variable indicates on an exempler of a class
        this.votesQty = 0 //constructor
        // this.text = 5 //even though it's a second text, exemplers are all unique
    }

    upvote() {
        this.votesQty += 1
    }

    downvote() {
        this.votesQty -= 1
    }
}

//TODO creating an exempler of a class
const firstComment = new Comment('First comment') //Comment is a prototype for this exempler. firstComment is an object

console.log(firstComment)



