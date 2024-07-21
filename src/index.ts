import express, { Request, Response } from "express";

import serverConfig from "./config/serverConfig";
import apiRoutes from "./routes";
import errorHandler from "./utils/errorHandler"; //

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (_: Request, res: Response) => {
  return res.send("hello");
});

app.use(errorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *${serverConfig.PORT}`);
});
