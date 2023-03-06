const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const nodemailer = require("nodemailer");

fastify.register(cors, {
  origin: true,
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const mailSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        email: {
          type: "string",
          format: "email",
        },
        result: {
          type: "string",
        },
      },
      required: ["email", "result"],
    },
  },
};

fastify.post("/mail", mailSchema, async (request, reply) => {
  const { email, result } = request.body;

  try {
    await transporter.sendMail({
      from: '"career-choice" <career.choice@email.com>',
      to: email,
      subject: "your career choice result is",
      text: result,
    });
  } catch (error) {
    console.log(error);
  }

  reply.status(200);
});

async function start() {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start();
