import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      loggedAdmin: false,
      loggedPavarotti: false,
      loggedIn: false,
      message: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    //---------------------------------------------------
    //                 login Admin
    //---------------------------------------------------
    const { email, password } = this.state;
    if (email === "admin@admin.com" && password === "admin") {
      this.setState({
        loggedAdmin: true
      });
    }
    //---------------------------------------------------
    //                 login Restaurant
    //---------------------------------------------------

    if (email === "pavarotti@pavarotti.com" && password === "pavarotti") {
      this.setState({
        loggedPavarotti: true
      });
    }
    // ---------------------------------------------------
    axios
      .post("/api/users/login", user)
      .then(res =>
        res.status == 200
          ? this.setState({ ...this.state, loggedIn: true })
          : res.status(400).json({ message: "Login or Password incorrect" })
      )
      .catch(err => this.setState({ errors: err.response.data }));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.loggedAdmin) {
      return <Redirect to="/dashboard" />;
    }

    if (this.state.loggedPavarotti) {
      return <Redirect to="/dashboardRestau" />;
    }

    if (this.state.loggedIn) {
      console.log("object", this.state.loggedIn);
      return <Redirect to="/reservationPage" />;
    }
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
