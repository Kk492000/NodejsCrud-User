const User = require("../model/userSchema");

exports.getUsers = async (req, res) => {
  try {
    const response = await User.find({});

    res.status(200).json({
      responseCode: 200,
      responseMessage: "Useers fetched successfully",
      result: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      responseCode: 500,
      responseMessage: "Internal Server error",
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findById(id);

    res.status(200).json({
      responseCode: 200,
      responseMessage: "User fetched successfully",
      result: response,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      responseCode: 200,
      responseMessage: "User fetched successfully",
    });
  }
};
