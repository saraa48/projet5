import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import ListRestauAdmin from "./ListRestauAdmin";
// import ListUsers from "./ListUsers";

class DashbAdminRestau extends React.Component {
  state = {
    ourRestau: []
  };

  componentDidMount = () => {
    this.getRestaurant();
  };
  getRestaurant = () => {
    axios
      .get("ProjectRest/restaurant/")

      .then(res =>
        this.setState({
          ourRestau: res.data
        })
      )
      .catch(err => console.error(err));
  };
  deleteRestaurant = id => {
   
    axios.delete(`/ProjectRest/restaurant/${id}`).then(this.getRestaurant);
  };


  render() {
    return (
      <div>
        <body class="bg-gray-100 h-screen antialiased leading-none">
          <div id="app" class="h-full">
            <div class="flex flex-col h-full">
              <div class="flex h-full">
                <div class="w-0 md:w-64 p-0 md:p-4 bg-gray-200 overflow-hidden">
                  <div class="flex items-center mb-4">
                    <h3 class="text-xl font-bold mr-2">Dashboard</h3>
                    <p class="px-2 py-1 text-xs text-white bg-gray-800 rounded-full">
                      Owners
                    </p>
                  </div>
                  <nav>
                    <ul>
                      <li class="font-bold py-2 ">
                        <Link class="text-blue-400" to="/dashboard">
                          USERS
                        </Link>
                      </li>
                      <li class="font-bold py-2 ">
                        <Link class="text-blue-400" to="/dashboardadmin_restau">
                          Restaurants
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class="flex-1 w-full">
                  <nav class="bg-blue-900 shadow py-6">
                    <div class="px-6">
                      <div class="flex items-center justify-center">
                        <div class="mr-6">
                          <Link
                            class="text-lg font-semibold text-gray-100 mr-3"
                            to="/dashboard"
                          >
                            {" "}
                            Dashboard Admin
                          </Link>

                          {/* <a
                            href="/admin/users"
                            class="text-lg text-gray-100 hover:underline"
                          >
                            Dashboard Admin
                          </a> */}
                        </div>
                        <div class="flex-1 text-right">
                          <a class="text-white" href="/">
                            Back to website
                          </a>
                          <span class="text-gray-300 text-sm pr-4"></span>

                          <Link
                            class="hover:underline text-gray-300 text-sm p-3"
                            to="/login"
                          >
                            {" "}
                            Disconnect
                          </Link>

                          <form
                            id="logout-form"
                            action="http://localhost:8000/logout"
                            method="POST"
                            class="hidden"
                          ></form>
                        </div>
                      </div>
                    </div>
                  </nav>

                  <div class="p-4">
                    <div class="block w-full overflow-x-auto">
                      <table class="w-full text-left shadow-md bg-white rounded-lg">
                        <thead>
                          <tr>
                            <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100 border-r border-white">
                              List of Restaurants
                            </th>
                            {/* <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100 border-r border-white">
                              Name
                            </th>
                            <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100 border-r border-white">
                              Email
                            </th>
                            {/* <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100 border-r border-white">
                              Code
                            </th> */}
                            {/* <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100">
                              Actions
                            </th>{" "} */}
                          </tr>
                          {this.state.ourRestau.map((el, key) => (
                            <ListRestauAdmin restaurant={el} 
                            deleteRestaurant={this.deleteRestaurant}/>
                          ))}
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
export default DashbAdminRestau;
