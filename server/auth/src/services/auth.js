import { databaseConnection } from "../middleware/database";
import { Logger } from "../middleware/logger";
import { constants } from "../util";

const COLLECTION = constants.COLLECTION.USERS;

export const isUsernameAvailable = async username => {
  try {
    const db = await databaseConnection();

    // TODO: Remove this later. added for testing.
    // await db.collection(COLLECTION).deleteOne({ username: username });

    const count = await db
      .collection(COLLECTION)
      .countDocuments({ username }, { limit: 1 });

    if (count) return false;
    return true;
  } catch (error) {
    Logger.error(error.message);
  }
};
