import User from "../models/user.model.js";
import { compareHash } from "../utils/hashProvider.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const authError = {
  error: "@authenticate/login",
  message: "Invalid user or password",
};

export default async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password"); // INCLUI O PASSWORD NO RETORNO PARA COMPARAR HASH

  if (!user) {
    return res.status(400).json(authError);
  }

  const isValidPassword = await compareHash(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json(authError);
  }

  const token = jwt.sign({ user }, secret, {
    expiresIn: "1h",
  });

  return res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
}
