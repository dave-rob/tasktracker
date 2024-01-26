CREATE EXTENSION IF NOT EXISTS pgcrypto;
DROP TABLE IF EXISTS tasks;

-- CREATE TABLE tasks (
--   id SERIAL,
--   description TEXT
-- );

-- INSERT INTO tasks(description) VALUES('Do the dishes');
-- INSERT INTO tasks(description) VALUES('Walk the dog');
-- INSERT INTO tasks(description) VALUES('Sweep the floor');
-- INSERT INTO tasks(description) VALUES('Do your homework');
-- INSERT INTO tasks(description) VALUES('Beat Elden Ring');

DROP TABLE IF  EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    f_name varchar(25) NOT NULL,
    l_name varchar(25) NOT NULL,
    email varchar(100) NOT NULL,
    password text NOT NULL
);

INSERT INTO users (f_name, l_name, email, password) VALUES ('John','Doe','johndoe@mail.com',crypt('1234', gen_salt('bf')));