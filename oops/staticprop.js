class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId() {
        return `123`
    }
}

const arvind = new User("arvind")
// console.log(arvind.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}


const poco = new Teacher("poco", "poco@gmail.com")
console.log(poco.createId());