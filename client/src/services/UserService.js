import AuthService from "./AuthService";

const keys = require("../data/config");

class UserService {
  static loadUser() {
    // TODO: handle response from server and store
    fetch(`${keys.apiURL}/user`, {
      method: "POST",
      headers: {
        Authorization: `${AuthService.accessToken}`,
      },
    });
  }
}

export default UserService;