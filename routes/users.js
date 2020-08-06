var express = require("express");
var router = express.Router();
const users = require("../mockData/users");
/* GET users listing. */
router.get("/:id", function (req, res, next) {
  const result = users.find((u) => u.id === parseInt(req.params.id));
  if (result) return res.json(result);
  return res.status(404).send({ message: "Нет пользователя с данным ID" });
});

router.get("/", function (req, res, next) {
  res.json({ users });
});

router.post("/", (req, res) => {
  const body = req.body;

  if (!body.name)
    res.status(400).send({
      message:
        "Имя пользователя - обязательное поле для создание нового пользователя",
    });
  res.status(201).send({
    id: 1005,
    name: req.body.name,
    roles: ["user"],
  });
});

module.exports = router;
