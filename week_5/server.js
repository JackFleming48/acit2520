const express = require("express");

const server = express();
// server.use(express.static("public"));
server.use(express.urlencoded());
server.set("view engine", "ejs");

server.get("/", (req, res) => {
    const username = "john123";
    //  TODO: html -> ejs -> (jsx -> tsx) eventually
    // use sendFile with the file and the var to send into file.
    // don't use sendFile with ejs
    res.render("index", { username });
});

server.get("/contact", (req, res) => {
    const username = "john123";
    //  TODO: html -> ejs -> (jsx -> tsx) eventually
    // use sendFile with the file and the var to send into file.
    // don't use sendFile with ejs
    res.render("contact");
});

server.post("/contact", (req, res) => {
    const email = req.body.email;
    console.log(email);
    res.redirect("/")
});

server.listen(8000);
console.log("Server is running!");
// ! http://localhost:8000