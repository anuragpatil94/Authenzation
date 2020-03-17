import { userServices } from "../services";

export const signup = async (req, res, next) => {
  try {
    await userServices.createUser(req.body.data);
    res.status(200).json({ message: "This is Signup Route" });
  } catch (err) {
    res.status(400).json({ code: err.code, message: err.message });
  }
};
export const signin = async (req, res, next) => {
  const authType = req.body.authType;
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
