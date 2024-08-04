// let obj = {
//     age:12,
//     wt:68,
//     ht:180
// }

// console.log(obj);

// obj.color = "white";

// console.log(obj);

                                  // cloning by spread operator
                                  
// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest = {...src};

// // let dest = src;                            its doing not a cloning it was copy the  references  

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);



                              // cloning by assigning
                              
                              
//   let src = {
//     age:12,
//     wt:68,
//     ht:180
// };                            

// let src2 = {
//     value:100,
//     name:"Arvind Jangir",
// }
// let dest = Object.assign({}, src, src2);

// src.age=90;

// console.log("src: ", src);
// console.log("dest: ", dest);


                              // cloning by itration
                              
                              
let src = {
age:12,
wt:68,
ht:180
};

let dest = {};

for(let key in src) {
    // console.log(key);  

    let newKey = key;
    let newValue = src[key];

    // insert newKey and value dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;

console.log("src: ", src);
console.log("dest: ", dest);