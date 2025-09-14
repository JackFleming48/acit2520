// Format x1 y1 x2 y2

// require process
const process = require('node:process');
// require filesystem
const fs = require('node:fs');
//import distance function from mathHelpers.js
const { distance } = require('./mathHelpers.js');

// user input
const input = process.argv.slice(2);

// Process inputs and write to file called point.txt
function processInput(input, callback){
    fs.mkdir("dataPoints", { recursive: true }, (err) => {
        if (err) {
            callback(err, null);
            return;
        }
        console.log("data points created");
        const arrToStr = input.join(" ");
    
        
        fs.writeFile("dataPoints/points.txt", arrToStr, (err) => {
            if (err) {
                callback("error", null);
                return;
            };
            
         const calc = distance(input[0], input[1], input[2], input[3]);

         fs.appendFile("dataPoints/points.txt", `\nThe distance between your two points: ${input[0]}, ${input[1]}, ${input[2]}, ${input[3]} is ${calc}`, (err) =>{
                if (err) {
                    callback("error", null);
                    return;
                };
            });
    });
    });
};

processInput(input, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
});