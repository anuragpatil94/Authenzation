import express from "express";
import colors from "colors";

import config from "./config";
import { Logger } from "./middleware/logger";

(async () => {
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
