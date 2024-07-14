import express from "express";

import airplaneController from "../../controllers/airplaneController";
import ping from "../../controllers/pingController";

const airplaneRoutes = express.Router();

airplaneRoutes.get("/", ping);

airplaneRoutes.post("/create", airplaneController.createAirplane);

export default airplaneRoutes;
