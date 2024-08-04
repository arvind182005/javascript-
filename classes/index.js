class Human {
    // properties
    age; // public
    #wt = 80; // private
    ht = 180;

    // constructor
    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }

    // behaviour
// #walking() {
//     console.log("I am walking ", this.#wt);
// }

running() {
    console.log("I am running ");
}

get fetchWeight() {
    return this.#wt;
}

set modifyWeight(val) {
    this.#wt = val;
}

}


let obj = new Human(12, 13, 155);
console.log(obj.fetchWeight);
// obj.walking();