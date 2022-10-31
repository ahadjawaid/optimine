const { GetUser, GetUserUuid } = require("../controller/UserController");

module.exports = (app) => {
  app.post("/api/user", async (req, res) => {
    GetUser(req.headers.authorization).then(({ user, created }) => {
      res.status(created ? 201 : 200).send({ user });
    }).catch(() => {
      res.status(401);
    });
  });
}