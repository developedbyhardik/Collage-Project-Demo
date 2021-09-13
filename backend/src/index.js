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

        if (res.registered) {
          await logUserIn(res.userId, request, reply);
          reply.send({
            data: {
              registered: true,
              status: "SUCCESS",
              user: {
                name: request.body.name,
                email: request.body.email,
              },
            },
          });
        }

        reply.send({
          data: { registered: false, status: "User Already Exists" },
        });
      } catch (error) {
        console.error(error);
      }
    });

    app.post("/api/authorize", {}, async (request, reply) => {
      try {
        const { isAuthorized, userId,userName } = await authorizeUser(
          request.body.email,
          request.body.password
        );

        if (isAuthorized) {
          await logUserIn(userId, request, reply);
          reply.send({
            data: {
              login: true,
              status: "SUCCESS",
              user:{
                name:userName,
                email:request.body.email
              }
            },
          });
        }

        reply.send({
          data: { login: false, status: "Incorrect Email / Password" },
        });
      } catch (error) {
        console.error(error);
      }
    });

    app.get("/test", {}, async (request, reply) => {
      try {
        //varify user login
        const user = await getUserFromCookies(request, reply);
        if (user?.name) {
          reply.send({
            login:true,
            data: user,
          });
        } else {
          reply.send({
            login:false,
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
