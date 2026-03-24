import express, { json } from "express";
import router from "./routes/index.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later"
  }
});

app.use(limiter);
app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "API is running fine" }); 
});
app.use("/api/v1", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorMiddleware);

export default app;