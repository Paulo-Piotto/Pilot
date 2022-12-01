import { Router } from "express";
import storesRouter from "./storesRouter.js";
import clientsRouter from "./clientsRouter.js";


const router = Router();

router.use(storesRouter);
router.use(clientsRouter);

export default router;