const fs = require("fs/promises")

fs.readFile("menu.csv", "utf-8")
    .then((data) => {
        // Break into rows
        const rows = data.trim().split("\n");
        //Take the items between commas and index them into arrays
        const indexed = rows.map(row => row.split(","));

        return fs.writeFile("menu.txt", data)
    })
    .then(() => {
        console.log("menu.txt has been written!")
    })
    .catch((err) => {
        console.error("Error:", err)
    })

fs.readFile("menu.txt", "utf-8")
    .then((data) => {
        console.log(typeof(data))
    })