/*
  Warnings:

  - Added the required column `categoryName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingName` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_ingUnitId_fkey";

-- DropIndex
DROP INDEX "Recipe_authorId_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "categoryName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "ingName" TEXT NOT NULL,
ALTER COLUMN "ingUnitId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_ingUnitId_fkey" FOREIGN KEY ("ingUnitId") REFERENCES "Measurement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
