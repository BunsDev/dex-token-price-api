var express = require("express");
const apiConfig = require("./config/index");
const tokenPriceRouter = require("./routes/api/token-price");
const bodyParser = require("body-parser");
const cron = require('node-cron');
const job = require("./src/helpers/cronjob");
var cors = require('cors');

var app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use("/api/token-price", tokenPriceRouter);

const port = apiConfig.server.port || 8082;

try {
  cron.schedule('*/10 * * * *', function() {
    job.updateTokenPrices();
  });
} catch (error) {
  console.log(error);
}

app.listen(port, () => console.log(`Server running on port ${port}`));
