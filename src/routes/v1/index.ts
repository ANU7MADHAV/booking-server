import express, { Request, Response } from "express";

import airplaneRoutes from "./airplaneRoutes";
import cityRoutes from "./cityRoutes";
import airportRoutes from "./airportRoutes";
import cityRoutes from "./cityRoutes";

const v1Routes = express.Router();

console.log("in v1 routes");

v1Routes.get("/", (_: Request, res: Response) => {
  return res.send("hello");
});

v1Routes.use("/airplanes", airplaneRoutes);
v1Routes.use("/cities", cityRoutes);
v1Routes.use("/airports", airportRoutes);

export default v1Routes;
