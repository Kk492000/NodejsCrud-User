const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL || "mongodb://localhost:27017/default")
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => {
      console.log(error);
      console.log("db failed");
    });
};

module.exports = dbConnect;
