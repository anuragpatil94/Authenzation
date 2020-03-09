import bodyParser, { json } from "body-parser";
import cors from "cors";
import morgan from "morgan";
import winston from "winston";

export default expressApp => {
  // CORS Management
  expressApp.use(cors);

  // Load body parsers
  expressApp.use(bodyParser.urlencoded({ extended: false }));
  expressApp.use(json());

  // TODO: Connect to Routes

  //   Error Handling Routes
};
