// let obj = {
//     name: "Arvind",
//     age: 19,
//     weight: 55, 
//     greet: function() {
//         console.log("hello jee kaise ho saree");
//     }
// };

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj));


// let obj2 = obj;


// creation of arrays
// let arr = [1, 2, 3, 4, 5];
// array constructor
// let brr = new Array('arvind', 100, true);
// brr.push('jangir');
// brr.pop();

// brr.unshift('love baabar');
// brr.shift();
// brr.push(20);
// brr.push(40);
// brr.push(70);

// console.log(brr.slice(2,4));

// brr.splice(1, 2, 'AJ');

// console.log(typeof(brr));

// let arr = [10, 20, 30];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
// });

// console.log(evenArray);

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray);


// let arr = [1, 2, 'arvind', 'daku', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'number') {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// });

// console.log(ans);


// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, curr) => {
//     return acc+curr;
// }, 0);

// console.log(ans);

// let arr = [9, 1, 90, 4, 3];
// arr.sort();;

// console.log(arr);

// console.log(arr.indexOf(1));


// let arr = [10, 20, 30];

// let length = arr.length;
// console.log("length: ", length);

// for(let index=0; index < length; index++)
// {
//     console.log(arr[index]);
// }


// arr.forEach((value, index) => {
//     console.log("Number: ", value, "Index: ", index)

// })


// let arr = [10, 20, 30, 40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "arvind";

// for(let val of fullName){
//     console.log(val);
// }


let arr = [10, 20, 30, 40, 50];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    })

    return sum;

}

let totalSum = getSum(arr);
console.log(totalSum);































































