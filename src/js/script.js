// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calc() {
//         return this.height * this.width;
//     }
// }

// class ColorRectangleWithText extends Rectangle {
//     constructor(height, width, bgColor, text) {
//         super(height, width)
//         this.bgColor = bgColor
//         this.text = text
//     }

//     showProps() {
//         console.log(`text: ${this.text}, color: ${this.bgColor}` );
//     }
// }

// const div = new ColorRectangleWithText(25, 10, "red", "hello")
// div.showProps()
// console.log(div.calc());

// const sq = new Rectangle(10, 10);
// console.log(sq.calc());


//     function User(name, id) {
//         this.name = name
//         this.id = id

//     }

//     const user1 = new User("sardor", 1)
//         user2 = new User("sarvar", 2)


//  console.log(user1);
// console.log(user2);





class Animal {
    constructor(listen, speak, run, eat ) {
    this.listen = listen
   this.speak = speak
    this.run = run
    this.eat = eat 
    }
    showProps() {
        console.log(`listen: ${this.listen}`);
        console.log(`speak: ${this.speak}`);
        console.log(`run: ${this.run}`);
        console.log(`eat: ${this.eat}`);
    }
}
let animals = new Animal ('true', 'true','true', 'true' )

class Humans extends Animal {
    constructor(listen, speak, run, eat, think) {
        super(think)
        this.think = think
    } 
    showProps() {
        console.log(`think: ${this.think}`);
    }
}

const a = new Humans('true', 'true', 'true', 'true', 'true')
console.log(a);

class Birds extends Animal {
    constructor(listen, speak, run, eat, think, fly) {
        super(fly)
        this.fly = fly
    } 
    showProps() {
        console.log(`fly: ${this.fly}`);
    }
}
const b = new Birds('true', 'false', 'false', 'true', 'true', 'true')
console.log(b);
class Fish extends Animal {
    constructor(listen, speak, run, eat, think, fly, air) {
        super(air)
        this.air = air
    } 
    showProps() {
        console.log(`air: ${this.air}`);
    }
}

const f = new Fish('false', 'false', 'false', 'true', 'false', 'false', 'true')
console.log(f);