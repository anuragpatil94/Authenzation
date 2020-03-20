import { Router } from "express";
import { APIControllers } from "..";
import { SchemaValidator } from "../middlewares";

const route = Router();

export default app => {
  // TODO: Add Routes in constants file
  app.use("/auth", route);

  route.post("/signup", SchemaValidator, APIControllers.AuthController.signup);

  route.post("/signin", APIControllers.AuthController.signin);

  route.post("/logout", APIControllers.AuthController.logout);
};
