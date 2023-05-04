/*
  Warnings:

  - The primary key for the `cartescapacictesactive` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cardId` on the `cartescapacictesactive` table. All the data in the column will be lost.
  - You are about to drop the `ability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `class` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `carteId` to the `CartesCapacictesActive` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `CartesCapacictesActive_cardId_fkey` ON `cartescapacictesactive`;

-- AlterTable
ALTER TABLE `cartescapacictesactive` DROP PRIMARY KEY,
    DROP COLUMN `cardId`,
    ADD COLUMN `carteId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`competenceId`, `carteId`);

-- DropTable
DROP TABLE `ability`;

-- DropTable
DROP TABLE `card`;

-- DropTable
DROP TABLE `class`;

-- CreateTable
CREATE TABLE `Carte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `illustration` VARCHAR(191) NOT NULL,
    `typeId` INTEGER NULL,
    `classeId` INTEGER NULL,
    `power` INTEGER NOT NULL,
    `competenceId` INTEGER NOT NULL,
    `cost` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Capacite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `carteId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Carte` ADD CONSTRAINT `Carte_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carte` ADD CONSTRAINT `Carte_classeId_fkey` FOREIGN KEY (`classeId`) REFERENCES `Classe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carte` ADD CONSTRAINT `Carte_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Capacite` ADD CONSTRAINT `Capacite_carteId_fkey` FOREIGN KEY (`carteId`) REFERENCES `Carte`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartesCapacictesActive` ADD CONSTRAINT `CartesCapacictesActive_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartesCapacictesActive` ADD CONSTRAINT `CartesCapacictesActive_carteId_fkey` FOREIGN KEY (`carteId`) REFERENCES `Carte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
