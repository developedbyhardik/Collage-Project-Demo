import mongo from "mongodb";
import jwt from "jsonwebtoken";
import { createTokens } from "./tokens.js";

const { ObjectId } = mongo;
const { JWT_SIGNATURE, ROOT_DOMAIN } = process.env;

export async function getUserFromCookies(request, reply) {
  try {
    const { user, session } = await import("../data/data.js");
    //Check if accessToken is exists
    if (request?.cookies?.accessToken) {
      //if accessToken

      const { accessToken } = request.cookies;

      //decode accessToken
      const decodedAccessToken = jwt.verify(accessToken, JWT_SIGNATURE);

      //return user from record
      const { name, email } = await user.findOne({
        _id: ObjectId(decodedAccessToken?.userId),
      });
      return {
        name,
        email,
      };
    }

    //Check if refreshToken is exists
    else if (request?.cookies?.refreshToken) {
      //if refreshToken

      const { refreshToken } = request.cookies;

      //decode accessToken
      const decodedRefreshToken = jwt.verify(refreshToken, JWT_SIGNATURE);

      //return user from record
      const currentSession = await session.findOne({
        sessionToken: decodedRefreshToken?.sessionToken,
      });
      //confirm session is valid
      if (currentSession.valid) {
        //LookUp current User
        const { name, email } = await user.findOne({
          _id: currentSession.userId,
        });
        await refreshTokens(
          decodedRefreshToken.sessionToken,
          currentUser._id,
          reply
        );

        //return user
        return { name, email };
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}
export async function refreshTokens(sessionToken, userId, reply) {
  //Create Tokens
  const { accessToken, refreshToken } = await createTokens(
    sessionToken,
    userId
  );

  const now = new Date();
  //get 30 days added for expire refresh token
  const refreshExpires = now.setDate(now.getDate() + 30);

  //Set Cookie
  reply
    .setCookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      domain: ROOT_DOMAIN,
      expires: refreshExpires,
      secure: true,
    })
    .setCookie("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      domain: ROOT_DOMAIN,
      secure: true,
    });
}
