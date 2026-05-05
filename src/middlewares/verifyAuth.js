import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtSecret = process.env.JWT_SECRET;

const authorizationError = {
  error: "@Authorization/token-missing",
  message: "Invalid token",
};

export default function verifyAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json(authorizationError);
  }

  const [prefix, token] = authorization.split(" ");

  if (prefix !== "Bearer") {
    return res.status(401).json(authorizationError);
  }

  if (!token) {
    return res.status(401).json(authorizationError);
  }

  jwt.verify(token, jwtSecret, (error, decoded) => {
    if (error) {
      return res.status(401).json(authorizationError);
    }

    req.user = decoded;

    return next();
  });
}
