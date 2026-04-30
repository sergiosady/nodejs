import { Router } from "express";
import login from "../controllers/authenticate.controller.js";

const authenticateRouter = Router();

authenticateRouter.post("/authenticate", login);

export default authenticateRouter;
