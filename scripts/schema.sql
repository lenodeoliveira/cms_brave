
CREATE DATABASE cms_brave;
USE cms_brave;

CREATE TABLE `cms_brave`.`users` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `email` VARCHAR(128) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `createdAt` VARCHAR(128),
  `updatedAt` VARCHAR(128),
  PRIMARY KEY (ID));