import app from "./app.js";
import { port } from "./config/env.js";

const PORT = Number(port) || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});