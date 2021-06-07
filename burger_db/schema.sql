
--  * Create the `burgers_db`.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT PRIMARY KEY NOT null, 
burger_name VARCHAR(30),
devoured boolean default false,
PRIMARY KEY (id)
);
