import config from "../data/config";
import AuthService from "./AuthService";

class UserService {
  static async getUser() {
    const response = await fetch(`${config.apiURL}/user`, {
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