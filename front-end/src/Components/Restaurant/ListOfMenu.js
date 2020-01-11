import React, { Component } from 'react'
import CardOfMenu from './CardOfMenu';
import axios from "axios";
import "../navbar/Navebar.css"
class ListOfMenu extends Component {

    state = {
        OurMenu: [],
        modal: false
      };
      componentDidMount = () => {
        this.getMenu();
      };
    
      getMenu = (idRest) => {
        axios.get("/ProjectRest/menu/").then(res =>
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
        return (
            <div>
                 <table class="w-full text-left shadow-md bg-white rounded-lg">
                        <thead>
                          <tr>
                            <th class="py-4 px-6 bg-green-800 font-bold uppercase text-sm text-gray-100 border-r border-green-300">
                          
                            </th>
                          </tr>
                          <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-white-100 border-r border-dark"></th>
                         <div className="cards-Menu"> {this.state.OurMenu.map((el, key) => (
                            <CardOfMenu menu={el}  
                            deleteMenu={this.deleteMenu}
                            toggle={this.toggle}
                            getMenu={this.getMenu}
                            modifyMenu={this.modifyMenu}
                            
                            />
                            
                          ))}
                          </div>
                        </thead>
                      </table> 
            </div>
        )
    }
}
export default ListOfMenu ;