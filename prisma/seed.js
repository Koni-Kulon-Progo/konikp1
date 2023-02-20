require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

let prisma;

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
  global.prisma = new PrismaClient();
  prisma = global.prisma;
}

async function main() {
  const seedingData = [
    { nama: "BILYARD" },
    { nama: "CATUR" },
    { nama: "ANGKAT BESI" },
    { nama: "BRIDGE" },
    { nama: "SENAM AEROBIK" },
    { nama: "GOLF" },
    { nama: "RENANG" },
    { nama: "RUGBI" },
    { nama: "CATUR" },
    { nama: "BULU TANGKIS" },
    { nama: "DRUM BAND" },
    { nama: "PANJAT TEBING" },
    { nama: "GULAT" },
    { nama: "DAYUNG KANOEING" },
    { nama: "SOFTBALL" },
    { nama: "PENCAK SILAT" },
    { nama: "JUDO" },
    { nama: "ANGKAT BERAT" },
    { nama: "SENAM ARTISTIK" },
    { nama: "ANGGAR" },
    { nama: "TAE KWON DO" },
    { nama: "YONGMODO" },
    { nama: "PETANQUE" },
    { nama: "HOKI INDOOR" },
    { nama: "BINARAGA" },
    { nama: "BOLA VOLI PASIR" },
    { nama: "KEMPO" },
    { nama: "TINJU" },
    { nama: "TENIS MEJA" },
    { nama: "TENIS LAPANGAN" },
    { nama: "TARUNG DRAJAT" },
    { nama: "SEPATU RODA" },
    { nama: "SEPAK TAKRAW" },
    { nama: "SEPAK BOLA" },
    { nama: "PANAHAN" },
    { nama: "MENEMBAK" },
    { nama: "HOKI OUTDOOR" },
    { nama: "DANSA" },
    { nama: "BOLA VOLI INDOOR" },
    { nama: "BOLA BASKET" },
    { nama: "BALAP SEPEDA" },
    { nama: "ATLETIK" },
    { nama: "AEROMEDELING" },
    { nama: "WOODBALL" },
    { nama: "GATEBALL" },
  ];

  const pr = seedingData.map((data) => {
    return prisma.cabor.create({ data: data });
  });
  await Promise.all(pr);
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
