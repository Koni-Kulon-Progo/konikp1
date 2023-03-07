const cabor = require("./seed-data/cabor");
const atlitAnggar = require("./seed-data/anggar/atlitAnggar");
// import atlitAnggar from "./anggar/atlitAnggar";
// import pelatihAnggar from "./anggar/pelatihAnggar";
// import wasitAnggar from "./anggar/wasitAnggar";

require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await Promise.all(cabor.map((data) => prisma.cabor.create({ data: data })));

  // Atlit anggar
  await Promise.all(
    atlitAnggar.map((data) => prisma.atlit.create({ data: data }))
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
