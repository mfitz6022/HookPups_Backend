const { Pool } = require('pg')
require("dotenv").config();


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

module.exports = {
  // chat room queries
  addNewChatroom: (data, callback) => {
    pool.query(`INSERT INTO chat_log (messages) VALUES ('${data.message}')`, (err, response) => {
      callback(err, response);
    })
  },
  updateChatroomMessages: (data, callback) => {
    pool.query(``, (err, response) => {
      callback(err, response);
    })
  },
  getChatroomMessages: (data, callback) => {
    pool.query(``, (err, response) => {
      callback(err, response);
    })
  },
  deleteChatroom: (data, callback) => {
    pool.query(``, (err, response) => {
      callback(err, response);
    })
  },




  //matches queries
  //Confirmed with postman
  getAllConfirmedMatches: (data, callback) => {
    pool.query(`SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'true');`, (err, response) => {
      callback(err, response);
    })
  },

  //Confirmed with postman
  getAllPendingMatches: (data,  callback) => {
  pool.query(`SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}')) AND accepted = 'false')`, (err, response) => {
    callback(err, response);
  })
  },



  // pool.query(`SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'false')`, (err, response) => {
  //   callback(err, response);
  // })

  // pool.query(`SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner_name}' AND dog_details.dog_name = '${data.dog_name}') OR (match_dog.owner_name = '${data.owner_name}' AND match_dog.dog_name = '${data.dog_name}')) AND accepted = 'false')`, (err, response) => {
  //   callback(err, response);
  // })


  //confirmed working with postman
  getOneMatch: (data, callback) => {
    pool.query(`SELECT * FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner1_name}' AND dog_details.dog_name = '${data.dog1_name}') OR (match_dog.owner_name = '${data.owner1_name}' AND match_dog.dog_name = '${data.dog1_name}')) AND ((dog_details.owner_name = '${data.owner2_name}' AND dog_details.dog_name = '${data.dog2_name}') OR (match_dog.owner_name = '${data.owner2_name}' AND match_dog.dog_name = '${data.dog2_name}')))`, (err, response) => {
      callback(err, response);
    })
  },
  //confirmed working with postman
  addAMatch: (data, callback) => {
    pool.query(`INSERT INTO dog_matches (dog1_id, dog2_id, accepted) SELECT (SELECT dog_id AS dog1_id FROM dog_details WHERE dog_name = '${data.dog1_name}' AND owner_name = '${data.owner1_name}' ) AS dog1_id, (SELECT dog_id AS dog2_id FROM dog_details WHERE dog_name = '${data.dog2_name}' AND owner_name = '${data.owner2_name}' ) AS dog2_id, false AS accepted;`, (err, response) => {
      callback(err, response);
    })
  },
  //confirmed working with postman
  updateMatch: (data, callback) => {
    pool.query(` UPDATE dog_matches SET accepted = true WHERE match_id IN (SELECT match_id FROM dog_matches JOIN dog_details ON dog_matches.dog1_id = dog_details.dog_id JOIN dog_details AS match_dog ON dog_matches.dog2_id = match_dog.dog_id WHERE (((dog_details.owner_name = '${data.owner1_name}' AND dog_details.dog_name = '${data.dog1_name}') OR (match_dog.owner_name = '${data.owner1_name}' AND match_dog.dog_name = '${data.dog1_name}')) AND ((dog_details.owner_name = '${data.owner2_name}' AND dog_details.dog_name = '${data.dog2_name}') OR (match_dog.owner_name = '${data.owner2_name}' AND match_dog.dog_name = '${data.dog2_name}'))));`, (err, response) => {
      callback(err, response);
    })
  },
  //confirmed working with postman
  deleteAMatch: (params, data, callback) => {
    pool.query(`DELETE FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${params.dog1_name}' AND owner_name = '${params.owner1_name}') AND dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog2_name}' AND owner_name = '${data.owner2_name}');`, (err, response) => {
      callback(err, response);
    })
  },




  //dog info queries *******************************************
  //confirmed working
  getUnmatched: (data, selections, callback) => {
    if (selections.size && selections.breed && selections.personality) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND size = '${selections.size}' AND breed = '${selections.breed}' AND personality = '${selections.personality}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else if (selections.size) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND size = '${selections.size}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else if (selections.breed) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND breed = '${selections.breed}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else if (selections.personality) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND personality = '${selections.personality}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else if (selections.size && selections.breed) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND size = '${selections.size}' AND breed = '${selections.breed}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else if (selections.size && selections.personality) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND size = '${selections.size}' AND personality = '${selections.personality}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else if (selections.breed && selections.personality) {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND personality = '${selections.personality}' AND breed = '${selections.breed}';`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    } else {
      pool.query(`WITH step1 AS (SELECT dog2_id as doggieid FROM dog_matches WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') union SELECT dog1_id AS doggieid FROM dog_matches WHERE dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}')) SELECT * FROM dog_details WHERE dog_id NOT IN (SELECT doggieid FROM step1) AND dog_id != (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}') AND zipcode = (SELECT zipcode FROM dog_details WHERE dog_name = '${data.dog_name}' AND owner_name = '${data.owner_name}');`, (err, response) => {
        if(err) {
          console.log(err);
        } else {
          callback(err, response);
        }
      })
    }
  },
  //confirmed working with postman
  getDogDescription: (data, callback) => {
    pool.query(`SELECT * FROM dog_details WHERE owner_name = '${data.owner_name}' AND dog_name = '${data.dog_name}'`, (err, response) => {
      callback(err, response);
    });
  },
  getOwnersDogs: (data, callback) => {
    pool.query(`SELECT * FROM dog_details WHERE owner_name = '${data.owner_name}`, (err, response) => {
      callback(err, response);
    })
  },
  //Confirmed with postman
  editDogDescription: (data, params, callback) => {
      pool.query(`UPDATE dog_details SET size = '${data.size}', personality = '${data.personality}', description = '${data.description}', age = '${data.age}', gender = '${data.gender}', photos = '${JSON.stringify(data.photos)}', zipcode = '${data.zipcode}' WHERE owner_name = '${params.owner_name}' AND dog_name = '${params.dog_name}'`, (err, response) => {
        callback(err, response);
      });
  },
  //Confirmed with postman
  postDogDescription: (data, callback) => {
    pool.query(`INSERT INTO dog_details (owner_name, display_name, dog_name, breed, size, age, gender, personality, description, photos, zipcode) VALUES ('${data.owner_name}', '${data.display_name}','${data.dog_name}', '${data.breed}', '${data.size}', '${data.age}', '${data.gender}', '${data.personality}', '${data.description}', '${JSON.stringify(data.photos)}', '${data.zipcode}')`, (err, response) => {
      callback(err, response);
    });
  },
