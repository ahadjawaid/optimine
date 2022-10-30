import Userfront from "@userfront/core";
import UserService from "./UserService";

const keys = require("../data/config");
Userfront.init(keys.userfrontTenantID);

class AuthService {
  static get authenticated() {
    return Boolean(Userfront.tokens.accessToken);
  }

  static get user() {
    return Userfront.user;
  }

  static get accessToken() {
    return Userfront.tokens.accessToken;
  }

  static registerWithEmail(name, email, password, setErrorMessage) {
    Userfront.signup({
      method: "password",
      name: name,
      email: email,
      password: password,
      redirect: "/dashboard",
    }).catch((error) => {
      setErrorMessage(error.message);
    }).then(UserService.loadUser);
  }

  static loginWithEmail(email, password, setErrorMessage) {
    Userfront.login({
      method: "password",
      email: email,
      password: password,
      redirect: "/dashboard",
    }).catch((error) => {
      setErrorMessage(error.message);
    }).then(UserService.loadUser);
  }

  static logout() {
    Userfront.logout({
      redirect: "/login",
    });
  }
}

export default AuthService;