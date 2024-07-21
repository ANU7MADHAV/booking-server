-- CreateTable
CREATE TABLE "Ariplane" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Ariplane_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ariplane_id_key" ON "Ariplane"("id");
