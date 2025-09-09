// os = require("os")

// console.log(os.cpus().length)

const wordPosition = (words) => {
    const dict = {}

    words.forEach((element, index) => {
        if (element in dict){
            dict[element].push(index)
        } else {
            dict[element] = [index]
        }
    });

    console.log(dict)

}

const input = [
  "buy",
  "it",
  "use",
  "it",
  "break",
  "it",
  "fix",
  "it",
  "trash",
  "it",
  "change",
  "it",
  "mail",
  "upgrade",
  "it",
];

const output = wordPosition(input);