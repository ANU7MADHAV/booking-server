import express, { Request, Response } from "express";

// import ping from "../controllers/pingController";
import v1Routes from "./v1";

const apiRoutes = express.Router();

// apiRoutes.get("/", ping);

apiRoutes.get("/", (_: Request, res: Response) => {
  return res.send("hello");
});

console.log("in api routes");

apiRoutes.use("/v1", v1Routes);

export default apiRoutes;
