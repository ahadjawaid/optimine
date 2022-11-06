import config from "../data/config";
import AuthService from "./AuthService";

class SubscriptionService {
  static getSubscriptionOptions() {
    return [
      {
        title: "Basic",
        specifications: [
          "$0.04 per tweet",
        ],
        price: {
          value: 0,
          type: "month",
        },
        productKey: "prod_MjEjUhseRjgDev",
      },
      {
        title: "Standard",
        specifications: [
          "1,500 free tweets/month",
          "$0.02 per additional tweet",
        ],
        price: {
          value: 1000,
          type: "month",
        },
        productKey: "prod_MjEkaVNEV84rYU",
      },
      {
        title: "Premium",
        specifications: [
          "15,000 free tweets/month",
          "$0.01 per additional tweet",
        ],
        price: {
          value: 5000,
          type: "month",
        },
        productKey: "prod_MjEl0zTPhTWiX4",
      },
    ];
  }

  static async createCheckout(productKey) {
    const response = await fetch(`${config.apiURL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthService.accessToken}`,
      },
      body: JSON.stringify({ productKey: productKey }),
    });

    return response.json();
  }

  static async saveCheckout(checkoutSessionId) {
    const response = await fetch(`${config.apiURL}/save-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthService.accessToken}`,
      },
      body: JSON.stringify({ checkoutSessionId: checkoutSessionId }),
    });

    return response.json();
  }

  static async manageSubscriptions() {
    const response = await fetch(`${config.apiURL}/create-portal-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthService.accessToken}`,
      },
    });

    return response.json();
  }
}

export default SubscriptionService;