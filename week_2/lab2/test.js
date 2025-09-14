const fs = require("fs");

const tips = [
    "tip1",
    "tip2",
    "tip3",
    "tip4",
    "tip5",
    "tip6",
    "tip7",
    "tip8",
    "tip9",
    "tip10",
];

tips.forEach((tip) => {
    fs.appendFile("tips.txt", tip + "\n", (err) => {
        if (err) return console.log(err);
    });
});