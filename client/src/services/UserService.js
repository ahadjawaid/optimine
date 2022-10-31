import AuthService from "./AuthService";

const keys = require("../data/config");

class UserService {
  static async getUser() {
    const response = await fetch(`${keys.apiURL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthService.accessToken}`,
      },
    });

    return response.json();
  }
}

export default UserService;