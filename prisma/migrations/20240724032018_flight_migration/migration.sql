-- CreateTable
CREATE TABLE "Flight" (
    "flightNumber" SERIAL NOT NULL,
    "airplaneId" INTEGER NOT NULL,
    "arrivalTime" TIMESTAMP(3) NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "boardingGate" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("airplaneId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightNumber_key" ON "Flight"("flightNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_airplaneId_key" ON "Flight"("airplaneId");
