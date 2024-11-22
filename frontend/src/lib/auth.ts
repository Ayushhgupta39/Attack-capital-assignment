import { jwtVerify } from "jose";

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload;
  } catch (error) {
    console.log("Error while verifying JWT Token :", (error as Error).message);
    return null;
  }
};

export const isAuthenticated = async (token: string) => {
  const decoded = await verifyToken(token);
  return !!decoded;
};
