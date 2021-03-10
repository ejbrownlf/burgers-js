DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

create table burger {
    id int auto_increment not null,
    burger_name varchar(255) not null,
    devoured boolean default FALSE,
    primary key (id)
};