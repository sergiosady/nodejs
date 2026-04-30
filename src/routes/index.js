import { Router } from "express";
import moviesRouter from "./movies.routes.js";
import usersRouter from "./users.routes..js";

const router = Router();

router.use(moviesRouter);
router.use(usersRouter);

export default router;
