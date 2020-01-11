import React, { Component } from "react";
import CardRestaurant from "./CardRestaurant";
import "./CardStyle.css";
import axios from "axios";
import Navebar from "../navbar/Navebar";
import Footer from "../footer/Footer";
import Caroussel from "../slider/Caroussel";
import Partener from "../partner/Partener ";
import CardMenu from "../OurMenu/CardMenu";

class ListRestaurant extends Component {
  state = {
    OurRest: [],
    ourMenu:[],
    userInput: "",
    priceInput:"",
    typeInput:""
  };
  componentDidMount = () => {
    this.getRestaurant();
    this.getMenu();
  };

  getRestaurant = () => {
    axios.get("/ProjectRest/restaurant/").then(res =>
      this.setState({
        OurRest: res.data
      })
    );
  };
  deleteRestaurant = id => {
    axios.delete(`/ProjectRest/restaurant/${id}`).then(this.getRestaurant);
  };
  changeName = input => {
    this.setState({ ...this.state, userInput: input });
   
  };
  changePrice = inputPrice => {
    this.setState({ ...this.state, priceInput:inputPrice });
 
  };
  changeType = typeInput => {
    this.setState({ ...this.state, typeInput:typeInput });
 
  };
  getMenu = () => {
    axios.get("/ProjectRest/menu/").then(res =>
      this.setState({
        ourMenu: res.data
      })
    );
  };

  render() {
    return (
      <div>
        <div className="nav-menu">
        <span>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/18/a8/59/5a/urban-foods.jpg" alt=""
            className="logo"
          />
        </span>
        <nav>
          <ul>
            <li>
              <div className="input-btn">
                <span>
                  <input
                    type="text"
                    
                    placeholder="Search for your favorite restau"
                    className="input"
                    onChange={(e)=>{this.changeName(e.target.value)}}
                  />
                </span>
              </div>
            </li>
            <li>
            <select class="custom-select"  onChange={(e)=>{this.changePrice(e.target.value)}} >      
  <option selected>Price</option>
  {this.state. ourMenu.map((el, key) => (
  <option>{el.price}</option>
  ))}
</select>
</li>
<li>
search your favourite Plat:
<select class="custom-select" onChange={(e)=>{this.changeType(e.target.value)}} >      
  <option selected>Name of plat</option>
  {this.state. ourMenu.map((el, key) => (
  <option>{el.plat}</option>
  ))}
</select>
</li>
         
            
   
             
          </ul>
        </nav>
      </div>
      <div className="image-Menu">

{
  this.state.priceInput&&this.state.typeInput ? this.state.ourMenu.filter(el =>
    el.price<(this.state.priceInput)||
    el.plat.toLowerCase()
    .includes(this.state.typeInput.toLowerCase().trim())
  ).map((el,key)=><CardMenu menu={el}/>)

:null

}
</div>
{/* <div className="image-Menu">
{
  this.state.typeInput ? this.state.ourMenu.filter(el =>
    el.type<=(this.state.typeInput)
  ).map((el,key)=><CardMenu menu={el}/>)

:null

}

</div> */}

        <Caroussel /> 
         <Partener />
        <div className="liste-restaurants">
          {this.state.userInput
            ? this.state.OurRest.filter(el =>
                el.name
                  .toLowerCase()
                  .includes(this.state.userInput.toLowerCase().trim())
              ).map((el,key)=><CardRestaurant
                key={key}
                restaurant={el}
                getRestaurant={this.getRestaurant}
                deleteRestaurant={this.deleteRestaurant}
              />)
            : this.state.OurRest.map((el, key) => (
                <CardRestaurant
                  key={key}
                  restaurant={el}
                  getRestaurant={this.getRestaurant}
                  deleteRestaurant={this.deleteRestaurant}
                />

                // this.state.userInput
                //   ? this.state.Mytab.filter(
                //       el =>

                //         el.name
                //           .toLowerCase()
                //           .includes(this.state.userInput.toLowerCase())
                //     )
                //   : this.state.Mytab.filter(el=>el.rating>=this.state.rating)
              ))}
          
        </div>
        <Footer />
      </div>
    );
  }
}
export default ListRestaurant;
