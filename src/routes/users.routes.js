import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.post("/users", usersController.create);
usersRouter.get("/users", usersController.findAll);
usersRouter.get("/users/:id", usersController.findById);
usersRouter.put("/users/:id", usersController.update);
usersRouter.delete("/users/:id", usersController.delete);

export default usersRouter;
