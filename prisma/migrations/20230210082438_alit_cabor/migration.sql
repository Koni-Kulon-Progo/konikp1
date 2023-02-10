-- CreateTable
CREATE TABLE "Atlit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "cabor_id" INTEGER NOT NULL,
    CONSTRAINT "Atlit_cabor_id_fkey" FOREIGN KEY ("cabor_nama") REFERENCES "Cabor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cabor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL
);
