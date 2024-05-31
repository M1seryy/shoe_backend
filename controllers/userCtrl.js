const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/userSchema");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserSchema.findOne({ email });
    //if 0 find it will returns NULL
    if (user === null) {
      return res.status(404).json({ message: "Email or password is wrong" });
    }
    const isPasswordValid = crypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        status: 401,
        message: "Email or password is wrong",
      });
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.send({ email, token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const currentUserInfo = async (req, res, next) => {
  const { token } = req.body;
  console.log("req.body: ", req.body);
  const decoded = jwt.decode(token);
  res.send({
    data: decoded,
  });
};

module.exports = {
  login,
  currentUserInfo,
};
