import "dotenv";
import { PrismaClient } from "@prisma/client";

let prisma;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient({
      datasources: {
        db: {
          provider: "postgresql",
          url: process.env.DATABASE_URL,
        },
      },
    });
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({});
    }

    prisma = global.prisma;
  }
}

export default prisma;
