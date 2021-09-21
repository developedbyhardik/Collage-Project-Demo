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
import { getUserFromCookies } from "./account/user.js";
import {logUserOut} from './account/logUserOut.js'

const app = fastify();

async function startApp() {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });
    app.register(fastifyCors, {
      origin: [/\.localhost:3000/, "http://localhost:3000"],
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

        if (res.registered) {
          reply.send({
            registered: true,
            data: {
              name: request.body.name,
              email: request.body.email,
            },
          });
        }

        reply.send({
          data: { registered: false, data: {} },
        });
      } catch (error) {
        console.error(error);
      }
    });

    app.post("/api/authorize", {}, async (request, reply) => {
      try {
        const { isAuthorized, userId, userName } = await authorizeUser(
          request.body.email,
          request.body.password
        );

        if (isAuthorized) {
          await logUserIn(userId, request, reply);
          reply.send({
            login: true,

            data: {
              name: userName,
              email: request.body.email,
            },
          });
        }

        reply.send({
          login: false,
          data: {},
        });
      } catch (error) {
        console.error(error);
      }
    });

    app.post("/api/logout", {}, async (request, reply) => {
      try {
        await logUserOut(request, reply);
        reply.send({
          logout:true
        });
      } catch (error) {
        console.error(error);
        reply.send({
          logout:false,
        });
      }
    });

    app.get("/test", {}, async (request, reply) => {
      try {
        //varify user login
        const user = await getUserFromCookies(request, reply);
        if (user?.name) {
          reply.send({
            login: true,
            data: user,
          });
        } else {
          reply.send({
            login: false,
            data: "User LookUp Failed",
          });
        }
        reply.send({
          login: false,
          data: {},
        });
      } catch (error) {
        throw new Error(error);
      }
    });

    await app.listen(5000);
    console.log("🚀🚀");
  } catch (error) {
    console.error(error);
  }
}

connectDB().then(() => startApp());
