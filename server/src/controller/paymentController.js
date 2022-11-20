const config = require("../config");
const assert = require('assert');
const stripe = require("stripe")(config.stripeSecretAPIKey);
const { GetUser, UpdateUser } = require("./userController");

async function GetSubscription(authorization) {
  const { user } = await GetUser(authorization);
  const { stripeCustomerId } = user;

  if (stripeCustomerId == null) 
    throw Error("Invalid Stripe Customer Id");

  const subscriptions = await stripe.subscriptions.list({
    customer: stripeCustomerId,
  });

  let subType = null;
  subscriptions.data.forEach(subscription => {
    if (subscription.status == "active")
      subType = subscription.plan.product;
  });

  return subType;
}

async function CreateCheckoutSession(authorization, productKey) {
  const { user } = await GetUser(authorization);
  const { email, stripeCustomerId } = user;

  await GetSubscription(authorization).then(() => {
    return CreatePortalSession(authorization);
  }).catch(() => {});

  // get product price
  const prices = await stripe.prices.list({
    product: productKey,
    expand: ["data.product"],
  });

  // create checkout session
  let id = (stripeCustomerId === null) ? {customer_email: email} : {customer: stripeCustomerId};
  const session = await stripe.checkout.sessions.create({
    ...id,
    billing_address_collection: "auto",
    line_items: [
      {
        price: prices.data[0].id,
      },
    ],
    mode: "subscription",
    success_url: `${config.redirectDomain}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.redirectDomain}/checkout?canceled=true`,
  });

  // give checkout session url back to the client
  return session.url;
}

async function SaveCheckoutSession(authorization, checkoutSessionId) {
  const checkoutSession = await stripe.checkout.sessions.retrieve(checkoutSessionId);
  assert(checkoutSession.status === "complete", "Unable to save incomplete checkout session");

  const { customer } = checkoutSession;
  const user = await UpdateUser(authorization, { stripeCustomerId: customer });

  return user;
}

async function CreatePortalSession(authorization) {
  const { user } = await GetUser(authorization);
  const { stripeCustomerId } = user;

  if (stripeCustomerId == null)
    return `${config.redirectDomain}/pricing`;

  // create portal session
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${config.redirectDomain}/account`,
  }).catch((error) => console.log(error.message));

  // give portal session url back to the client
  return portalSession.url;
}

module.exports.GetSubscription = GetSubscription;
module.exports.CreateCheckoutSession = CreateCheckoutSession;
module.exports.SaveCheckoutSession = SaveCheckoutSession;
module.exports.CreatePortalSession = CreatePortalSession;