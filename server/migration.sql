CREATE EXTENSION IF NOT EXISTS pgcrypto;




-- INSERT INTO tasks(description) VALUES('Do the dishes');
-- INSERT INTO tasks(description) VALUES('Walk the dog');
-- INSERT INTO tasks(description) VALUES('Sweep the floor');
-- INSERT INTO tasks(description) VALUES('Do your homework');
-- INSERT INTO tasks(description) VALUES('Beat Elden Ring');

DROP TABLE IF  EXISTS users CASCADE;
DROP TABLE IF EXISTS workspaces CASCADE;
DROP TABLE IF EXISTS lists CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    f_name varchar(25) NOT NULL,
    l_name varchar(25) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password text NOT NULL
);

CREATE TABLE workspaces(
    id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE lists(
    id SERIAL PRIMARY KEY,
    description text NOT NULL,
    workspace_id INT REFERENCES workspaces(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  done boolean,
  list_id INT REFERENCES lists(id) ON DELETE CASCADE
);

INSERT INTO users (f_name, l_name, email, password) VALUES ('John','Doe','johndoe@mail.com',crypt('1234', gen_salt('bf')));
INSERT INTO workspaces (name, owner_id) VALUES ('workspace 1', 1);
INSERT INTO workspaces (name, owner_id) VALUES ('workspace 2', 1);
INSERT INTO lists (description, workspace_id) VALUES ('Need to do', 1);
INSERT INTO lists (description, workspace_id) VALUES ('Working on', 1);
INSERT INTO tasks (description, list_id) VALUES ('Come up with an Idea', 2);
INSERT INTO tasks (description, list_id) VALUES ('Come up with wireframe', 2);
INSERT INTO tasks (description, list_id) VALUES ('Build the database', 1);