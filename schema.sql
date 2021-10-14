CREATE DATABASE covidDB;
USE covidDB;

CREATE TABLE covid (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  summary VARCHAR(100) NOT NULL,
  source VARCHAR(100) NOT NULL,
  published_at DATE NOT NULL,
  url_site VARCHAR(100) NOT NULL
);


-- description, publishedAt, source, title, url, urlToImage

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/