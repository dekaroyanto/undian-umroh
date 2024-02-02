const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/models/db");
const app = express();
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerSumDocument = require("./swagger.json");

dotenv.config();
global.__basedir = __dirname;
const https = require("https");

const fs = require("fs");
const key = fs.readFileSync("./cert/TRI_SSL_07-09_2023_Private_Key.txt");
const cert = fs.readFileSync("./cert/TRI_SSL_07-09_2023_CACert-Bundle.txt");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api-docs-sum", swaggerUi.serve, swaggerUi.setup(swaggerSumDocument));

const server = https.createServer({ key, cert }, app);

const UserRoute = require("./src/routes/user.routes");
const history = require("./src/routes/history.routes");

// route
app.use("/umroh/user", UserRoute);
app.use("/umroh/hist", history);

//COMMIT
const port = 1501;
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port " + port);
  });
});
