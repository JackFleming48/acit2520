const fs = require("fs/promises");

function index(data) {
    const indexed = data.split("\n").map(row => row.trim().split(","));
    return indexed;
}

function menuItem(indexed) {
        const menuItem = indexed.map(row => {
        return {
            category : row[0],
            price : row[3],
            item : row[1],
            desc : row[2]
        };
    });
    return menuItem;
}

function catDict(menuItem) {
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
}

function createMenu(categoryDict) {
    const menu = [];
    for (const [category, items] of Object.entries(categoryDict)) {
        menu.push(`* ${category.charAt(0).toUpperCase() + category.slice(1)} Items *`);

        for (const {item, desc, price} of items){
            menu.push(`${price.toFixed(2)} ${item}, ${desc}`);
        };
        menu.push("");
    };
    return menu;
}

function toWrite(menu) {
        let toWrite = ""
    menu.forEach(element => {
        toWrite += element + "\n"
    });
    
    return toWrite;
}

async function wFile (toWrite) {
    await fs.writeFile("menu.txt", toWrite);
}

fs.readFile("menu.csv", "utf-8")
    .then((data) => {
        //Data into rows removing blank space, split each row into an array then take each row and split it into individual arrays separated at the comma.
        let indexed = index(data);
        //map each indexed item to a category, price, item, and description in a dict
        let menuItems = menuItem(indexed);
        //Take menuItem dict and write to new dict where category is the key to each item in that category
        let categoryDict = catDict(menuItems);
        //Take menuItem dict and write to new dict where category is the key to each item in that category
        let menu = createMenu(categoryDict);
        //take menu array and turn it into a formatted string to be written to menu.txt
        let write = toWrite(menu);
        //Write toWrite string to menu.txt
        return wFile(write)
    })
    .then(() => console.log("The menu has been written!"))
    .catch((err) => {
        console.error("Error:", err)
    })
