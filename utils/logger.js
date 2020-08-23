/**
 *  Utilidad para generar logs
 */
const logger = require("winston");
const { transports, format } = require("winston");
logger.configure({
  transports: [
    new transports.Console({
      handleExceptions: true,
      level: "debug",
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/log-api.log`,
      format: format.combine(
        format.simple(),
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.printf((info) => `[${info.level}][${info.timestamp}] ${info.message}`)
      ),
    }),
  ],
});

module.exports = logger;
