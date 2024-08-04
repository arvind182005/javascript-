// let myName = "arvind      "
// let myChannel = "chai     "

// console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.arvind = function() {
    console.log(`arvind is present in all objects`);
}

Array.prototype.heyArvind = function() {
    console.log(`arvind says hello`);
}
// heroPower.arvind()
// myHeroes.arvind()
// myHeroes.heyArvind()
// heroPower.heyArvind()


// inheritance

const User = {
    name: "arvind",
    email: "arvind@gmail.com"

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true
}

// modern synatax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"arvind".trueLength()
"daku".trueLength()