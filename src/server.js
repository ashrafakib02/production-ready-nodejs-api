import app from "./app.js";
import { port, nodeEnv, databaseUrl, jwtSecret } from "./config/env.js";

export  default {port, nodeEnv, databaseUrl, jwtSecret }

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});