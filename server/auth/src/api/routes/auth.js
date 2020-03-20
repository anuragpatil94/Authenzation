import { Router } from "express";
import { APIControllers } from "..";
import { SchemaValidator } from "../middlewares";
import { constants } from "../../util";

const route = Router();

export default app => {
  const { SELF, SIGNUP, SIGNIN } = constants.ROUTES.AUTH;

  app.use(SELF, route);

  /**
   * Route /signup
   */
  route.post(SIGNUP, SchemaValidator, APIControllers.AuthController.signup);

  /**
   * Route /signin
   */
  route.post(SIGNIN, APIControllers.AuthController.signin);
};
