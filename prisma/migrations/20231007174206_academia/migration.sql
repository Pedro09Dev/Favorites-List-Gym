-- CreateTable
CREATE TABLE "Academia" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Academia_pkey" PRIMARY KEY ("id")
);
