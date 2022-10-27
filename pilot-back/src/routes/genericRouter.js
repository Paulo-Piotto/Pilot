import { Router } from "express";
import * as genericController from "../controllers/genericController.js";
import * as genericMiddleware from "../middlewares/genericMiddleware.js";

const genericRouter = Router();
const PATH = "/generic";

genericRouter.post(`${PATH}`,
  genericMiddleware.test,
  genericController.post
);

genericRouter.get(
  `${PATH}/`,
  genericMiddleware.test,
  genericController.findAll
);

genericRouter.get(
  `${PATH}/:name`,
  genericMiddleware.test,
  genericController.find
);

export default genericRouter;