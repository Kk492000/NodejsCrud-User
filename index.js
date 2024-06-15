const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const router = require("./routes/userRoute");

//server initiate
const app = express();

//middleware
app.use(express.json());

dbConnect();

//route use
app.use("/api/v1", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Connected to http://localhost:${PORT}`);
});
