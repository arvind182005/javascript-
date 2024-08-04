// create an object

const person = {
    firstName: "arvind",
    lastName: "jangir",
    age: 20
}

// create a copy
const  x = person;


// it will change Age in both X and PERSON object , because objects are addressed by reference, not by value.
x.age = 25;
console.log(person);