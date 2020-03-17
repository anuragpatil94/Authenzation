import { databaseConnection } from "../middleware/database";
import { authServices } from ".";

export const createUser = async data => {
  const count = await authServices.checkUsernameAvailability(data.username);
  if (!count) {
    throw new Error("Username Exists!");
  }
};

export const findUser = async (username, password) => {
  const db = await databaseConnection();
  db.collection("users").findOne({ username, password });
};

export const findUserById = () => {};

export const findAllUsers = () => {};
