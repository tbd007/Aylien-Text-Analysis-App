const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const Aylien = require("aylien_textapi");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});

const textapi = new Aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});


app.post("/api", (req, res) => {
  textapi.sentiment(
    {
      text: req.body.formtext
    },
    function(error, response) {
      if (error === null) {
        //JSON.parse(response);
        console.log(response);
        res.send(response);
      } else {
        console.log("error:", error);
      }
    }
  );
});


