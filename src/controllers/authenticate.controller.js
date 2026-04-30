import usersRepository from "../repositories/users.repository.js";
import { compareHash } from "../utils/hashProvider.js";
import jwt from "jsonwebtoken";

const authError = {
  error: "@authenticate/login",
  message: "Invalid user or password",
};

export default async function login(req, res) {
  const { email, password } = req.body;
  const user = await usersRepository
    .findAll()
    .find((user) => user.email === email);

  if (!user) {
    return res.status(400).json(authError);
  }

  const isValidPassword = await compareHash(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json(authError);
  }

  const token = jwt.sign({ user }, "c714d659dbd91a4e3969a4fdd527464d", {
    expiresIn: "1h",
  });

  return res.status(200).json({ ...user, token }); // Mescla o token dentro da propriedade user(não adiciona como uma propriedade separada)
}
