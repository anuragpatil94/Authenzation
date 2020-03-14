import loadExpress from "./express";
import loadLoggers from "./logger";
import loadRoutes from "./routes";
export default async ({ app }) => {
  // Load Database
  //   Load Model

  // TODO: Add Logger
  // Load all middlewares

  // Load Express
  loadExpress({ app });
  loadLoggers({ app });
  loadRoutes({ app });
};
