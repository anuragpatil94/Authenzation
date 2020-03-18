import bcrypt from "bcrypt";

import { databaseConnection } from "../middleware/database";
import { Logger } from "../middleware/logger";
import { InternalServerError, ErrorHandler } from "../util";

export const createUser = async (username, password, details) => {
  try {
    // Create database Instance
    const db = await databaseConnection();

    // Create document to be inserted to the database
    const newUser = await createUserDocument(username, password, details);

    // Insert newUser to the database
    const insertOperation = await db.collection("users").insertOne(newUser);

    // Check if the data is inserted or not.
    if (!insertOperation.result.ok) {
      throw new InternalServerError("Cannot create user");
    }

    Logger.info("User document inserted in database");

    return insertOperation.insertedId;
  } catch (err) {
    throw err;
  }
};

export const findUser = async (username, password) => {};

export const findUserById = () => {};

export const findAllUsers = () => {};

/*
Helper Methods
*/

const createUserDocument = async (username, password, details) => {
  // Encrypt Password
  const { salt, hashedPassword } = await encryptPassword(password);

  // Todo: Maybe a better way to do this? and Remove hardcoding of `general`
  // User Document
  const user = {
    username,
    password: hashedPassword,
    details,
    salt,
    userLevel: "general",
    createdAt: new Date()
  };
  Logger.info("User document Created");
  // Logger.info(JSON.stringify(user, undefined, 4));
  return user;
};

const encryptPassword = async password => {
  // Salt Rounds to generate Salt
  const saltRounds = 10;

  // Generate Salt
  const salt = await bcrypt.genSalt(saltRounds);
  // Generate Hashed Password based on salt
  const hashedPassword = await bcrypt.hash(password, salt);

  return { salt, hashedPassword };
};
