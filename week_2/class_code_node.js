const os = require("node:os");
const fs = require("node:fs");

/*

readFile is asynchronous
readFileSync is sycnhronous

The moment nodeJS see readFile is kicks off reading the file but then reads in the background and other code can be executed.

readFilySync would have to wait until the file is finished being read to continue execute the rest of your code.

*/

const data = fs.readFile("test.txt", "utf-8", (err, data) =>{
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    };
});

// console.log(data);
// console.log(data.toString(data));

