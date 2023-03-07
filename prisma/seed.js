import cabor from "./seed-data/cabor";
// import atlitAnggar from "./anggar/atlitAnggar";
// import pelatihAnggar from "./anggar/pelatihAnggar";
// import wasitAnggar from "./anggar/wasitAnggar";

require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await Promise.all(cabor.map((data) => prisma.cabor.create({ data: data })));

  // const aa = atlit.map((data) => {
  //   return prisma.atlit.create({ data: data });
  // });
  // await Promise.all(aa);

  // const pa = pelatihAnggar.map((data) => {
  //   return prisma.pelatih.create({ data: data });
  // });
  // await Promise.all(pa);
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
