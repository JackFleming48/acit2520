<<<<<<< HEAD
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
=======
const {createBlogsContainer, userAction, register, createaABlog, blogDirExists, checkUser, findPost, createAPost, ask, likePost } = require("./logic")





async function main(){
    await createBlogsContainer()
    const action = await userAction();
    if (action === "1"){
        const username = await ask("What is you username: ");
        const password = await ask("What is your password: ");
        register(username, password)
    } else if (action === "2") {
        const blogName = await ask("What is your blog name: ")
        createaABlog(blogName)
    } else if (action === "3") {
        let postTitle = await ask("What is your post title: ");
        const postContent = await ask("What will you post say: ");
        const blogName = await ask("What blog do you want to post to: ");
        await blogDirExists(blogName);
        const username = await ask("What is your username: ");
        await checkUser(username);

        if (await findPost(postTitle, blogName)) {
            let counter = 1;
            let newTitle = postTitle + counter;
            while(await findPost(newTitle, blogName)) {
                counter++;
                newTitle = postTitle + counter;
            }
            postTitle = newTitle;
            console.log(`Post title already exists. Using title: ${postTitle}`);
        }

        createAPost(postTitle, postContent, blogName, username)

    } else if (action === "4") {

        const blogName = await ask("What blog is the post in: ");
        await blogDirExists(blogName);

        const postTitle = await ask("What post do you want to like: ");
        const username = await ask("What is your username: ");

        if (!await checkUser(username)){
            throw new Error("That username does not exist!");
        }

        if (!await findPost(postTitle, blogName)) {
            throw new Error("That post does not exist!");
        }

        await likePost(blogName, postTitle, username);
        console.log(`You liked the post: ${postTitle}`);
    }
}



main()
>>>>>>> 4ee174ace2e1fb91021ded7aefc224af316c762b
