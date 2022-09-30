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
  matches_id SERIAL,
  dog_id INT,
  match_id INT
);

CREATE TABLE chat_log (
  chatroom_id SERIAL,
  messages JSON
);

CREATE INDEX owner_idx ON dog_details (owner_name);
CREATE INDEX dog_idx ON dog_matches (dog_id);
CREATE INDEX chat_idx ON chat_log (chatroom_id);

-- to run in terminal > psql postgres -f /Users/graciefogarty/Desktop/HackReactorSEI/HookPups_Backend/server/schema.sql