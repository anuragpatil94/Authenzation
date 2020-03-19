import { Router } from "express";
import { APIControllers } from "..";

const route = Router();

export default app => {
  app.use("/auth", route);

  route.post("/signup", APIControllers.AuthController.signup);

  route.post("/signin", APIControllers.AuthController.signin);

  route.post("/logout", APIControllers.AuthController.logout);
};
