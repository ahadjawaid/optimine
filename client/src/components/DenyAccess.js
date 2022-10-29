import React from "react";
import { Navigate } from "react-router-dom";
import Userfront from "@userfront/core";

class DenyAccess extends React.Component {
  render() {
    let deny = (this.props.when === "loggedin");
    let target = this.props.redirect;

    if (Boolean(Userfront.tokens.accessToken) === deny) {
      return <Navigate to={target} replace />;
    }

    return this.props.children;
  }
}

export default DenyAccess;