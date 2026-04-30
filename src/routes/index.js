import { Router } from "express";
import moviesRouter from "./movies.routes.js";
import usersRouter from "./users.routes..js";
import authenticateRouter from "./authenticate.routes.js";

const router = Router();

router.use(moviesRouter);
router.use(usersRouter);
router.use(authenticateRouter);

export default router;
