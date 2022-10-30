import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/AuthService";

class DenyAccess extends React.Component {
  render() {
    let deny = (this.props.when === "loggedin");

    if (AuthService.authenticated === deny)
      return <Navigate to={this.props.redirect} replace />;

    return this.props.children;
  }
}

export default DenyAccess;