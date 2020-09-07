const express = require("express");
const app = express();
const { logger } = require("./service/logs/logging");

app.listen(4150, () => {
  logger.info("Application is running on port 4150");
});
