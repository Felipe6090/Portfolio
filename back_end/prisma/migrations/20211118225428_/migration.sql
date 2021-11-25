-- CreateTable
CREATE TABLE `clients` (
    `id` VARCHAR(191) NOT NULL,
    `clientName` VARCHAR(191) NOT NULL,
    `clientEmail` VARCHAR(191) NOT NULL,
    `clientPhone` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `whisedDeadline` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `works` (
    `id` VARCHAR(191) NOT NULL,
    `workName` VARCHAR(191) NOT NULL,
    `subText` VARCHAR(191) NOT NULL,
    `text` LONGTEXT NOT NULL,
    `imgLink` VARCHAR(191) NOT NULL,
    `itsOpenCode` BOOLEAN NOT NULL,
    `githubLink` VARCHAR(191) NULL,
    `itsOnline` BOOLEAN NOT NULL,
    `workLink` VARCHAR(191) NULL,
    `itsFavorite` BOOLEAN NOT NULL DEFAULT false,
    `lastChange` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `works_workName_key`(`workName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
