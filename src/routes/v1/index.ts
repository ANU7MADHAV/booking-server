import express, { Request, Response } from "express";

// import ping from "../../controllers/pingController";
import airplaneRoutes from "./airplaneRoutes";

const v1Routes = express.Router();

// v1Routes.get("/", ping);

console.log("in v1 routes");

v1Routes.get("/", (_: Request, res: Response) => {
  return res.send("hello");
});

v1Routes.use("/airplanes", airplaneRoutes);

export default v1Routes;
