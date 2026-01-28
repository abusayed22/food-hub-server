/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_category_id_fkey";

-- AlterTable
ALTER TABLE "menu" ADD COLUMN     "category" TEXT[];

-- DropTable
DROP TABLE "categories";

-- DropEnum
DROP TYPE "categoryStatus";
