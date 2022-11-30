import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import PricingPage from "./pages/PricingPage";
import DefaultPage from "./pages/DefaultPage";
import Analysis from "./pages/Analysis";

// Redux
import { fetchUser } from './store/actions';
import { ThemeProvider } from "@mui/material";

// Theming
import "./data/App.css";
import Checkout from "./pages/Checkout";
const theme = require("./data/theme.js");

class App extends React.Component {
  // Contains routes for the pages
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/settings" element={<DefaultPage>Settings</DefaultPage>} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/privacy" element={<DefaultPage>Privacy</DefaultPage>} />
            <Route path="/cookie" element={<DefaultPage>Cookies</DefaultPage>} />
            <Route path="/copywrite" element={<DefaultPage>Copyright</DefaultPage>} />
            <Route path="/terms" element={<DefaultPage>Terms and Conditions</DefaultPage>} />
            <Route path="/contact" element={<DefaultPage>Contact Us</DefaultPage>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
