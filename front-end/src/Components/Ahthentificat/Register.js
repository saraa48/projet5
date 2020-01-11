import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "owner",
      errors: {},
      auth: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      return alert("champ vide");
    } else {
      this.setState({ auth: true });
    }

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
    // localStorage.setItem("token", res.data.auth.access_token);
  }

  render() {
    const { errors } = this.state;

    if (this.state.auth && this.state.role === "customer") {
      return <Redirect to="/reservationPage" />;
    } else if (this.state.auth && this.state.role === "owner") {
      return <Redirect to="/dashboardRestau" />;
    }
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <h3 className="lead text-center">Create a account</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  {/* <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small> */}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  {/* <input
                    type="tse"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="role"
                    name="role"
                    value={this.state.role}
                    onChange={this.onChange}
                  /> */}
                  <select
                    name="role"
                    form="carform"
                    value={this.state.role}
                    onChange={this.onChange}
                  >
                    <option value="owner">owner</option>
                    <option value="customer">customer</option>
                  </select>

                  {/* {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )} */}
                </div>

                <button type="submit" className="btn btn-info btn-block mt-4">
                  Submit
                </button>
                <button type="submit" className="btn btn-info btn-block mt-4">
                  <Link to="/login"> Have an Account?</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;