//confirmed with postman
  postEvent: (data, callback) => {
    pool.query(`INSERT INTO events (dog1_id, dog2_id, event_name, date, location) SELECT (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog1_name}' AND owner_name = '${data.owner1_name}') AS dog1_id, (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog2_name}' AND owner_name = '${data.owner2_name}') AS dog2_id, '${data.event_name}' AS event_name, '${data.date}' AS date, '${data.location}' AS location`, (err, response) => {
      callback(err, response);
    });
  },
  //confirmed with postman
  getAllEvents: (data, callback) => {
    pool.query(`SELECT events.*, matched_dog.* FROM events JOIN dog_details ON events.dog1_id = dog_details.dog_id JOIN dog_details AS matched_dog ON events.dog2_id = matched_dog.dog_id WHERE dog_details.dog_name = '${data.dog_name}' AND dog_details.owner_name = '${data.owner_name}';`, (err, response) => {
      callback(err, response);
    });
  },
  //confirmed with postman
  deleteEvent: (data, callback) => {
    pool.query(`DELETE FROM events WHERE dog1_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog1_name}' AND owner_name = '${data.owner1_name}') AND dog2_id IN (SELECT dog_id FROM dog_details WHERE dog_name = '${data.dog2_name}' AND owner_name = '${data.owner2_name}')`, (err, response) => {
      callback(err, response);
    });
  },
};