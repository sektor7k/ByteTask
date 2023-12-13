CREATE DATABASE bytetask;
USE bytetask;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  status BOOLEAN DEFAULT false
);

CREATE TABLE userAbout (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  about TEXT,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE userAbout (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  jobTitle VARCHAR(50),
  jobDescription TEXT,
  jobPrice INT,
  workTime INT,

  FOREIGN KEY (userId) REFERENCES users(id)
);








