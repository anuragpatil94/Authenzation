import { userServices, authServices } from "../../services";
import { Logger } from "../../middleware/logger";
import { ErrorHandler, BadRequestError } from "../../util";

export const signup = async (req, res, next) => {
  try {
    // Get data from the request
    // FIXME Change this to single data object
    const { username, password, ...details } = req.body;

    // Check if user exist
    // FIXME: change the variable name
    const isUsernameAvailable = await authServices.isUsernameAvailable(
      username
    );

    // Handle duplicate user exception
    if (!isUsernameAvailable) {
      const message = "Username already exist!";
      Logger.warn(message);
      throw new ErrorHandler(400, message);
    }

    // Create new User
    const createdUserId = await userServices.createUser(
      username,
      password,
      details
    );

    // Check if UserId is Created.
    if (!createdUserId) {
      throw new Error("User not created!");
    }

    res.status(200).json({
      _id: createdUserId
    });
  } catch (err) {
    next(err);
  }
};
export const signin = async (req, res, next) => {
  const authType = req.headers.authType;
  const reqUsername = req.body.data.username;
  const reqPassword = req.body.data.password;

  const userFromDatabase = await userServices.findUser(
    reqUsername,
    reqPassword
  );

  res.status(200).json({ message: "This is Signin Route" });
};
export const logout = (req, res, next) => {
  res.status(200).json({ message: "This is Logout Route" });
};
