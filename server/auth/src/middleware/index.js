import loadExpress from "./express";
import loadLoggers, { Logger } from "./logger";
import loadRoutes from "./routes";
export default async ({ app }) => {
  // Load Database
  //   Load Model

  // TODO: Add Logger
  // Load all middlewares

  // Load Express
  loadExpress({ app });
  Logger.debug("Loaded Initial Middlewares");
  loadLoggers({ app });
  Logger.debug("Loaded Request Logger");
  loadRoutes({ app });
  Logger.debug("Loaded Routes");
};
