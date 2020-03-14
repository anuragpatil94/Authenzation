import morgan from "morgan";
import winston, { format } from "winston";
import { v4 as uuidv4 } from "uuid";

export default ({ app }) => {
  // Adding id for each log
  morgan.token("id", req => req.id);

  // Added Id for each request that goes through express
  app.use((req, res, next) => {
    req.id = uuidv4();
    next();
  });

  //Regex for user-agent future use - /(mozilla|AppleWebKit|firefox|msie|chrome|safari)[/\s]([\d.]+)/g

  /**
   * Custom morgan log -> stream to winston
   */
  const morganLogger = morgan(
    (tokens, req, res) => {
      return [
        tokens.id(req, res),
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.date(req, res),
        tokens.referrer(req, res),
        tokens["response-time"](req, res),
        tokens["remote-addr"](req, res),
        tokens["remote-user"](req, res),
        tokens["http-version"](req, res),
        tokens["user-agent"](req, res)
      ].join(" | ");
    },
    { stream: RequestLogger.stream }
  );

  app.use(morganLogger);
};

// Load Loggers

const RequestLogger = winston.createLogger({
  // Format for all transports
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(info => {
      const { level, ...args } = info;
      return `${level}: ${JSON.stringify(args, undefined, 4)}`;
    })
  ),
  transports: [
    new winston.transports.Console(
      // Here is basically says that transport to console only if the log is of level="given"
      {
        format: format.combine(
          format.label({ label: "REQUEST" }),
          format.colorize({
            colors: {
              info: "yellow"
            },
            all: true
          })
        ),

        level: "info"
      }
    )
  ]
});

RequestLogger.stream = {
  write: function(message) {
    RequestLogger.info(message);
  }
};

export { RequestLogger };
