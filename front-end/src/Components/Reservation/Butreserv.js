import React from "react";
// import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Butreserv = () => (
  <Button>
    <Link to="/register">Reserve</Link>
  </Button>
);
export default Butreserv;
