const { GetUser } = require("../controller/UserController");

module.exports = (app) => {
  app.post("/api/user", async (req, res) => {
    const { authorization } = req.headers;

    GetUser(authorization).then(({ user, created }) => {
      res.status(created ? 201 : 200).send({ user: user });
    }).catch(() => {
      res.status(401);
    });
  });
}