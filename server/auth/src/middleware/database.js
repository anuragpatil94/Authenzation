import { MongoClient } from "mongodb";

import config from "../config";
import { Logger } from "./logger";
import { constants } from "../util";

export default async () => {
  try {
    const url = config.databaseConfig.mongoURI;
    const username = config.databaseConfig.mongoUser;
    const password = config.databaseConfig.mongoPassword;
    const databaseName = config.databaseConfig.mongoDbName;

    const mongoClient = new MongoClient(url, {
      useUnifiedTopology: true,
      appname: constants.APPNAME,
      authSource: databaseName,
      auth: { user: username, password: password }
    });

    await mongoClient.connect();
    const db = mongoClient.db(databaseName);

    if (!db) {
      throw new Error("Cannot connect to database");
    }
    
    return db;
  } catch (err) {
    Logger.error(err);
  }
};
