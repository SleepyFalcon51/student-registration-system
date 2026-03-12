CREATE DATABASE student_registration;

USE student_registration;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentName VARCHAR(100),
    studentID VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    program VARCHAR(100),
    enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP
);