-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema private_wall_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema private_wall_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `private_wall_db` DEFAULT CHARACTER SET utf8 ;
USE `private_wall_db` ;

-- -----------------------------------------------------
-- Table `private_wall_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `private_wall_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL,
  `pw` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `private_wall_db`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `private_wall_db`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `private_wall_db`.`messages_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `private_wall_db`.`messages_has_users` (
  `message_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`message_id`, `user_id`),
  INDEX `fk_messages_has_users_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_messages_has_users_messages_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_messages_has_users_messages`
    FOREIGN KEY (`message_id`)
    REFERENCES `private_wall_db`.`messages` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_messages_has_users_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `private_wall_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
