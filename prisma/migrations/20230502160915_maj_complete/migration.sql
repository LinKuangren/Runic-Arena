/*
  Warnings:

  - You are about to drop the column `cardId` on the `competence` table. All the data in the column will be lost.
  - Added the required column `competenceId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Ability_cardId_fkey` ON `ability`;

-- DropIndex
DROP INDEX `Card_classId_fkey` ON `card`;

-- DropIndex
DROP INDEX `Card_typeId_fkey` ON `card`;

-- DropIndex
DROP INDEX `Competence_cardId_fkey` ON `competence`;

-- AlterTable
ALTER TABLE `card` ADD COLUMN `competenceId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `competence` DROP COLUMN `cardId`;

-- CreateTable
CREATE TABLE `CartesCapacictesActive` (
    `competenceId` INTEGER NOT NULL,
    `cardId` INTEGER NOT NULL,

    PRIMARY KEY (`competenceId`, `cardId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ability` ADD CONSTRAINT `Ability_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartesCapacictesActive` ADD CONSTRAINT `CartesCapacictesActive_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartesCapacictesActive` ADD CONSTRAINT `CartesCapacictesActive_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
