/*
  Warnings:

  - You are about to drop the column `category` on the `menu` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `menu` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `menu` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "categoryStatus" AS ENUM ('ACTIVE', 'DEACTIVE');

-- AlterTable
ALTER TABLE "menu" DROP COLUMN "category",
DROP COLUMN "user_id",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "categoryStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
