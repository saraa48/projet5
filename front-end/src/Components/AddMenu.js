import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./Css/Style.css";
// import axios from "axios";

class AddMenu extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      name: "",
      plat: "",
      description: "",
      price: "",
      type: "",
      restaurant:""
    };
  }

  OnChangeName = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { modal, toggle, AddMenu } = this.props;
    return (
      <div>
        <Button className="addButton" color="success" onClick={toggle}>
          Ajouter Menu
        </Button>
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>Menu à ajouter</ModalHeader>
          <ModalBody>
            <span>image de Menu</span>
            <Input
              placeholder="enter image menu"
              type="text"
              id="img"
              onChange={this.OnChangeName}
            />
            <span>Image Menu</span>
            <Input
              placeholder="entrer le plat"
              type="text"
              id="plat"
              onChange={this.OnChangeName}
            />
            <span> Description de Menu</span>
            <Input
              placeholder="enter your desription"
              type="text"
              id="description"
              onChange={this.OnChangeName}
            />
            <span> prix de Menu</span>
            <Input
              placeholder="enter your price"
              type="text"
              id="price"
              onChange={this.OnChangeName}
            />
            <span> type de Menu</span>
            <Input
              placeholder="enter your type"
              type="text"
              id="type"
              onChange={this.OnChangeName}
            />
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
            restaurant
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                AddMenu(this.state);
                toggle();
              }}
            >
              Save change
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMenu;
