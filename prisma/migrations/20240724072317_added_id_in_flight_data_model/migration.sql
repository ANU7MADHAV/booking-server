/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Flight` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "id" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Flight_id_key" ON "Flight"("id");
