const { CreateCheckoutSession } = require("../controller/paymentController");

module.exports = (app) => {
  app.post("/api/create-checkout-session", async (req, res) => {
    const { authorization } = req.headers;
    const { productKey } = req.body;

    CreateCheckoutSession(authorization, productKey).then((url) => {
      res.status(201).send({ url: url });
    }).catch(() => {
      res.status(401);
    });
  });
}