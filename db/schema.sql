ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';


DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgues_db" database --
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);