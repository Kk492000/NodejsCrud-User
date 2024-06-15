const User = require("../model/userSchema");

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await User.findByIdAndDelete(id);

    res.status(200).json({
      responseCode: 200,
      responseMessage: "User deleted successfully",
      result: response,
    });
  } catch (error) {
    console.log(error);
  }
};
