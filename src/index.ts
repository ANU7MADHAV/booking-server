import express, { Request, Response } from "express";

import serverConfig from "./config/serverConfig";
import apiRoutes from "./routes";

const app = express();

app.use("/api", apiRoutes);

app.get("/", (_: Request, res: Response) => {
  return res.send("hello");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *${serverConfig.PORT}`);
});
