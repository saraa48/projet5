import React, { Component } from 'react'
import axios from "axios";
import CardReservation from "./CardReservation";

export default class ListOfReservation extends Component {
    state = {
        ourReservation: []
      };
    
      componentDidMount = () => {
        this.getReserv();
      };
      getReserv = () => {
        axios
          .get("/ProjectRest/reservation/")
    
          .then(res =>
            this.setState({
              ourReservation: res.data
            })
          )
          .catch(err => console.error(err));
      };
    
    render() {
        return (
            <div>
                <table class="w-full text-left shadow-md bg-dark rounded-lg">
                        <thead>
                          <tr>
                            <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100 border-r border-dark">
                          
                            </th>
                          </tr>
                          <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-white-100 border-r border-dark"></th>
                          {this.state.ourReservation.map((el, key) => (
                            <CardReservation reserve={el} />
                            
                          ))}
                        </thead>
                      </table> 
            </div>
        )
    }
}
