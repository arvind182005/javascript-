// compile time error
// syntax error
// console.log(1;


// run time error
// reference error
// console.log(x);



// try{

//     console.log("try block starts here");
//     // error -> reference error
//     console.log(x);
//     console.log("try block ends here");

// }

// catch(err) {

//     // define krte h, error ke saath kya krna hai
//     // retry logic
//     // fallback machanism
//     //logging
//     //custom error
//     console.log("I AM INSIDE CATCH BLOCK");
//     console.log("your error is here", err);

// }

// finally{
//     console.log("i will run every time, as i am finally block");
// }




// lets create a custom error

// try{
//     // ref error
//     console.log(x);
// }
// catch(err) {
//     throw new Error("Bhai pehle declare karo, fer print karo");
// }


let errorCode = 100;
if(errorCode == 100) {
    throw new Error("Invalid Json");
}




















