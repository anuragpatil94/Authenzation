import express from "express";
import colors from "colors";

import config from "./config";
import { Logger } from "./middleware/logger";

(async () => {
  if (process.env.NODE_ENV == "development") {
    Logger.info("App running on Development Environment");
  }

  let port = config.port;

  // Initiate express app
  const app = express();

  let middleware = await import("./middleware");
  await middleware.default({ app });

  app.listen(port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    console.log(`Server started at http://localhost:${port}`);
  });
})();
