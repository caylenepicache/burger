DROP DATABASE IF EXISTS burgers_db;

/* Create database */
CREATE DATABASE burgers_db;
USE burgers_db;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN default false,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
