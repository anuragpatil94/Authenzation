import winston from "winston";

const APICallsLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(winston.format.cli())
    })
  ]
});

APICallsLogger.stream = {
  write: function(message, encoding) {
    APICallsLogger.info(message);
  }
};

export { APICallsLogger };
