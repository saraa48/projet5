import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import ListUsers from "./ListUsers";

class DashbAdminUsers extends React.Component {
  state = {
    ourUsers: []
  };

  componentDidMount = () => {
    this.getUsers();
  };
  getUsers = () => {
    axios
      .get("/api/users/test/")

      .then(res =>
        this.setState({
          ourUsers: res.data
        })
      )
      .catch(err => console.error(err));
  };
  deleteUser = id => {
   
    axios.delete(`/ProjectRest/users/${id}`).then(this. getUsers);
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
                      <li class="font-bold py-2 hover:underline">
                        <Link class="text-blue-400" to="/dashboardadmin_restau">
                          RESTAURANTS
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

                          
                        </div>
                        <div class="flex-1 text-right">
                          <a class="text-white" href="/">
                            Back to UrbainFoods
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
                              List of Users
                            </th>
                           
                          </tr>
                          <th class="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-100 border-r border-white"></th>
                          {this.state.ourUsers.map((el, key) => (
                            <ListUsers user={el}  deleteUser={this.deleteUser} />
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
export default DashbAdminUsers;
