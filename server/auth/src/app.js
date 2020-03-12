import express from "express";

import config from "./config";

(async () => {
  let port = config.PORT;

  // Initiate express app
  const app = express();

  let middleware = await import("./middleware");
  middleware.default({ app });

  app.listen(port, err => {
    // TODO: Handle Error
    // TODO: Add Logger
    console.log(`Server started at http://localhost:${port}`);
  });
})();
