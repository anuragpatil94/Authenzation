import bodyParser, { json } from "body-parser";
import cors from "cors";

export default ({ app }) => {
  // status routes
  // TODO: Status Route
  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  // CORS Management
  app.use(cors());

  // Load body parsers
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(json());
};
