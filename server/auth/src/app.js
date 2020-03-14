import express from "express";

import config from "./config";
import { Logger } from "./middleware/logger";

(async () => {
  let port = config.PORT;

  // Initiate express app
  const app = express();

  let middleware = await import("./middleware");
  middleware.default({ app });

  app.listen(port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    console.log(`Server started at http://localhost:${port}`);
  });
})();
