/*
  Warnings:

  - You are about to drop the column `category_id` on the `menu` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu" DROP COLUMN "category_id",
ADD COLUMN     "user_id" TEXT NOT NULL;
