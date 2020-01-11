import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <span>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/18/a8/59/5a/urban-foods.jpg" alt=""
                className="logo logo-footer"
              />

              <p className="footer-links">
                <a href="#" className="link-1">
                  Home
                </a>

                <a href="#">About</a>

                <a href="#">Services</a>

                <a href="#">Contact</a>
              </p>
            </span>
            <p className="footer-company-name">Company Name © 2015</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker envelop"></i>
              <p>
                <span></span>
              </p>
            </div>

            <div>
              <i class="fa fa-phone envelop"></i>
              <Link to="/reservation">
                <button className="reserver ">Reservation</button>
              </Link>
            </div>

            <div>
              <Link to="/Contact">
                <i className="fa fa-envelope envelop"></i>
              </Link>
              <p>
                <a href="mailto:support@company.com"></a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About Our Urbain Foods</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div class="footer-icons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Facebook_Icon_%28Single_Path_-_Transparent_%22f%22%29.svg/1024px-Facebook_Icon_%28Single_Path_-_Transparent_%22f%22%29.svg.png"
                className="facebook face-icon"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Google_Plus_logo_2015.svg/1024px-Google_Plus_logo_2015.svg.png"
                className="facebook face-icon"
              />
              <img
                src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"
                className="facebook face-icon"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
                className="facebook face-icon"
              />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
