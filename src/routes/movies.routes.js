import { Router } from "express";
import movieController from "../controllers/movies.controller.js";

const moviesRouter = Router();

moviesRouter.post("/movies", movieController.create);
moviesRouter.get("/movies", movieController.findAll);
moviesRouter.get("/movies/:id", movieController.findById);
moviesRouter.put("/movies/:id", movieController.update);
moviesRouter.delete("/movies/:id", movieController.delete);

export default moviesRouter;
