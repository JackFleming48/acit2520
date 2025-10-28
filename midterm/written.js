const fs = require("node:fs/promises");
const { EOL } = require("node:os");

async function main() {
    try{
        //     When you test your program, at the bottom, it should include the following:
        // First call viewAllSupply for "MR". // Should see 8
        await console.log(viewAllSupply("MR"));
        // Then call addSupply one time with "MR".
        await console.log(addSupply("MR"));
        // Then call viewAllSupply again with "MR". // Should see 9
        await console.log(viewAllSupply("MR"));
        // Then call deleteSupply with "MR" and 2. 
        await console.log(deleteSupply("MR"));
        // Then call viewAllSupply again with "MR". // Should see 7
        await console.log(viewAllSupply("MR"));
        // Then call deleteSupply with "MR" and *. 
        await console.log(deleteSupply("MR", "*"));
        // Then call viewAllSupply again with "MR" // Should see 0
        await console.log(viewAllSupply("MR"));
        // Finally, print "Program is completed". 
        await console.log("Program is completed");
    } catch (err) {
        console.error(err);
    };
};

function getFullName(shortname) {
    const mappings = {
        DR: "dark-roast",
        MR: "medium-roast",
        B: "blonde",
    };

    if (!(shortname in mappings)) throw new Error("Invalid name");
    return mappings[shortname];
};

async function getCoffee() {
    // return (await fs.readFile("supply.txt", "utf-8")).split(EOL);
    
    const content = await fs.readFile("supply.txt", "utf-8");
    const rows = content.split(EOL);
    return rows;
};

async function viewAllSupply(type) {
    let count = 0;
    const coffeeType = getFullName(type);
    const coffees = await getCoffee();
    for (const cofee of coffees) {
        if (coffee === coffeeType) count ++;
    }
    // return (await.getCoffee()).filter((c) => c === coffeeType).length;
    return count
};

async function addSupply(type) {
    const coffeeType = getFullName(type);
    return fs.appendFile("supply.txt", `${EOL}${coffeeType}`);
};

async function deleteSupply(type, q) {
    const coffeeType = getFullName(type);
    if (q === "*") {
        await deleteAllCoffee(coffeeType);
    } else {
        await deleteSomeCoffee(coffeeType, q);
    };
};

async function deleteAllCoffee(coffeeType) {
    const coffees = await getCoffee();
    const safeCoffees = coffees.filter(c => c != coffeeType);
    return fs.writeFile("supply.txt", safeCoffees.join(EOL));
};

async function deleteSomeCoffee(coffeeType, q) {
    let deleted = 0;
    const safeCoffees = [];
    const coffees = await getCoffee();
    for (const coffee of coffees) {
        if (coffee === coffeeType && deleted < q) {
            deleted++;
            continue;
        }
        safeCoffees.push(coffee);
    }
    return fs.writeFile("supply.txt", safeCoffees.join(EOL));
};

main();