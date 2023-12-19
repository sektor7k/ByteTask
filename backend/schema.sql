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

CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  jobTitle VARCHAR(50),
  jobDescription TEXT,
  jobPrice INT,
  workTime INT,
  revision INT,

  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    jobId INT,
    freelancerId INT,
    customerId INT,
    customerNote TEXT,
    orderAmount DECIMAL(10, 2),
    customerAddr TEXT,
    orderHash TEXT,
    status VARCHAR(255) DEFAULT 'beklemede',
    FOREIGN KEY (freelancerId) REFERENCES users(id),
    FOREIGN KEY (customerId) REFERENCES users(id),
    FOREIGN KEY (jobId) REFERENCES jobs(id)
);







