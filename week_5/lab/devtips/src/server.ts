import express from "express";
import path from "node:path";
import morgan from "morgan";
import { addTip, dislike, getTips, like, remove } from "./data";

const app = express();
const PORT = 3000;

// Use EJS Instead of HTML
app.set("view engine", "ejs");

// Use Morgan for Logging
app.use(morgan("dev"));

// Get Access to Incoming Form Data using req.body
app.use(express.urlencoded({ extended: true }));

// Serve static content like css or site logo from public
app.use(express.static("public"));

app.get("/", (req, res) => {
  const tips = getTips();
  res.render("index", { tips });
});

// Create
app.post("/tips", (req, res) => {
  // TODO: 🚀 Get incoming tip text from form
  const tipToPost = req.body.text
  // TODO: 🚀 Check if it's empty.
    if (tipToPost) {
  // TODO: 🚀 If it's not empty, send it to addTip() function.
    addTip(tipToPost)
  }
  // TODO: 🚀 redirect to homepage
    res.redirect("/")

});

// Like/Dislike/Delete
app.post("/tips/:id/like", (req, res) => {
  // TODO: 🚀 get id from url params and feed to like function
  like(req.params.id)
  // TODO: 🚀 redirect to homepage
  res.redirect("/")
});

app.post("/tips/:id/dislike", (req, res) => {
  // TODO: 🚀 get id from url params and feed to dislike function
  dislike(req.params.id)
  // TODO: 🚀 redirect to homepage
  res.redirect("/")
});

app.post("/tips/:id/delete", (req, res) => {
  // TODO: 🚀 get id from url params and feed to delete function
  remove(req.params.id)
  // TODO: 🚀 redirect to homepage
  res.redirect("/")
});

app.listen(PORT, () => {
  console.log(`
🚀 http://localhost:${PORT}`);
});
