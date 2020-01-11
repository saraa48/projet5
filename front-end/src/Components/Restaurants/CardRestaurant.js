import "./CardStyle.css";
import { Link } from "react-router-dom";
import Update from "./Update";

import React, { Component } from "react";

class CardRestaurant extends Component {
  render() {
    const { restaurant, deleteRestaurant, getRestaurant} = this.props;
    return (
      <div>
        <figure className="snip1256">
          <img src={restaurant.img} alt="sample42" />
          <figcaption>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.specialite}</p>
            <p>{restaurant.address}</p>


            <div className="btn-card">
            
              {/* <button
                className=" btn btn-danger"
                onClick={() => deleteRestaurant(restaurant._id)}
              >
                Supprimer
              </button> */}
              <Link to={`/menu/${restaurant._id}`}>
                <button className="btn">Voir menu</button>
              </Link>
              
              {/* {/* <Update getRestaurant={getRestaurant} restaurant={restaurant} /> */}
            </div> 
          </figcaption>
        </figure>
      </div>
    );
  }
}
export default CardRestaurant;
