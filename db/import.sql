CREATE TABLE csvimport(
  lastname VARCHAR(7) NOT NULL,
  firstname VARCHAR(8) NOT NULL,
  sex VARCHAR(1) NOT NULL,
  age INTEGER  NOT NULL,
  city VARCHAR(10) NOT NULL,
  speciality VARCHAR(24) NOT NULL
);

COPY csvimport
FROM '/docker-entrypoint-initdb.d/migration.csv'
DELIMITER ','