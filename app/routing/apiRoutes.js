var userData = require("../data/friends");

var express = require("express");
var app = express();
app.use(express.static("public"));

module.exports = function (app) {

app.get("/api/users", function (req, res) {
    res.json(userData);
});


app.post("/api/users", function(req, res) {
      userData.push(req.body);
      res.json(true);
    })
};