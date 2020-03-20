import express from "express";
import colors from "colors";

import config from "./config";
import { Logger } from "./middleware/logger";

(async () => {
  if (process.env.NODE_ENV == "development") {
    Logger.info("App running on Development Environment");
  }

  // Get port from config
  let port = config.port;

  // Initiate express app
  const app = express();

  // Initiate loading middleware
  let middleware = await import("./middleware");
  await middleware.default({ app });

  // Start server on open port
  app.listen(port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    console.log(`Server started at http://localhost:${port}`);
  });
})();
