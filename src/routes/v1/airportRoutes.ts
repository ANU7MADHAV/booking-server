import express from "express";

import airportController from "../../controllers/airportController";

const airportRoutes = express.Router();

airportRoutes.get("/", airportController.getAirports);

airportRoutes.get("/:id", airportController.getAirport);

airportRoutes.post("/create", airportController.createAirport);

airportRoutes.put("/:id", airportController.updateAirport);

airportRoutes.delete("/:id", airportController.removeAirport);

export default airportRoutes;
