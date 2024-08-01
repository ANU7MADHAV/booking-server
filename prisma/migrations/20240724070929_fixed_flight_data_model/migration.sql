/*
  Warnings:

  - Added the required column `arrivalCode` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureCode` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Flight_flightNumber_key";

-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "arrivalCode" TEXT NOT NULL,
ADD COLUMN     "departureCode" TEXT NOT NULL,
ALTER COLUMN "flightNumber" DROP DEFAULT,
ALTER COLUMN "flightNumber" SET DATA TYPE TEXT;
DROP SEQUENCE "Flight_flightNumber_seq";

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departureCode_fkey" FOREIGN KEY ("departureCode") REFERENCES "Airport"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrivalCode_fkey" FOREIGN KEY ("arrivalCode") REFERENCES "Airport"("code") ON DELETE CASCADE ON UPDATE CASCADE;
