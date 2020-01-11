import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

class Logout extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      loggedIn: true
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/users/login", user)
      .then(res =>
        res.status == 200
          ? this.setState({ ...this.state, loggedIn: false })
          : console.log("error")
      )
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    if ((this.state.loggedIn = false)) {
      console.log("object", this.state.loggedIn);
    }
    return (
      <div className="login">
        <Redirect to="/login" />;
      </div>
    );
  }
}
export default Logout;
