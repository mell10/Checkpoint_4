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
  description text not null,
  user_id int foreign key(user_id) references user(id) not null
);

create table project (
  id int primary key auto_increment not null,
  name varchar(100) not null,
  description text not null,
  link varchar(255) null,
  user_id int foreign key(user_id) references user(id) not null
);

create table language_project (
language_id int foreign key(user_id) references language(id) not null,
project_id int foreign key(user_id) references project(id) not null
);
