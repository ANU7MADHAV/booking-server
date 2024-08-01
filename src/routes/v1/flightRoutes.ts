import express from "express";

import createFlight from "../../controllers/flightController";

const flightRoutes = express.Router();

flightRoutes.post("/create", createFlight);

export default flightRoutes;
