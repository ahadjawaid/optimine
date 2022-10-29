import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Setting from "./pages/Setting";

// Redux
import { fetchUser } from './store/actions';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
