const User = require("../model/userSchema");

exports.createUser = async (req, res) => {
  try {
    //extract data from request ki body
    const { name, email } = req.body;

    //store in variable and save in database
    const response = await User.create({ name, email, createdAt: Date.now() });

    res.status(200).json({
      responseCode: 200,
      data: response,
      responseMessage: "User created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
