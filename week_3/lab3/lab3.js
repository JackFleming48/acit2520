const fs = require("fs/promises");

fs.readFile("menu.csv", "utf-8")
    .then((data) => {
        //Data into rows removing blank space, split each row into an array then take each row and split it into individual arrays separated at the comma.
        const indexed = data.split("\n").map(row => row.trim().split(","));
        return indexed;
    })
    //map each indexed item to a category, price, item, and description in a dict
    .then((indexed) => {
        const menuItem = indexed.map(row => {
            return {
                category : row[0],
                price : row[3],
                item : row[1],
                desc : row[2]
            };
        });
        return menuItem;
    })
    //Take menuItem dict and write to new dict where category is the key to each item in that category
    .then((menuItem) => {
        const categoryDict = {};

        for (const item of menuItem) {
            if (!categoryDict[item.category]) {
                categoryDict[item.category] = [];
            };

            categoryDict[item.category].push({
                item: item.item,
                desc: item.desc,
                price: parseFloat(item.price.replace("$", " "))*1.8
            });
        }
        return categoryDict;
    })
    //Take the categoryDict and format each category and item in the category to an array where each each category is followed by the items belonging to it.
    .then((categoryDict) => {
        const menu = [];
        for (const [category, items] of Object.entries(categoryDict)) {
            menu.push(`* ${category.charAt(0).toUpperCase() + category.slice(1)} Items *`);

            for (const {item, desc, price} of items){
                menu.push(`${price.toFixed(2)} ${item}, ${desc}`);
            };
            menu.push("");
        };
        return menu;
    })
    //take menu array and turn it into a formatted string to be written to menu.txt
    .then((menu) => {
        const toWrite = ""
        menu.forEach(element => {
            toWrite += element + "\n"
        });
        
        return toWrite;
    })
    //Write toWrite string to menu.txt
    .then((toWrite) => {
        fs.writeFile("menu.txt", toWrite);
    })
    .then(() => console.log("The menu has been written!"))
    //catch errors
    .catch((err) => {
        console.error("Error:", err)
    })
