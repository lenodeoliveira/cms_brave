
CREATE DATABASE cms_brave;
USE cms_brave;

CREATE TABLE `cms_brave`.`users` (
  `id` CHAR(36) PRIMARY KEY NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `email` VARCHAR(128) NOT NULL UNIQUE,
  `role` VARCHAR(128),
  `password` VARCHAR(128) NOT NULL,
  `createdAt` TIMESTAMP(0),
  `updatedAt` TIMESTAMP(0)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `cms_brave`.`contents` (
 `id` CHAR(36) PRIMARY KEY NOT NULL,
 `user_id` CHAR(36) DEFAULT NULL,
 `title` VARCHAR(255) NOT NULL,
 `slug` VARCHAR(255) NOT NULL UNIQUE,
 `image` VARCHAR(255) NOT NULL,
 `body` TEXT NOT NULL,
 `published` tinyint(1) NOT NULL,
 `createdAt` TIMESTAMP(0),
 `updatedAt` TIMESTAMP(0),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `cms_brave`.`users` (`id`,`name`,`email`,`password`,`createdAt`,`updatedAt`) 
VALUES ('59345379-7d90-476d-aeb3-d0f4b3f0f349', 'John Doe', 'johndoe@gmail.com', '12355', null,null);

INSERT INTO `cms_brave`.`users` (`id`,`name`,`email`,`password`,`createdAt`,`updatedAt`) 
VALUES ('98345379-7d90-476d-aeb3-d0f4b3f0g353', 'Maria', 'maria@gmail.com', '12355', null,null);

INSERT INTO `cms_brave`.`contents`
(`id`, `user_id`, `title`, `slug`, `image`, `body`, `published`, `createdAt`, `updatedAt`)
VALUES('55345379-7d90-476d-aeb3-d0f4b3f0f376', '59345379-7d90-476d-aeb3-d0f4b3f0f349', 'title-test', 'slug-test', 'body-test', 'image-test', 0, null, null);

INSERT INTO `cms_brave`.`contents`
(`id`, `user_id`, `title`, `slug`, `image`, `body`, `published`, `createdAt`, `updatedAt`)
VALUES('78345379-7d90-476d-aeb3-d0f4b3y1w467', '55345379-7d90-476d-aeb3-d0f4b3f0f376', 'title-test-2', 'slug-test-2', 'body-test-2', 'image-test-2', 0, null, null);


-- SELECT c.title, c.body, u.name as author FROM contents c 
-- INNER JOIN users u 
-- ON c.user_id = u.id;