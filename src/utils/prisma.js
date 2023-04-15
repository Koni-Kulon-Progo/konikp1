import "dotenv";
import { PrismaClient } from "@prisma/client";

let prisma;

if (typeof window === "undefined") {
  if (process.env.APP_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({});
    }

    prisma = global.prisma;
  }
}

export default prisma;
