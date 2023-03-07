require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
const seedingData = [
  {id:1,  nama: "BILYARD", },
    {id:2,  nama: "CATUR", },
    {id:3,  nama: "ANGKAT BESI",},
    {id:4,  nama: "BRIDGE",},
    {id:5,  nama: "SENAM AEROBIK",},
    {id:6,  nama: "GOLF",},
    {id:7,  nama: "RENANG",},
    {id:8,  nama: "RUGBI",},
    {id:9,  nama: "CATUR",},
    {id:10, nama: "BULU TANGKIS", },
    {id:11, nama: "DRUM BAND", },
    {id:12, nama: "PANJAT TEBING", },
    {id:13, nama: "GULAT", },
    {id:14, nama: "DAYUNG KANOEING", },
    {id:15, nama: "SOFTBALL", },
    {id:16, nama: "PENCAK SILAT", },
    {id:17, nama: "JUDO", },
    {id:18, nama: "ANGGAR", },
    {id:19, nama: "SENAM ARTISTIK", },
    {id:20, nama: "ANGKAT BERAT", },
    {id:21, nama: "TAE KWON DO", },
    {id:22, nama: "YONGMODO", },
    {id:23, nama: "PETANQUE", },
    {id:24, nama: "HOKI INDOOR", },
    {id:25, nama: "BINARAGA", },
    {id:26, nama: "BOLA VOLI PASIR", },
    {id:27, nama: "KEMPO", },
    {id:28, nama: "TINJU", },
    {id:29, nama: "TENIS MEJA", },
    {id:30, nama: "TENIS LAPANGAN", },
    {id:31, nama: "TARUNG DRAJAT", },
    {id:32, nama: "SEPATU RODA", },
    {id:33, nama: "SEPAK TAKRAW", },
    {id:34, nama: "SEPAK BOLA", },
    {id:35, nama: "PANAHAN", },
    {id:36, nama: "MENEMBAK", },
    {id:37, nama: "HOKI OUTDOOR", },
    {id:38, nama: "DANSA", },
    {id:39, nama: "BOLA VOLI INDOOR", },
    {id:40, nama: "BOLA BASKET", },
    {id:41, nama: "BALAP SEPEDA", },
    {id:42, nama: "ATLETIK", },
    {id:43, nama: "AEROMEDELING", },
    {id:44, nama: "WOODBALL", },
    {id:45, nama: "GATEBALL", },
  ];

  const atlit = [
    {
        "nama": "M. Mustajib Na’im",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 1 Maret 2004",
        "telephone": "081914915964",
        "gender": "Putra",
        "cabor_id" : 18
    },
    {
        "nama": "Wisnu Agung Nugroho",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 9 Oktober 1999",
        "telephone": "085869047091",
        "gender": "Putra ",
        "cabor_id" : 18
    },
    {
        "nama": "Dipta Puji Nugroho",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 20 Mei 1995",
        "telephone": "085799198884",
        "gender": "Putra ",
        "cabor_id" : 18
    },
    {
        "nama": "Pujo Pitoyo",
        "alamat": "Sentolo",
        "ttl": "Jakarta, 12 Desember 1998",
        "telephone": "082221363331",
        "gender": "Putra ",
        "cabor_id" : 18
    },
    {
        "nama": "Agung Budiantoro",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 1 Februari 2003",
        "telephone": "081327257908",
        "gender": "Putra ",
        "cabor_id" : 18
    },
    {
        "nama": "Farida Monica",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 26 April 1997",
        "telephone": "085725930169",
        "gender": "Putri ",
        "cabor_id" : 18
    },
    {
        "nama": "Pradita Febriana",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 7 Februari 1999",
        "telephone": "085742437467",
        "gender": "Putri ",
        "cabor_id" : 18
    },
    {
        "nama": "Fadhila Chavrin Salsabila",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 5 Juni 2001",
        "telephone": "085848712492",
        "gender": "Putri ",
        "cabor_id" : 18
    },
    {
        "nama": "Luluk Wisniwati",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 04 Juni 2002",
        "telephone": "081387627085",
        "gender": "Putri ",
        "cabor_id" : 18
    },
    {
        "nama": "Ardhana Kurnia Puspitaningtrias",
        "alamat": "Sentolo",
        "ttl": "Bantul, 21 Maret 1998",
        "telephone": "085842772157",
        "gender": "Putri",
        "cabor_id" : 18
    },
    {
        "nama": "Raras Jatiningtyas Surya Hidayat",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 24 Februari 2002",
        "telephone": "087823092925",
        "gender": "Putri",
        "cabor_id" : 18
    },
    {
        "nama": "Hapsari Faizzah Fitriana",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 15 November 2004",
        "telephone": "085799494426",
        "gender": "Putri",
        "cabor_id" : 18
    },
    {
        "nama": "Freida Ayu Nurfiyanti",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 11 Februari 1998",
        "telephone": "088232439581",
        "gender": "Putri",
        "cabor_id" : 18
    },
    {
        "nama": "Pradipta Hapsari",
        "alamat": "Sentolo",
        "ttl": "Kulon Progo, 29 Desember 2001",
        "telephone": "085725689759",
        "gender": "Putri",
        "cabor_id" : 18
    },
    {
        "nama": "Tino Aminudin",
        "alamat": "Lendah",
        "ttl": "Kulon Progo, 12 Oktober 2005",
        "telephone": "082387539324",
        "gender": "Putra",
        "cabor_id" : 18
    },
    {
        "nama": "Benaya Christyo Adinata",
        "alamat": "Pengasih",
        "ttl": "Kulon Progo, 08-01-2011",
        "telephone": "081328029702",
        "gender": "Putra",
        "cabor_id" : 18
    },
    {
        "nama": "Dhirga Haery Nadhif",
        "alamat": "Kokap",
        "ttl": "Kulon Progo, 25-8-2010",
        "telephone": "087739097651",
        "gender": "Putra",
        "cabor_id" : 18
    }
]

  const pr = seedingData.map((data) => {
    return prisma.cabor.create({ data: data });
  });
  await Promise.all(pr);

const aa = atlit.map((data) => {
  return prisma.atlit.create({data : data});
});
await Promise.all(aa)



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
