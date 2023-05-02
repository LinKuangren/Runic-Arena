-- DropIndex
DROP INDEX `Ability_cardId_fkey` ON `ability`;

-- DropIndex
DROP INDEX `Card_classId_fkey` ON `card`;

-- DropIndex
DROP INDEX `Card_typeId_fkey` ON `card`;

-- DropIndex
DROP INDEX `Competence_cardId_fkey` ON `competence`;

-- AlterTable
ALTER TABLE `competence` MODIFY `effect` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ability` ADD CONSTRAINT `Ability_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Competence` ADD CONSTRAINT `Competence_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
