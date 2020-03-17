import configs from "../config";
import routes from "../api/routes";

export default ({ app }) => {
  app.use(configs.routesConfig.routePrefix, routes());

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by jwt
     */
    if (err.name === "UnauthorizedError") {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.sendStatus(err.status || 500).json({
      errors: {
        message: err.message
      }
    });
  });
};
