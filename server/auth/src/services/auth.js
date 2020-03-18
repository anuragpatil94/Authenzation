import { databaseConnection } from "../middleware/database";
import { Logger } from "../middleware/logger";

export const createUser = () => {};

export const isUsernameAvailable = async username => {
  try {
    const db = await databaseConnection();

    // TODO: Remove this later. added for testing.
    // await db.collection("users").deleteOne({ username: username });

    const count = await db
      .collection("users")
      .countDocuments({ username }, { limit: 1 });

    if (count) return false;
    return true;
  } catch (error) {
    Logger.error(error.message);
  }
};
