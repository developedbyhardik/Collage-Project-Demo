// ESM Specific Stuff
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Fastify File
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import fastifyCors from "fastify-cors";
import fastifyCookie from "fastify-cookie";

import "./env.js";
import { connectDB } from "./db.js";
import { registerUser } from "./account/registerUser.js";
import { authorizeUser } from "./account/authorize.js";
import { logUserIn } from "./account/logUserIn.js";
import {getUserFromCookies} from './account/user.js'

const app = fastify();

async function startApp() {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });
    app.register(fastifyCors, {
      origin: [/\.hardik.dev/, "https://hardik.dev"],
      credentials: true,
    });
    app.register(fastifyCookie, {
      secret: process.env.COOKIE_SIGNATURE,
    });

    app.post("/api/register", {}, async (request, reply) => {
      try {
        const res = await registerUser(
          request.body.name,
          request.body.email,
          request.body.password
        );

        await logUserIn(res.userId, request, reply);
        reply.send({
          data: {
            status: "SUCCESS",
            userId:res.userId,
          },
        });

      } catch (error) {
        console.error(error);
      }
    });

    app.post("/api/authorize", {}, async (request, reply) => {
      try {
        const { isAuthorized, userId } = await authorizeUser(
          request.body.email,
          request.body.password
        );

        if (isAuthorized) {
          await logUserIn(userId, request, reply);
          reply.send({
            data: "User Logged In",
          });
        }

        reply.send({
          data: "Auth Failed",
        });
      } catch (error) {
        console.error(error);
      }
    });

    app.post("/test", {}, async (request, reply) => {
      try {
        //varify user login
        const user = await getUserFromCookies(request, reply);
        console.log('user:', user)
        if (user?._id) {
          reply.send({
            data: user,
          });
        } else {
          reply.send({
            data: "User LookUp Failed",
          });
        }
      } catch (error) {
        throw new Error(error);
      }
    });

    await app.listen(3000);
    console.log("🚀🚀");
  } catch (error) {
    console.error(error);
  }
}

connectDB().then(() => startApp());
