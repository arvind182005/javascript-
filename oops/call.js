function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // without .call and this use, it cannot be possibe to access the username
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);