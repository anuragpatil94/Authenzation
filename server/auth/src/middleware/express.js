import bodyParser, { json } from "body-parser";
import cors from "cors";

export default ({ app }) => {
  // status routes
  app.get("/status", (req, res) => {
    res.status(200).send({ message: "The server is running!" });
  });

  // CORS Management
  app.use(cors());

  // Load body parsers
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(json());
};
