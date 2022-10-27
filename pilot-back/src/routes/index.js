import { Router } from "express";
import genericRouter from "./genericRouter.js";


const router = Router();

router.use(genericRouter);

export default router;