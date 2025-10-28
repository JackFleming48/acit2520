const express = require("express");
const ejs = require("ejs")
const { database, addTodo } = require("./database");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const { title } = req.body;
    res.render("index", { todos: database });
})

app.post("/todo", (req, res) => {
    addTodo(title);
    res.redirect("/")
})

app.listen(8000);
