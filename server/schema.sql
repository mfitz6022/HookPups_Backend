DROP DATABASE IF EXISTS hookpups;

CREATE DATABASE hookpups;

\c hookpups;

DROP TABLE IF EXISTS dog_details CASCADE;
DROP TABLE IF EXISTS dog_matchs  CASCADE;
DROP TABLE IF EXISTS chat_log CASCADE;

CREATE TABLE dog_details (
  dog_id SERIAL,
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
  match_id SERIAL,
  dog1_id INT,
  dog2_id INT,
  accepted BOOLEAN
);

CREATE TABLE chat_log (
  chatroom_id INT REFERENCES dog_matches(match_id),
  messages JSON
);

CREATE TABLE events (
  event_id serial,
  dog1_id INT,
  dog2_id INT,
  event_name text,
  date timestamp,
  location string
)

CREATE INDEX owner_idx ON dog_details (owner_name);
CREATE INDEX dog_idx ON dog_matches (dog_id);
CREATE INDEX chat_idx ON chat_log (chatroom_id);

-- to run in terminal > psql postgres -f /Users/graciefogarty/Desktop/HackReactorSEI/HookPups_Backend/server/schema.sql