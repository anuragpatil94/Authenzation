import express from "express";

import config from "./config";
let port = config.PORT;

const app = express();

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
