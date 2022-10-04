DROP DATABASE IF EXISTS hookpups;

CREATE DATABASE hookpups;

\c hookpups;

DROP TABLE IF EXISTS dog_details CASCADE;
DROP TABLE IF EXISTS dog_matches  CASCADE;
DROP TABLE IF EXISTS chat_log CASCADE;
DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE dog_details (
  dog_id SERIAL PRIMARY KEY,
  owner_name TEXT,
  display_name TEXT,
  dog_name TEXT,
  breed TEXT,
  size TEXT,
  age INT,
  gender TEXT,
  personality TEXT,
  description TEXT,
  photos JSON,
  zipcode INT,
  address TEXT
);

CREATE TABLE dog_matches (
  match_id SERIAL PRIMARY KEY,
  dog1_id INT REFERENCES dog_details (dog_id),
  dog2_id INT REFERENCES dog_details (dog_id),
  accepted BOOLEAN
);

CREATE TABLE chat_log (
  chatroom_id INT REFERENCES dog_matches(match_id),
  messages JSON
);

CREATE TABLE events (
  event_id serial PRIMARY KEY,
  dog1_id INT,
  dog2_id INT,
  event_name text,
  date timestamp,
  location text
);

CREATE INDEX owner_idx ON dog_details (owner_name);
CREATE INDEX dog1_idx ON dog_matches (dog1_id);
CREATE INDEX chat_idx ON chat_log (chatroom_id);
