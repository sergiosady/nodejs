import { Router } from "express";
import moviesController from "../controllers/movies.controller.js";
import verifyAuth from "../middlewares/verifyAuth.js";

const moviesRouter = Router();

moviesRouter.post("/movies", verifyAuth, moviesController.create);
moviesRouter.get("/movies", moviesController.findAll);
moviesRouter.get("/movies/:id", moviesController.findById);
moviesRouter.put("/movies/:id", verifyAuth, moviesController.update);
moviesRouter.delete("/movies/:id", verifyAuth, moviesController.delete);

export default moviesRouter;
