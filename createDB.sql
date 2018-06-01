-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema LMF
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema LMF
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `LMF` DEFAULT CHARACTER SET utf8 ;
USE `LMF` ;

-- -----------------------------------------------------
-- Table `LMF`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`genres` (
  `genre_id` INT(11) NOT NULL AUTO_INCREMENT,
  `genre_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre_id`),
  UNIQUE INDEX `genre_name_UNIQUE` (`genre_name` ASC))
  -- UNIQUE INDEX `genre_id_UNIQUE` (`genre_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 0
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`zipCode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`zipCode` (
  `zip_id` INT(11) NOT NULL AUTO_INCREMENT,
  `zip_code` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`zip_id`),
  UNIQUE INDEX `zip_code` (`zip_code` ASC))
  -- UNIQUE INDEX `zip_id_UNIQUE` (`zip_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`venues`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`venues` (
  `venue_id` INT(11) NOT NULL AUTO_INCREMENT,
  `venue_name` VARCHAR(100) NOT NULL,
  `venue_address` VARCHAR(100) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `county` VARCHAR(50) NOT NULL,
  `zipcode_id` INT(11) NOT NULL,
  `longitude` VARCHAR(45) NOT NULL,
  `latitude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`venue_id`),
  -- UNIQUE INDEX `venue_name` (`venue_name` ASC, `longitude` ASC, `latitude` ASC),
  UNIQUE INDEX `latitude_UNIQUE` (`latitude` ASC),
  UNIQUE INDEX `longitude_UNIQUE` (`longitude` ASC),
  -- UNIQUE INDEX `venue_name_UNIQUE` (`venue_name` ASC),
  INDEX `zipcode_id_idx` (`zipcode_id` ASC),
  -- UNIQUE INDEX `venue_id_UNIQUE` (`venue_id` ASC),
  CONSTRAINT `zipcode_id`
    FOREIGN KEY (`zipcode_id`)
    REFERENCES `LMF`.`zipCode` (`zip_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`events` (
  `event_id` INT(11) NOT NULL AUTO_INCREMENT,
  `genre_id` INT(11) NOT NULL,
  `event_title` VARCHAR(100) NOT NULL,
  `event_date` DATE NOT NULL,
  `event_start_time` TIME NOT NULL,
  `venue_id` INT(11) NOT NULL,
  `popularity` INT(11) NOT NULL,
  `event_details` TEXT NULL DEFAULT NULL,
  `event_image` VARCHAR(250),
  -- `image_size` VARCHAR(100),
  PRIMARY KEY (`event_id`),
  UNIQUE INDEX `event_title` (`event_title` ASC),
  INDEX `venue_id_idx` (`venue_id` ASC),
  INDEX `genre_id_idx` (`genre_id` ASC),
  -- UNIQUE INDEX `event_id_UNIQUE` (`event_id` ASC),
  CONSTRAINT `genre_id`
    FOREIGN KEY (`genre_id`)
    REFERENCES `LMF`.`genres` (`genre_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `venue_id`
    FOREIGN KEY (`venue_id`)
    REFERENCES `LMF`.`venues` (`venue_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`images`
-- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `LMF`.`images` (
--   `image_id` INT(11) NOT NULL AUTO_INCREMENT,
--   `image_url` VARCHAR(250) NULL DEFAULT NULL,
--   `image_size` VARCHAR(100) NULL DEFAULT NULL,
--   `event_id` INT(11) NOT NULL,
--   `image_detail` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`image_id`),
--   UNIQUE INDEX `image_url_UNIQUE` (`image_url` ASC),
--   INDEX `event_id_idx` (`event_id` ASC),
--   -- UNIQUE INDEX `image_id_UNIQUE` (`image_id` ASC),
--   CONSTRAINT `event_id`
--     FOREIGN KEY (`event_id`)
--     REFERENCES `LMF`.`events` (`event_id`)
--     ON DELETE CASCADE
--     ON UPDATE CASCADE)
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`performers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`performers` (
  `performer_id` INT(11) NOT NULL AUTO_INCREMENT,
  `performer_name` VARCHAR(100) NOT NULL,
  `performer_bio` TEXT NULL DEFAULT NULL,
  `performer_image` TEXT NULL DEFAULT NULL,
  `performer_url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`performer_id`),
  UNIQUE INDEX `performer_name` (`performer_name` ASC),
  UNIQUE INDEX `performer_id_UNIQUE` (`performer_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`performers_events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`performers_events` (
  `performer_id` INT(11) NOT NULL,
  `event_id` INT(11) NOT NULL,
  PRIMARY KEY (`performer_id`, `event_id`),
  UNIQUE INDEX `event_id` (`event_id` ASC),
  INDEX `fk_performers_has_events_events1_idx` (`event_id` ASC),
  INDEX `fk_performers_has_events_performers1_idx` (`performer_id` ASC),
  CONSTRAINT `fk_performers_has_events_events1`
    FOREIGN KEY (`event_id`)
    REFERENCES `LMF`.`events` (`event_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_performers_has_events_performers1`
    FOREIGN KEY (`performer_id`)
    REFERENCES `LMF`.`performers` (`performer_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
