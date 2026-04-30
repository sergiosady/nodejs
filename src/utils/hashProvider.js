import { compare, hash } from "bcryptjs";

export async function generateHash(password) {
  return hash(password, 8);
}

export async function compareHash(password, hashedPassword) {
  return compare(password, hashedPassword);
}
