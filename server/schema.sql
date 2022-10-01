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
  dog_name TEXT,
  breed TEXT,
  size TEXT,
  personality TEXT,
  description TEXT,
  photos JSON,
  location TEXT
);


CREATE TABLE dog_matches (
  match_id SERIAL PRIMARY KEY,
  dog1_id INT,
  dog2_id INT,
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

-- to run in terminal > psql postgres -f /Users/graciefogarty/Desktop/HackReactorSEI/HookPups_Backend/server/schema.sql

-- Query to get all confirmed matches
SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_detail.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'true')

-- Query to get all pending matches
SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_detail.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'false')