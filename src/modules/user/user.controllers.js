import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { AppError, catchAsyncError } from "../../utils/error.js";
import User from "../../../database/models/user.model.js";

export const signup = catchAsyncError(async (req, res) => {
  const { email, name, password } = req.body;

  const user = await User.findOne({ email });
  if (user) throw new AppError("email already exists", 401);

  const hashedPassword = bcrypt.hashSync(password, 8);
  await User.create({ name, email, password: hashedPassword });
  const token = jwt.sign({ email }, "secret2");

  await transporter.sendMail({
    to: email, // list of receivers
    subject: "Verify your Email ✔", // Subject line
    html: `<a href='http://localhost:3000/auth/verify/${token}'>Click here to confirm you email</a>`,
  });

  res.status(201).json({ message: "Signed Up Successfully" });
});

export const login = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new AppError("invalid email", 409);

  const isMatched = bcrypt.compareSync(password, user.password);
  if (!isMatched) throw new AppError("invalid password", 409);

  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    "secret"
  );
  res.json({ token });
});
export const verifyEmail = async (req, res) => {
  const token = req.params.token;

  jwt.verify(token, "secret2", async (err, decoded) => {
    if (err) return res.json({ message: "Invalid Token" });

    await User.findOneAndUpdate(
      { email: decoded.email },
      { emailConfirmed: true }
    );

    res.json({ message: "email Confirmed Successfully" });
  });
};
