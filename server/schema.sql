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


-- SELECT * FROM dog_matches JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id WHERE (((dog_details.owner_name = 'user1@gmail.com' AND dog_details.dog_name = 'Koda') OR (match_dog.owner_name = 'user1@gmail.com' AND match_dog.dog_name = 'Koda')) AND accepted = 'true')


-- SELECT * FROM dog_matches INNER JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id INNER JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE ( (match_dog.owner_name = 'user5@gmail.com' AND match_dog.dog_name = 'Max') AND accepted = 'false')


-- SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE ( (match_dog.owner_name = 'user5@gmail.com' AND match_dog.dog_name = 'Max') AND accepted = 'false')





-- SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = 'user5@gmail.com' AND dog_details.dog_name = 'Max') OR (match_dog.owner_name = 'user5@gmail.com' AND match_dog.dog_name = 'Max')) AND accepted = 'false');



-- -- Brian's suggestion
--   SELECT dog_matches.*, match_dog.dog_id as dog2_id, match_dog.owner_name AS dog2_owner, match_dog.display_name as dog2_owner_display_name, match_dog.dog_name as dog2_dog, match_dog.breed as dog2_breed, match_dog.size as dog2_size, match_dog.age as dog2_age, match_dog.gender as dog2_gender, match_dog.personality as dog2_personality, match_dog.description as dog2_description, match_dog.photos as dog2_photos, match_dog.zipcode as dog2_zipcode, dog_details.dog_id as dog1_id, dog_details.owner_name AS dog1_owner, dog_details.display_name as dog1_owner_display_name, dog_details.dog_name as dog1_dog, dog_details.breed as dog1_breed, dog_details.size as dog1_size, dog_details.age as dog1_age, dog_details.gender as dog1_gender, dog_details.personality as dog1_personality, dog_details.description as dog1_description, dog_details.photos as dog1_photos, dog_details.zipcode as dog1_zipcode
--   FROM dog_matches JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id
--   JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id
--   WHERE (((dog_details.owner_name = 'user1@gmail.com' AND dog_details.dog_name = 'Koda') OR (match_dog.owner_name = 'user1@gmail.com' AND match_dog.dog_name = 'Koda')) AND accepted = 'true');


-- SELECT * FROM dog_matches
-- JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id
-- JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id
--   WHERE (((dog_details.owner_name = 'user1@gmail.com' AND dog_details.dog_name = 'Koda') OR (match_dog.owner_name = 'user1@gmail.com' AND match_dog.dog_name = 'Koda')) AND accepted = 'true');


-- SELECT * FROM dog_matches
-- JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id
-- JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = 'user1@gmail.com' AND dog_details.dog_name = 'Koda') OR (match_dog.owner_name = 'user1@gmail.com' AND match_dog.dog_name = 'Koda')) AND accepted = 'true');


DELETE FROM dog_matches WHERE (dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'Koda' AND owner_name = 'user1@gmail.com') AND dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'Max' AND owner_name = 'user5@gmail.com')) OR (dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'Koda' AND owner_name = 'user1@gmail.com') AND dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = 'Max' AND owner_name = 'user5@gmail.com'));