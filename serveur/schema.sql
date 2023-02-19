DROP DATABASE IF EXISTS DoubleDose;
CREATE DATABASE IF NOT EXISTS DoubleDose;
USE DoubleDose;
CREATE TABLE Dose(
id int auto_increment ,
name varchar(255),
mail varchar(255),
number varchar(255),
country varchar(255),
    created_at timestamp not null default CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP() ,
    primary key (id)
);


