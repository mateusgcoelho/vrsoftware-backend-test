import "express-async-errors";
import "dotenv/config";

import express from "express";
import cors from "cors";

import ErrorMiddleware from "./middlewares/error_middleware";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1", routes);

app.use(ErrorMiddleware);

export { app };
