/* 

WHENEVER POSSIBLE USE CONST

IGNORE keyword "var" for variables

A const variable is something that cannot be changed
Otherwise use let for things that can be changed

Most of the JS community uses const variables for almost everything, the reason is because JS as a language has a history of changing
variable or values very easily without the developer actually wanting that to happen.

Unless you absolutely have to change that value you can use let, otherwise use const

You can change const variables with dynamicity like .push(), however you cannot change it in memory like so:

const color = ["green"]
const color = ["yellow"]
 
*/

// function add(n1, n2) {

//     return n1 + n2;

// };

// // const refOne = add;
// // const refTwo = add;
// ``

// // Prints 7
// // console.log(refOne(5,2));

// function addTwo(num1, callback) {
//     return callback(num1, 2)
// };

// console.log(addTwo(7, add))

// const color = ["red", "blue"];

// function callbackfn(value, index) {
//     console.log(value, index);
// }

// color.forEach(callbackfn);

/*

Anonymous functions are functions without a name.

JS does not care about the names of things, it cares about position

*/

// function printer(value, index) {
//     console.log(value,index);
// }

// function forEa(list, callback) {
//     for (let index = 0; index < list.length; index++) {
//         callback(list[index], index)
//     };
// }



// const a = ["one", "two", "three", "four"];

// forEa(a, printer)

/*

If we remove the name from printer and drop the entire function into the forEa call, we make it so that the printer function cannot
be called outside of the forEa call.

We can also remove the word function and replace with an arrow to create an arrow function.

This makes readability a bit better; when dealing with inline callback functions, it is a great case to use arrow functions.

It can also be important to make the function on accessible from withing higher order function via arrow function because we might
have code that must be "setup" using our function and therefore can only be called by our function. We wouldn't want other people or
other functions using our function in case it crashes the program.

*/

// function forEa(list, callback) {
//     for (let index = 0; index < list.length; index++) {
//         callback(list[index], index)
//     };
// }

// const a = ["one", "two", "three", "four"];

// forEa(a, (value, index) => {
//     console.log(value,index);
// });

// a.forEach((element, index) => {
//     console.log(element, index)
// });

/*

Create a function called multiplier, it should accept:
- two numbers
- callback function:
    Should recieve either a(n):
    - err
    - result

multiplier is a higher order function and printing should be done inside the callback.

If user doesnt provide number -> err
If user provides floating point number -> round/truncate

*/

// MY CODE
const fs = require("fs")


function multiplier(num1, num2, callback) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        callback(new Error("NaN"))
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        callback(null, parseInt(num1 * num2))
    } 
};

multiplier("hello", 70, (err, result) => {
    console.log(result);
})

// ARMAANS MODIFIED CODE 

// function multiplier(num1, num2, callback) {

//     if (typeof(num1)!== "number" || typeof num2 !== "number") {

//         callback("ERROR", null);
//     } else {
//         callback(null, parseInt(num1) * parseInt(num2));
//     }

// }

// multiplier(4, 2.3, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

