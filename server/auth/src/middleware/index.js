import loadExpress from "./express";
import loadLoggers, { Logger } from "./logger";
import loadRoutes from "./routes";
import mongoConnection from "./database";
export default async ({ app }) => {
  // Load Database
  const db = await mongoConnection();
  if (db) {
    Logger.debug("Loaded And Connected Database!");
  }
  //   Load Model

  // TODO: Add Logger
  // Load all middlewares

  // Load Express
  loadExpress({ app });
  Logger.debug("Loaded Express Initial Middlewares");
  loadLoggers({ app });
  Logger.debug("Loaded Request Logger");
  loadRoutes({ app });
  Logger.debug("Loaded Routes");
};
