import cors from "cors";
import { setTimeout as sleep } from "node:timers/promises";
import express from "express";
import path from "node:path";
import morgan from "morgan";
import { addTip, dislike, getTips, like, remove } from "./data.js";

const app = express();
const PORT = 5000;

app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/tips", (req, res) => {
  const tips = getTips();
  res.json(tips);
});

// Create
app.post("/tips", async (req, res) => {
  //------------------------------------------------
  // (TODO WHEN YOU FINISH LAB): uncomment sleep function.
  // Even though your backend takes 4 seconds to insert the tip...
  // your frontend should still instantly display it when the user adds it.
  // This is the power of optimistic UI.
  await sleep(4000);
  // ----------------------------------------------.
  addTip(req.body.text)
  res.status(200).json({ status: "success" });
});

// Like/Dislike/Delete
app.post("/tips/:id/like", (req, res) => {
  like(req.params.id);
  res.status(200).json({ status: "success" });
});

app.post("/tips/:id/dislike", (req, res) => {

  dislike(req.params.id);
  res.status(200).json({ status: "success" });
});

app.post("/tips/:id/delete", (req, res) => {
  remove(req.params.id);
  res.status(200).json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`
🚀 http://localhost:${PORT}`);
});
