import express from "express";

import airplaneController from "../../controllers/airplaneController";

const airplaneRoutes = express.Router();

airplaneRoutes.get("/", airplaneController.getAirplanes);

airplaneRoutes.post("/create", airplaneController.createAirplane);

airplaneRoutes.put("/:id", airplaneController.updateAirplane);

airplaneRoutes.delete("/:id", airplaneController.removeAirplane);

export default airplaneRoutes;
