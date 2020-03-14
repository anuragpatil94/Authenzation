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
  const myMorgan = morgan(
    (tokens, req, res) => {
      return JSON.stringify({
        id: tokens.id(req, res),
        method: tokens.method(req, res),
        url: tokens.url(req, res),
        status: tokens.status(req, res),
        date: tokens.date(req, res),
        referrer: tokens.referrer(req, res),
        responseTime: tokens["response-time"](req, res),
        remoteAddr: tokens["remote-addr"](req, res),
        remoteUser: tokens["remote-user"](req, res),
        httpVersion: tokens["http-version"](req, res),
        userAgent: tokens["user-agent"](req, res)
      });
    },
    { stream: Logger.stream }
  );

  app.use(myMorgan);
};

// Load Loggers

const Logger = winston.createLogger({
  // Format for all transports
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    })
  ),
  transports: [
    new winston.transports.Console(
      // Here is basically says that transport to console only if the log is of level="info"
      {
        format: format.combine(
          format.printf(requestInfo => {
            const message = JSON.parse(requestInfo.message);
            const {
              referrer,
              remoteAddr,
              remoteUser,
              httpVersion,
              userAgent,
              ...args
            } = message;

            requestInfo.message = args;

            return `${requestInfo.level}: ${JSON.stringify(
              requestInfo,
              undefined,
              4
            )}`;
          }),
          format.label({ label: "REQUEST" }),
          format.colorize({
            message: true,
            colors: {
              all: "yellow"
            }
          })
        ),

        level: "info"
      }
    )
  ]
});

Logger.stream = {
  write: function(message) {
    Logger.info(message);
  }
};

export { Logger };
