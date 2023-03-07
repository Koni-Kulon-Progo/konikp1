const excelToJson = require("convert-excel-to-json");
const path = require("path");
const cabor = require("./seed-data/cabor");

require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function normalizeAndConcat(obj) {
  return Object.keys(obj)
    .map((key) => obj[key])
    .flat();
}

async function main() {
  await Promise.all(cabor.map((data) => prisma.cabor.create({ data: data })));

  // Atlit
  const athletes = excelToJson({
    sourceFile: path.join(__dirname, "seed-data", "dataAtlit.xlsx"),
    header: {
      rows: 1,
    },
    columnToKey: {
      A: "nama",
      B: "alamat",
      C: "ttl",
      D: "telephone",
      E: "gender",
      F: "cabor_id",
    },
  });

  await Promise.all(
    normalizeAndConcat(athletes).map((athelete) =>
      prisma.atlit.create({ data: athelete })
    )
  );

  // Wasit
  const referee = excelToJson({
    sourceFile: path.join(__dirname, "seed-data", "dataWasit.xlsx"),
    header: {
      rows: 1,
    },
    columnToKey: {
      A: "nama",
      B: "alamat",
      C: "ttl",
      D: "telephone",
      E: "gender",
      F: "keterangan",
      G: "cabor_id",
    },
  });

  await Promise.all(
    normalizeAndConcat(referee).map((referee) =>
      prisma.wasit.create({ data: referee })
    )
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
