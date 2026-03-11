import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "API is running fine" });
});

export default app;