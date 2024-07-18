create table user (
  id int primary key auto_increment not null,
  firstname varchar(100) not null,
  lastname varchar(100) not null,
  password varchar(100) not null unique,
  role varchar(100) not null
);

create table language (
  id int primary key auto_increment not null,
  name varchar(100) not null,
  description text not null
);

create table project (
  id int primary key auto_increment not null,
  name varchar(100) not null,
  description text not null,
  link varchar(255) null
);
