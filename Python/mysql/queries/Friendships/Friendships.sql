-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema friendships_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema friendships_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `friendships_db` DEFAULT CHARACTER SET utf8 ;
USE `friendships_db` ;

-- -----------------------------------------------------
-- Table `friendships_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendships_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `friendships_db`.`friendships`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendships_db`.`friendships` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `users_id1` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `fk_users_has_users_users1_idx` (`users_id1` ASC) VISIBLE,
  INDEX `fk_users_has_users_users_idx` (`users_id` ASC) VISIBLE,
  PRIMARY KEY (`id`, `users_id`, `users_id1`),
  CONSTRAINT `fk_users_has_users_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `friendships_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users1`
    FOREIGN KEY (`users_id1`)
    REFERENCES `friendships_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
