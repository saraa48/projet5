import React, { Component } from "react";
import "../Css/Style.css";
// import FontAwesome from "react-fontawesome";
// import { Link } from "react-router-dom";
import CardMenu from "./CardMenu";
import axios from "axios";
import AddMenu from "../AddMenu";
import Navebar from "../navbar/Navebar";
class ListMenu extends Component {
  state = {
    OurMenu: [],
    modal: false
  };
  componentDidMount = () => {
    this.getMenu(this.props.match.params.id);
  };

  getMenu = (idRest) => {
    axios.get(`/ProjectRest/menu/oneRest/${idRest}`).then(res =>
      this.setState({
        OurMenu: res.data
      })
    );
  };
  deleteMenu = id => {
    axios.delete(`/ProjectRest/menu/${id}`).then(this.getMenu);
  };

  newMenu = nMenu => {
    axios
      .post("/ProjectRest/menu/", {
        img: nMenu.img,
        plat: nMenu.plat,
        description: nMenu.description,
        price: nMenu.price,
        type: nMenu.type,
        restaurant:nMenu.restaurant
      })
      .then(this.getMenu);

    // console.log("anythinng");
  };
  modifyMenu = modifOneMenu =>
    axios
      .put(`/ProjectRest/menu/${modifOneMenu._id}`, {
        img: modifOneMenu.img,
        plat: modifOneMenu.plat,
        description: modifOneMenu.description,
        price: modifOneMenu.price,
        type: modifOneMenu.type
      })
      .then(this.getMenu());

  toggle = () => this.setState({ ...this.state, modal: !this.state.modal });

  render() {
    console.log(this.props)
    return (
      <div>
        <Navebar />
        <div className="image-Menu">
          {this.state.OurMenu.map((el, key) => (
            <CardMenu
              key={key}
              menu={el}
              deleteMenu={this.deleteMenu}
              toggle={this.toggle}
              getMenu={this.getMenu}
              modifyMenu={this.modifyMenu}
            />
            
          ))
          }
          {/* <Link to="/">
          <FontAwesome className="fas fa-backward angle " />
        </Link> */}
            {/* <AddMenu
            AddMenu={this.newMenu}
            modal={this.state.modal}
            toggle={this.toggle}
            // isEdite={false}
          /> */}
         
        </div>
       
      </div>
    );
  }
}
export default ListMenu;
