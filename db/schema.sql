CREATE DATABASE companies_db;
USE companies_db; 

CREATE TABLE company(
    id INT NOT NULL AUTO_INCREMENT,
    company_name VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO company (company_name)
VALUES ("Uber"), 
    ("Instacart");