const config = require("../config");
const stripe = require("stripe")(config.stripeSecretAPIKey);
const { GetUserId } = require("./userController");

async function CreateCheckoutSession(authorization, productKey) {
  await GetUserId(authorization);

  // get product price
  const prices = await stripe.prices.list({
    product: productKey,
    expand: ["data.product"],
  });

  // create checkout session
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    line_items: [
      {
        price: prices.data[0].id,
      },
    ],
    mode: "subscription",
    success_url: `${config.redirectDomain}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.redirectDomain}/pricing?canceled=true`,
  });

  // give checkout session url back to the client
  return session.url;
}

module.exports.CreateCheckoutSession = CreateCheckoutSession