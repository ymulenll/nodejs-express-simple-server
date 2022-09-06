var express = require("express");
var router = express.Router();
const users = require("../fixtures/users.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const nameFilter = req.query.name;

  const usersFilterd = nameFilter
    ? users.filter((user) =>
        user.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : users;

  res.json(usersFilterd);
});

module.exports = router;
