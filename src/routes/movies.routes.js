import { Router } from "express";
import moviesController from "../controllers/movies.controller.js";

const moviesRouter = Router();

moviesRouter.post("/movies", moviesController.create);
moviesRouter.get("/movies", moviesController.findAll);
moviesRouter.get("/movies/:id", moviesController.findById);
moviesRouter.put("/movies/:id", moviesController.update);
moviesRouter.delete("/movies/:id", moviesController.delete);

export default moviesRouter;
