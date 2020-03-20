import _ from "lodash";

import { Logger } from "../../middleware/logger";
import Schema from "./Schema";
import { ErrorHandler } from "../../util";

export const SchemaValidator = async (req, res, next) => {
  try {
    Logger.info("Validating Schema");
    // enabled HTTP methods for request data validation
    const _supportedMethods = ["get", "post", "put"];

    // Joi validation options
    const _validationOptions = {
      abortEarly: false, // abort after the last validation error
      allowUnknown: true, // allow unknown keys that will be ignored
      stripUnknown: true // remove unknown keys from the validated data
    };

    // Used as a mapper for retieving schema
    const route = req.route.path;

    const method = req.method.toLowerCase();

    if (_.includes(_supportedMethods, method) && _.has(Schema, route)) {
      // get schema for the current route
      const _schema = _.get(Schema, route);

      if (_schema) {
        // Validate req.body using the schema and validation options
        const data = await _schema.validateAsync(req.body, _validationOptions);

        console.log(data);

        // Replace req.body with the data after Joi validation
        req.body = data;
        next();
      }
    } else {
      next();
    }
  } catch (err) {
    next(
      new ErrorHandler(
        422,
        "Invalid request data. Please review request and try again."
      )
    );
  }
};
