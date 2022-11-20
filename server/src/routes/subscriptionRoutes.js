const { CreateCheckoutSession, CreatePortalSession, SaveCheckoutSession } = require("../controller/paymentController");

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

  app.post("/api/save-checkout-session", async (req, res) => {
    const { authorization } = req.headers;
    const { checkoutSessionId } = req.body;

    SaveCheckoutSession(authorization, checkoutSessionId).then((user) => {
      res.status(200).send({ user: user });
    }).catch(() => {
      res.status(401);
    });
  })

  app.post("/api/create-portal-session", async (req, res) => {
    const { authorization } = req.headers;

    CreatePortalSession(authorization).then((url) => {
      res.status(201).send({ url: url });
    }).catch(() => {
      res.status(401);
    });
  });
}