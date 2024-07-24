import express from "express";

import cityController from "../../controllers/cityController";

const cityRoutes = express.Router();

cityRoutes.get("/", cityController.getCities);

cityRoutes.get("/:id", cityController.getCity);

cityRoutes.post("/create", cityController.createCity);

cityRoutes.put("/:id", cityController.updateCity);

cityRoutes.delete("/:id", cityController.removeCity);

export default cityRoutes;
