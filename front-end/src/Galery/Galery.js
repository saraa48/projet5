import React, { Component } from "react";
import "./GaleryStyle.css"
import Navebar from "../Components/navbar/Navebar";
import { Link } from "react-router-dom";

class Galery extends Component {
    state={
        vid:"https://www.youtube.com/embed/jzeV61DyEDk"
    }
  render() {
    return (
      <div>
          <Navebar/>

          <section className="Our-galery">
          
              <img  className="image-hamberger" src="https://previews.123rf.com/images/yvdavyd/yvdavyd1505/yvdavyd150500656/39468744-hamburger-isol%C3%A9-sur-fond-blanc.jpg" alt=""/>
              <Link to="/">
              <h1>Menu ← Only Quality Food</h1>
          </Link>
          <div className="team">
          <h4>
 We have a team approach to serve customers and offer thousands of products at competitive prices. We are the largest supplier of local products on the island.</h4>
 </div></section>
        
          <div className="section">
          <h2>View All</h2>
          <h2>BreakFast</h2>
          <h2>Lunch</h2>
          <h2>Dinner</h2>
          <h2>Snacks</h2>

          </div>
       
       <div > 
           <iframe className="vidéo"src="https://www.youtube.com/embed/XwHurP9RH-s"></iframe>
       </div>
          <div className="galery">
          <div >
          
            <img className="plat"
              src="https://www.theforkmanager.com/wp-content/uploads/2018/08/la-fourchette-the-fork-restaurant-bio-2.jpg"
              alt=""
            />
            
            <button className="btn btn-outline-success button">plus de détails
       
            </button>
          
          </div>
          <div >
            <img className="plat"
              src="http://storage-cube.quebecormedia.com/v1/cdp_prod/coup_de_pouce/f5f55e9d79f6edda9c81e6d70844e1dd634775ba/Sandwichs-poulet-thaie.jpg"
              alt=""
            />
            <button className="btn btn-outline-success button">plus de détails</button>
          </div>
          <div >
            <img className="plat"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzkTsSBH3XIdzoBtYUduRdg_riCAlTPbX6ZBOV-o91Ait85NTF"
              alt=""
            />
            <button className="btn btn-outline-success button">plus de détails</button>
          </div>
          </div>
      
      </div>
    );
  }
}
export default Galery;
