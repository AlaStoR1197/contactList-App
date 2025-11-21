-- CreateTable
CREATE TABLE "contactos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "contactos_pkey" PRIMARY KEY ("id")
);
