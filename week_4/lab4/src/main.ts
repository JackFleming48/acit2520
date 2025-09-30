import console = require("node:console");
import fs = require("node:fs/promises");
import path = require("node:path");

const fp = "../dataFile"

function mkDir(){
    // Create path to dataFile where the db will go.
    const projectFolder = path.join(__dirname, fp);
    // Create the folder dataFile
    const dirCreation = fs.mkdir(projectFolder, { recursive: true });
    return dirCreation;
}

// function appendData(data: Array) {

// }

// function registerUser(username: string | undefined, password: string | undefined){
//     return new Promise((resolve, reject) => {
//         if (!username || !password) {
//             reject(new Error("Enter a valid username and password!"))
//             return
//     };
    
//         const userPass = {
//             user: {
//                 uname : username,
//                 pass : password
//             }
//         };

//         resolve(userPass);
//     })
// };

// function writeObject()


mkDir()
    .then(() => {
        return fs.writeFile('dataFile/database.txt', 'hello', { encoding: 'utf-8' })
    })
    .then(() => console.log("Database written"))
    .then(() => {
        return [process.argv[2], process.argv[3]]
    })
    .then((data) => {
        if (!data){
            throw new Error(("data to write to file is empty!"))
        }
        console.log("success", data)
        fs.appendFile('dataFile/database.txt', data[0], { encoding: 'utf-8' })
    })
    .catch(err => console.error("Error:", err));