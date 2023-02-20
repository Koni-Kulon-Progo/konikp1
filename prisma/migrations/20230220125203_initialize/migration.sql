-- CreateTable
CREATE TABLE "Atlit" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "cabor_id" INTEGER NOT NULL,

    CONSTRAINT "Atlit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cabor" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Cabor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pelatih" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "cabor_id" INTEGER NOT NULL,

    CONSTRAINT "Pelatih_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wasit" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "cabor_id" INTEGER NOT NULL,

    CONSTRAINT "Wasit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sarpras" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "cabor_id" INTEGER NOT NULL,

    CONSTRAINT "Sarpras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Atlit" ADD CONSTRAINT "Atlit_cabor_id_fkey" FOREIGN KEY ("cabor_id") REFERENCES "Cabor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pelatih" ADD CONSTRAINT "Pelatih_cabor_id_fkey" FOREIGN KEY ("cabor_id") REFERENCES "Cabor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wasit" ADD CONSTRAINT "Wasit_cabor_id_fkey" FOREIGN KEY ("cabor_id") REFERENCES "Cabor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sarpras" ADD CONSTRAINT "Sarpras_cabor_id_fkey" FOREIGN KEY ("cabor_id") REFERENCES "Cabor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
