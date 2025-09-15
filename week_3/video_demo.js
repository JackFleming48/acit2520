// Synchronous & Asynchronous code
const fs = require("fs");

function helloThere() {
    console.log("Hello there!!")
};

fs.writeFile("myFile.txt", "some content", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File has written");
        // moving readfile HERE gurantees that it will execute AFTER writeFile is completed.
        fs.readFile("hi.txt", function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data.toString())
            }
        });
    }
});

// This executes first because the runtime is QUICKER than the code above that write and reads a file.
console.log("hi")

// helloThere()



// let firstName = "john";
// let lastName = "smith";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);


// Instead of this seperation of cb, write it directly in the writeFile callback.
// function cb(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File has written");
//     }
// };

// fs.writeFile("myFile.txt", fullName, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File has written");
//     }
// });
