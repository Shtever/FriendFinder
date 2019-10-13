var userData = require("../data/friends");

module.exports = function (app) {

app.get("/api/users", function (req, res) {
    res.json(userData);
});
}
