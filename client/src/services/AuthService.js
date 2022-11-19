import Userfront from "@userfront/core";

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
    });
  }

  static loginWithEmail(email, password, setErrorMessage) {
    Userfront.login({
      method: "password",
      email: email,
      password: password,
      redirect: "/dashboard",
    }).catch((error) => {
      setErrorMessage(error.message);
    });
  }

  static logout() {
    Userfront.logout({
      redirect: "/login",
    });
  }
}

export default AuthService;