const { rejects } = require("node:assert");
const { triggerAsyncId } = require("node:async_hooks");
const fs = require("node:fs/promises");
const { resolve } = require("node:path");

// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// };

// wait(2000)
//     .then(() => console.log("2 seconds passed"))
//     .catch((err) => {
//         console.log(err)
//     })


// const user = {
//     name: "Alice",
//     age: 24
// }


// function getUser(user) {
//     return new Promise((resolve) => {
//         resolve(user)
//     });
// };

// getUser(user).then(user => console.log(user.name)); //Alice

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             resolve(true)
//         } else {
//             reject("Num too small")
//         }
//     });
// };

// checkNumber(11)
//     .then(() => console.log("valid"))
//     .catch((err) => console.log(err))

