import bcrypt from "bcrypt";

import { databaseConnection } from "../middleware/database";
import { Logger } from "../middleware/logger";
import { InternalServerError, constants } from "../util";

const COLLECTION = constants.COLLECTION.USERS;

export const createUser = async userData => {
  try {
    // Create database Instance
    const db = await databaseConnection();

    // Create document to be inserted to the database
    const newUser = await createUserDocument(userData);

    // Insert newUser to the database
    const insertOperation = await db.collection(COLLECTION).insertOne(newUser);

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

const createUserDocument = async ({ username, password, ...details }) => {
  // Encrypt Password
  const { salt, hashedPassword } = await encryptPassword(password);

  // User Document
  const user = {
    username,
    password: hashedPassword,
    details,
    salt,
    userLevel: constants.USER.USERLEVEL.GENERAL,
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
