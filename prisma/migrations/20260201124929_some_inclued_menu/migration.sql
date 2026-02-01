-- AlterTable
ALTER TABLE "menu" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSignature" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tags" TEXT[];
