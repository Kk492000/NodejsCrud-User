const User = require("../model/userSchema");

exports.updateUser = async (req, res) => {
  try {
    //extrct id from request parameters
    const { id } = req.params;
    const { name, email } = req.body;

    console.log(email, "email");
    console.log(name, "name");

    //store in a variable and replace in the databse
    const response = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, updatedAt: Date.now() }
    );

    console.log(response);

    res.status(200).json({
      responseCode: 200,
      responseMessage: "User updated successfully",
      result: response,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      responseCode: 500,
      responseMessage: "Something went wrong",
    });
  }
};
