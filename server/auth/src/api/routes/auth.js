import { Router } from "express";
import { AuthController } from "../../controllers";

const route = Router();

export default app => {
  app.use("/auth", route);

  route.post("/signup", AuthController.signup);

  route.post("/signin", AuthController.signin);

  route.post("/logout", AuthController.logout);
};
