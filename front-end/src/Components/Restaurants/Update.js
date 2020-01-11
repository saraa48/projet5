import React, { Component } from "react";
import axios from "axios"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";



class Update extends Component {
  state = {
    modal: false,
    _id:this.props.menu._id,
    plat:this.props.menu.plat,
    price:this.props.menu.price,
    description:this.props.menu.description,
    img:this.props.menu.img,
    type:this.props.menu.type
    
  };
  
  // modifyRestaurant = modifRest =>
  // axios.put(`/ProjectRest/M/${modifRest._id}`, {
  //   name: modifRest.name,
  //   address: modifRest.address,
  //   specialite: modifRest.specialite,
  //   img:modifRest.img
  // }).then(this.props.getRestaurant());

  toggle = () => this.setState({ modal: !this.state.modal });

  HandleChange = e => {
    this.setState({
      
        [e.target.id]: e.target.value
      
    });
  };
  render() {
    

  //  const {restaurant}=this.props
    return (
      <div>
        <button
          class="btn btn-outline-warning"
          color="success"
          onClick={this.toggle}
        >
          modifier
        </button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Change your Restaurant</ModalHeader>
          <ModalBody>
              <span>image</span>
            <Input
              //   placeholder="enter your title"
              defaultValue={this.state.img}
              type="text"
              id="img"
              onChange={this.HandleChange}  
            />
             <span>Plat</span>
             <Input
              //   placeholder="enter your title"
              defaultValue={this.state.plat}
              type="text"
              id="plat"
              onChange={this.HandleChange}  
            />
              <span>Price</span>
             <Input
              //   placeholder="enter your title"
              defaultValue={this.state.price}
              type="text"
              id="price"
              onChange={this.HandleChange}  
            />
            
             <span>description</span>
            <Input
              //   placeholder="enter your title"
              defaultValue={this.state.description}
              type="text"
              id="description"
              onChange={this.HandleChange}
            /> <span>type</span>
            <Input
              //   placeholder="enter your title"
              defaultValue={this.state.type}
              type="text"
              id="type"
              onChange={this.HandleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.modifyMenu(this.state);

                this.toggle();
              }}
            >
              Save change
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default Update;
