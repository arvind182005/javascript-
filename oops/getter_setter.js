class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}arvind`
    }

    set password(value) {
        this._password = value.toUpperCase()
    }
}

const arvind = new User("arvind@gmail.com", "abc")
console.log(arvind.email);