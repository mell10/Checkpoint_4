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
  user_id int not null,
  foreign key(user_id) references user(id)
);

create table project (
  id int primary key auto_increment not null,
  name varchar(100) not null,
  description text not null,
  link varchar(255) null
);

create table language_project (
  language_id int not null,
  foreign key(language_id) references language(id),
  project_id int not null,
  foreign key(project_id) references project(id)
);

