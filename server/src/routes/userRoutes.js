const { VerifyAccessToken } = require("../controller/UserController");

module.exports = (app) => {
  app.post("/api/user", async (req, res) => {
    // TODO: return user to client
    let user = await VerifyAccessToken(req.headers.authorization);
    console.log(user);
  });
}