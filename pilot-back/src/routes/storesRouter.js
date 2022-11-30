import { Router } from "express";
import * as storesController from "../controllers/storesController.js";
import * as schemaValidationMiddleware from '../middlewares/schemaValidationMiddleware.js'
import storeSchema from "../schemas/storeSchema.js";

const storeRouter = Router();
const PATH = "/stores";

storeRouter.post(`${PATH}`,
  (req, res, next) => schemaValidationMiddleware.test(req, res, next, storeSchema),
  storesController.post
);

storeRouter.get(`${PATH}`,
  storesController.find
);

export default storeRouter;