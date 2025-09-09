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
            callback("error", null);
            return;
        }
        callback(null, "dataPoints dir created.");
    });

    const arrToStr = input.join(" ");

    
    fs.writeFile("dataPoints/points.txt", arrToStr, (err) => {
        if (err) {
            callback("error", null);
            return;
        };
        
        const data = fs.readFile("dataPoints/points.txt", "utf-8", (err, data) => {
            if (err) {
                callback("error", null);
                return;
            };
            callback(null, "points have been written to points.txt");

            const strToArr = data.split(" ");

            const nums = [];

            for (let index = 0; index < strToArr.length; index++) {
                nums.push(parseInt(strToArr[index]));
            };



            const calc = distance(nums[0], nums[1], nums[2], nums[3])
            fs.appendFile("dataPoints/points.txt", `\nThe distance between your two points: ${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]} is ${calc}`, (err) =>{
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