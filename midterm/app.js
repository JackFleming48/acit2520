const fs = require("fs/promises");

async function viewAllSupply(coffeeType) {
    if ((await validTypes(coffeeType))) {
        console.error("invalid");
    }
    const data = await fs.readFile("supply.txt", "utf-8");
    const indexed = await data.split("\n").map(row => row.trim());
    d = {};
    await indexed.forEach(element => {
        d[element] = (d[element] || 0 ) + 1;
    });
    // console.log(d)


    // console.log(indexed)
    if (coffeeType === "DR") {
        console.log(d["dark-roast"])
    } else if (coffeeType === "MR") {
        console.log(d["medium-roast"])
    } else if (coffeeType === "B") {
        console.log(d["blonde"])
    }
};

async function addSupply(coffeeType) {
    if ((await validTypes(coffeeType))) {
        console.error("invalid");
    }

    await fs.appendFile("supply.txt", getDatatoWrite(coffeeType), { encoding: 'utf-8' })
}

async function deleteSupply(coffeeType, quantity) {
    if ((await validTypes(coffeeType))) {
        console.error("invalid");
    }

    const data = await fs.readFile("supply.txt", "utf-8")
    const indexed = await data.split("\n").map(row => row.trim())

    if (quantity === "*") {
        const removed = await removeItemAll(indexed, coffeeType);
        let to_write = []
        removed.forEach((element) => {
            to_write.push(`${element}\n`)
        })
        await fs.writeFile("supply.txt", to_write);
    }

    const remove_once = removeItemOnce(indexed, coffeeType);
    let to_write = []
    remove_once.forEach((element) => {
        to_write.push(`${element}\n`)
    });
    
    await fs.writeFile('supply.txt', to_write);
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function getDatatoWrite(coffeeType) {
    if (coffeeType === "DR") {
        return "\ndark-roast"
    } else if (coffeeType === "MR") {
        return "\nmedium-roast"
    } else if (coffeeType === "B") {
        return "\nblonde"
    }
}

function validTypes(coffeeType) {
    const allowed = ["DR", "MB", "B"];
    if (!(coffeeType in allowed)) {
        return false
    }
    return true
};



async function main() {
    // await viewAllSupply("DR");
    // await addSupply("DR")
    await viewAllSupply("DR");
    await deleteSupply("DR", 2)
    await viewAllSupply("DR")
}

main()