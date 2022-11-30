import { Router } from "express";
import storesRouter from "./storesRouter.js";


const router = Router();

router.use(storesRouter);

export default router;