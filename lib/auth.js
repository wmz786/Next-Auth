import { hash, compare } from "bcryptjs";

export async function hashPassword(p) {
  try {
    const hashedPassword = await hash(p, 12);
    return hashedPassword;
  } catch (error) {
    console.log("hash" + error);
  }
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
