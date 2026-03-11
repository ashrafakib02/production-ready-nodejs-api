import express, { json } from "express";
import router from "./routes/index.js";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "API is running fine" }); 
});
app.use("/api/v1", router);

export default app;