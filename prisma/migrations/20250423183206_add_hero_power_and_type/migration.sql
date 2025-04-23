/*
  Warnings:

  - Added the required column `power` to the `Hero` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HeroType" AS ENUM ('TANK', 'HEALER', 'DPS');

-- AlterTable
ALTER TABLE "Hero" ADD COLUMN     "power" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "type" "HeroType" NOT NULL DEFAULT 'TANK';
