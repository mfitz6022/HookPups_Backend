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

-- to run in terminal > psql postgres -f /Users/graciefogarty/Desktop/HackReactorSEI/HookPups_Backend/server/schema.sql

-- Query to get all confirmed matches
-- SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_detail.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'true')

-- Query to get all pending matches
-- SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'false')

-- SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner1_name}' AND dog_details.dog_name = '${data.dog1_name}') OR (match_dog.owner_name = '${data.owner1_name}' AND match_dog.dog_name = '${data.dog1_name}')) AND ((dog_details.owner_name = '${data.owner2_name}' AND dog_details.dog_name = '${data.dog2_name}') OR (match_dog.owner_name = '${data.owner2_name}' AND match_dog.dog_name = '${data.dog2_name}')))

-- UPDATE dog_matches
--  SET accepted = true
--  WHERE (SELECT * FROM dog_matches
--  JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id
--  JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id
--  WHERE (((dog_details.owner_name = 'gracie' AND dog_details.dog_name = 'test') OR (match_dog.owner_name = 'gracie' AND match_dog.dog_name = 'test')) AND ((dog_details.owner_name = 'Brian' AND dog_details.dog_name = 'test') OR (match_dog.owner_name = 'Brian' AND match_dog.dog_name = 'test'))));

--  UPDATE dog_matches
--  SET accepted = true
--  WHERE dog1_id IN
--  (
-- -- Write a query that will select ONLY dog id from dog_matches you are interested in
--  )

--  UPDATE dog_matches SET accepted = true WHERE match_id IN (SELECT match_id FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = 'gracie' AND dog_details.dog_name = 'test') OR (match_dog.owner_name = 'gracie' AND match_dog.dog_name = 'test')) AND ((dog_details.owner_name = 'Brian' AND dog_details.dog_name = 'test') OR (match_dog.owner_name = 'Brian' AND match_dog.dog_name = 'test'))));



--  INSERT INTO dog_matches (dog1_id, dog2_id, accepted)
--  SELECT dog_id AS dog1_id FROM dog_details
--  WHERE dog_name = '' AND dog_owner = ''
--  SELECT dog_id AS dog2_id FROM dog_details
--  WHERE dog_name = '${data.dog2_name}' AND dog_owner = '${data.dog2_owner}';

-- --
-- INSERT INTO dog_matches (dog1_id, dog2_id, accepted) SELECT (SELECT dog_id AS dog1_id FROM dog_details WHERE dog_name = 'test' AND owner_name = 'gracie' ) AS dog1_id, (SELECT dog_id AS dog2_id FROM dog_details WHERE dog_name = 'Benny' AND owner_name = 'Anne' ) AS dog2_id, false AS accepted;

-- DELETE FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'test' AND owner_name = 'gracie') AND dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'Benny' AND owner_name = 'Anne');


-- SELECT * FROM dog_details WHERE dog_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'Benny' AND owner_name = 'Anne') AND dog_id NOT IN (SELECT dog1_id FROM dog_matches) AND dog_id NOT IN (SELECT dog2_id FROM dog_matches);

-- -- Select * from dog_details that are not a match with the given dog in dog_matches

-- SELECT *
-- FROM dog_matches
-- WHERE dog1_id IN (
-- SELECT dog_id
-- FROM dog_details
-- WHERE dog_id = 1
-- ) OR dog2_id IN (
-- SELECT dog_id
-- FROM dog_details
-- WHERE dog_id = 1)
-- ;

-- SELECT *
-- FROM dog_matches
-- -- Join dog details in dog1 id
--   -- REMEMBER TO ALIAS THE DOG DETAILS (calling v1)
-- -- Join dog details on dog2 id
--   -- REMEMBER TO ALIAS THE DOG DETAILS (calling v2)
-- -- WHERE statement
-- -- One of two condition
--   -- WHERE  (DOG DETAILS v1 owner name = 'fill in name' ABD DIG DETAUKS v1 pet name = 'fuill in')
-- -- OR
--   -- (DOG DETAILS v2 owner name = 'fill in name' ABD DIG DETAUKS v2 pet name = 'fuill in')

-- -- Given name and owner
--   -- Find all the dog IDS that the given dog ID HAS NOT MATCHED WITH

-- SELECT *
-- FROM dog_detail
-- WHERE dog_id;

-- SELECT *
-- FROM dog_matches;

-- SELECT *
-- FROM dog_matches
-- WHERE dog1_id = 1 OR dog2_id = 1;


-- -- Step 1: List all the dog matches for the give dog id
--   -- Try to get into one column list to that you can just do NOT IN
--     -- String agg wouldn't work... Maybe a union?
-- -- Step 2: Select * From dog_details where dog_id NOT IN that one column list above
-- -- Step 3:

-- WITH step1 AS (
-- SELECT dog2_id as doggieid
-- FROM dog_matches
-- WHERE dog1_id = 1
-- union
-- SELECT dog1_id AS doggieid
-- FROM dog_matches
-- WHERE dog2_id = 1
-- )
-- SELECT *
-- FROM dog_details
-- WHERE dog_id NOT IN (
--   SELECT doggieid
--   FROM step1
-- )
-- AND dog_id != 1;




-- WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'test' AND owner_name = 'gracie') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'test' AND owner_name = 'gracie')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = 'test' AND owner_name = 'gracie');


INSERT INTO events (dog1_id, dog2_id, event_name, date, location)
(SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog1_name}' AND owner_name = '${data.owner1_name}') AS dog1_id,
(SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog2_name}' AND owner_name = '${data.owner2_name}') AS dog2_id,
'${data.event_name}' AS event_name,
'${data.date}' AS date,
'${data.location}' AS location;




SELECT events.*, matched_dog.* FROM events JOIN dog_details ON events.dog1_id = dog_details.dog_id JOIN dog_details AS matched_dog ON events.dog2_id = matched_dog.dog_id WHERE dog_details.dog_name = 'Koda' AND dog_details.owner_name = 'Emily';

-- Trying to get akl the events for koda
  -- However she wants the data to show her the dog details for the dog that is part of the event
    -- She wants dog 2 details and the event details