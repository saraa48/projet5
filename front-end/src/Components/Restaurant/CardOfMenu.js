import React, { Component } from "react";
import Update from "../Restaurants/Update";
// import AddMenu from "../AddMenu";
// import Navebar from "../navbar/Navebar";
// import Update from "../Restaurants/Update";
// import UpdateMenu from "./UpdateMenu";
class CardOfMenu extends Component {
  state = {
    modal: false
  };

  //  toggle=()=>this.setState({modal:!this.state.modal});

  render() {
    const { menu,deleteMenu,modifyMenu} = this.props;
    return (
    
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={menu.img} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-black">{menu.plat}</div>
          <p class="text-gray-700 text-base">
              {menu.description}
           </p>

        </div>
        <div class="px-6 py-4">
        
          <button   onClick={() => deleteMenu(menu._id)} class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</button>
          <Update menu={menu} modifyMenu={modifyMenu}/>
         
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Price{menu.price}:dinars</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
      </div>
    );
  }
}

export default  CardOfMenu;
