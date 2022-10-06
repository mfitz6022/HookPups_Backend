require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');
const app = express();

app.use(express.json());


//routes for dog_matches table
//confirmed working
app.get("/matches/:owner_name/:dog_name/confirmed", (req, res) => {
  const params = req.params;
  db.getAllConfirmedMatches(params, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.json(response.rows);
    }
  })
});
//confirmed working
app.get("/matches/:owner_name/:dog_name/pending", (req, res) => {
  const params = req.params;
  db.getAllPendingMatches(params, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response.rows);
    }
  })
});
//confirmed working
app.post("/matches", (req, res) => {
  const params = req.body;
  db.getOneMatch(params, (err, response) => {
    if(err) {
      console.log(err);
    } else if (!response.rows.length) {
      db.addAMatch(params, (err) => {
        if(err) {
          console.log(err);
        } else {
          res.sendStatus(201);
        }
      })
    } else {
      db.updateMatch(params, (err) => {
        if(err) {
          console.log(err);
        } else {
          res.sendStatus(201);
        }
      })
    }
  })
});
//confirmed working
app.delete("/matches/:owner1_name/:dog1_name", (req, res) => {
  const params = req.params;
  const data = req.body;
  db.deleteAMatch(params, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});


//routes for dog_description table

//confirmed working
app.get("/description/unmatched/:owner_name/:dog_name", (req, res) => {
  const params = req.params;
  const selections = req.query;
  db.getUnmatched(params, selections, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response.rows);
    }
  })
});

//confirmed working
app.get("/description/:owner_name/:dog_name", (req, res) => {
  const params = req.params;
  db.getDogDescription(params, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response.rows);
    }
  })
});
app.get("/description/:owner_name", (req, res) => {
  const params = req.params;
  db.getOwnersDogs(params, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response.rows);
    }
  })
});
//confirmed working
app.put("/description/:owner_name/:dog_name", (req, res) => {
  const updates = req.body;
  const params = req.params;
  db.editDogDescription(updates, params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  });
});
//confirmed working
app.post("/description", (req, res) => {
  const params = req.body;
  db.postDogDescription(params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});
//confirmed working with postman
app.post("/events", (req, res) => {
  const params = req.body;
  db.postEvent(params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});
//confirmed working with postman
app.get("/events/:owner_name/:dog_name", (req, res) => {
  const params = req.params;
  db.getAllEvents(params, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response.rows);
    }
  })
});
//confirmed working with postman
app.delete("/events/:event_id", (req, res) => {
  const params = req.params;
  db.deleteEvent(params, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  })
});

var PORT = `${process.env.PORT}` || 3000;
app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
  console.log(`Database: ${process.env.DB_NAME}`);
});
