import error = require("node:console");
import console = require("node:console");
import nodeFs = require("node:fs");
import fs = require("node:fs/promises");
import path = require("node:path");
import Readline = require("node:readline/promises");



// Handles asking users questions to create, edit, and add to data
async function ask(question: string): Promise<string> {
    const rl = Readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const answer = await rl.question(question);
    rl.close()
    return answer;
}

// what would the user like to do?
async function userAction(): Promise<string>{
    const rl = Readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await rl.question("What would you like to do?\n1. Register a user\n2. Create a blog\n3. Create a post\n4. Like a post\n");
    rl.close();
    return answer

}

// create a post under a blogname
async function createAPost(postTitle: string, postContent: string, blogName: string, username: string){
    
    const filteredBName = blogName.replaceAll(" ", "_");
    const filteredTitle = postTitle.replaceAll(" ", "_");
    const filteredPostContent = {
        likeCount: 1,
        likedBy: [username],
        content: postContent
    }

    await fs.writeFile(path.join(__dirname, `../blogs/${filteredBName}/${filteredTitle}.txt`), JSON.stringify(filteredPostContent, null, 2), { encoding: "utf-8" })


};

// like a post
async function likePost(blogName: string, postTitle: string, username: string){
    const filteredBName = blogName.replaceAll(" ", "_");
    const filteredTitle = postTitle.replaceAll(" ", "_");
    const dirPath = path.join(__dirname, "../blogs");

    try {
        const data = await fs.readFile((`${dirPath}/${filteredBName}/${filteredTitle}.txt`), { encoding: "utf-8" });
        const postData = await JSON.parse(data)
        postData.likeCount += 1;
        postData.likedBy.push(username);
        await fs.writeFile((`${dirPath}/${filteredBName}/${filteredTitle}.txt`), JSON.stringify(postData, null, 2), { encoding: "utf-8" });                                                                
    } catch(error) {
        console.error(error)
    }
}

// find the existing post
async function findPost(postTitle: string, blogName: string): Promise<boolean>{
    const dirPath = path.join(__dirname, "../blogs");
    const filteredBName = blogName.replaceAll(" ", "_");
    const filteredTitle = postTitle.replaceAll(" ", "_");

    try {
        await fs.access(`${dirPath}/${filteredBName}/${filteredTitle}.txt`);
        return true
    } catch (error) {
        return false
    };

};

// ensures container "blogs" dir exists and calls createBlogDir to create actual blogDir
async function createaABlog(blogName: string){
    
    if (!blogName) {
        throw new Error("Blog name is missing!")
    }
    await createBlogDir(blogName)
}

// creates a container dir for blogs to go inside, this is just for neat structure
async function createBlogsContainer() {
    const blogsDir = path.join(__dirname, "../blogs")

    try {
        fs.access(blogsDir)
        return
    } catch(error) {
        await fs.mkdir(blogsDir, { recursive: true })

    }
}

// creates a blogdir with specified name after blogDirExists
async function createBlogDir(blogName: string) {
    const filteredTitle = blogName.replaceAll(" ", "_")
    if (!await blogDirExists(filteredTitle)) {
        const blogDir = path.join(__dirname, `../blogs/${filteredTitle}`)
        await fs.mkdir(blogDir)
    } else {
        throw new Error("That blogname already exists, choose a new name")
    }
}

// evaluates if a blogdir exists with that blogname
async function blogDirExists(blogName: string) {
    const dirPath = path.join(__dirname, `../blogs/${blogName}`);
    try {
        await fs.access(dirPath);
        return true;
    } catch (error) {
        return false
    }
}

async function register(username: string, password: string) {
    const dirPath = path.join(__dirname, "../dataFile");
    await mkDir()
    const dbExists = await checkDatabaseExists(dirPath)
    if (!dbExists) {
        await fs.writeFile(`${dirPath}/database.txt`, "", { encoding: "utf-8" })
    }
    await appendDatabaseFile(dirPath, username, password);
}

// checking if username exists in database.txt
async function checkUser(username: string): Promise<boolean>{
    const dirPath = path.join(__dirname, "../dataFile");
    const data = await fs.readFile(path.join(dirPath, 'database.txt'), { encoding: "utf-8" });
    const indexedData = data.split("\n").filter(row => row.length > 0).map(row => row.trim().split(","));
    return indexedData.some(row => row[0] === username)
}

// make directory for database.txt called dataFile in parent dir of src
async function mkDir(){

    const projectFolder = path.join(__dirname, "../dataFile");
    const dirCreation = await fs.mkdir(projectFolder, { recursive: true });
    return dirCreation;

}

// checks to see if database.txt exists to either write or append
async function checkDatabaseExists(dirPath: string) {

    try {
        await fs.access(`${dirPath}/database.txt`)
        return true
    } catch (error) {
        return false
    }

}

// function is ran if db exists
async function appendDatabaseFile(path: string, username: string, password: string) { 

    if (!username || !password) {
        throw new Error("Missing data!");
    } 
    

    if (await checkUser(username)) {
        console.log("Username already exists in the database.")
        return;
    }

    await fs.appendFile(`${path}/database.txt`, `${username},${password}\n`, { encoding: 'utf-8' })
}

module.exports = {createBlogsContainer, userAction, register, createaABlog, blogDirExists, checkUser, findPost, createAPost, ask, likePost }