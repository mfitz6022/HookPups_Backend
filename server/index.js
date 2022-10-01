require("dotenv").config();
const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const db = require('./db.js');
const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {cors: {
    origin: "http://localhost:3001",
    methods: ['GET', 'POST']
  }});

app.use(cors());
app.use(express.json());


//routes for chat table
app.get("/messages/:chatroom_id", (req, res) => {
  db.getChatroomMessages(params, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.json(response);
    }
  })
});
app.put("/messages/:chatroom_id", (req, res) => {
  db.updateChatroomMessages(params, (err) => {
    if(err) {
      console.log(err)
    } else {
      res.sendStatus(201);
    }
  })
});
app.post("/messages", (req, res) => {
  db.addNewChatroom(params, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});
app.delete("/message/:chatroom_id", (req, res) => {
  db.deleteChatroom(params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});


//routes for dog_matches table
app.get("/matches/:dog_id/confirmed", (req, res) => {
  db.getAllConfirmedMatches(params, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.json(response);
    }
  })
});
app.get("/matches/:dog_id/pending", (req, res) => {
  db.getAllPendingMatches(params, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response);
    }
  })
});
app.post("/matches", (req, res) => {
  db.addAMatch(params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});

app.delete("/matches/:dog_id", (req, res) => {
  db.deleteAMatch(params, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});


//routes for dog_description table
app.get("/description/:dog_name", (req, res) => {
  db.getDogDescription(params, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.json(response);
    }
  })
});
app.put("/description/:dog_name", (req, res) => {
  db.editDogDescription(params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});
app.post("/description", (req, res) => {
  db.postDogDescription(params, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
});



var PORT = `${process.env.PORT}` || 3000;
app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
  console.log(`Database: ${process.env.DB_NAME}`);
});

httpServer.listen(3001, () => {
  console.log("socket is listening at localhost:3001");
});