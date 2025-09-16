const fs = require("node:fs/promises");
const { promiseHooks } = require("node:v8");

// fs.readFile("file1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     fs.readFile("file2.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//         fs.readFile("file3.txt", "utf-8", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//             fs.readFile("file4.txt", "utf-8", (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(data);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });


// Readability Issue
// No centralized error handler
// Move from Traditional Callbacks -> Promise


// function readF(fname) {
//     fs.readFile(fname, "utf-8", (err, data) => {
//         if (err) {
//             console.log(err)
//         } else if (fname == "file4.txt") {
//             console.log(data)
//             return
//         } else {
//             console.log(data)
//             readF(data)
//         }
//     });
// }

// readF("file1.txt")


// function readF(fname) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fname, "utf-8", (err, data) => {
//             if (err) reject(err);
//             else resolve(data);
//         });
//     });
// }


fs.readFile("file1.txt", "utf8")
    .then((data) => fs.readFile(data))
    .then((data2) => console.log(data2))
    .catch((err) => {
        console.log(err)
    })
    



    // how to make:
// new Promise(() => {})

// function readFileP(filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, "utf8", (err, data) => {
//             if (err) {
//                 // console.log(err);
//                 reject(err);
//             } else {
//                 // console.log(data);
//                 resolve(data);
//             }
//         })
//     });
// }

// readFileP("file1.txt")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// for this weeks lab: shortcut

// const {promisify} = require("node:util");

// const readFileP = promisify(fs.readFile); // takes a function and turns it into a promise

// even shorter:

// const fs = require("node:fs/promises"); - will automatically promisify any of the node modules so you can just call fs.readFile

// const fs = require("node:fs/promises")

// fs.readFile("file1.txt")
//  .then(fileTwo => fs.readFile(fileTwo))
//  .then(fileThree => fs.readFile(fileThree))
//  .then(fileFour => fs.readFile(fileFour))
//  .then(result => console.log(result.toString()))
//  .catch(err => console.log(err));