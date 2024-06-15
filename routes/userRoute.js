const express = require("express");

//intiantiate
const router = express.Router();

//map
const { createUser } = require("../controllers/createUser");
const { getUsers, getUserById } = require("../controllers/getUsers");
const { updateUser } = require("../controllers/updateUser");
const { deleteUser } = require("../controllers/deleteUser");

//routes
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.get("/getSingleUser/:id", getUserById);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

//export
module.exports = router;
