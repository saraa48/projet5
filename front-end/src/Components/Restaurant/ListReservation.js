import React from "react";

import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import ListOfReservation from "./ListOfReservation"

class ListReservation extends React.Component {

  render() {
    return (
      <div>
        <body class="bg-gray-100 h-screen antialiased leading-none">
          <div id="app" class="h-full">
            <div class="flex flex-col h-full">
              <div class="flex h-full">
                <div class="w-0 md:w-64 p-0 md:p-4 bg-green-300 overflow-hidden">
                  <div class="flex items-center mb-4">
                    <h3 class="text-xl font-bold mr-2 text-black">Dashboard</h3>
                    <p class="px-2 py-1 text-xs text-black bg-white rounded-full">
                      Owners
                    </p>
                  </div>
                  <nav>
                    {/* <ul>
                      <li class="font-bold py-2 ">
                        <Link class="text-blue-400">RESERVATIONS</Link>
                      </li> */}
                      {/* <li class="font-bold py-2 hover:underline">
                        <Link class="text-blue-400" to="/myrestau">
                          MY RESTAURANT
                        </Link>
                      </li> */}
                    {/* </ul> */}
                  </nav>
                </div>

                <div class="flex-1 w-full">
                  <nav class="bg-green-200 shadow py-6">
                    <div class="px-6">
                      <div class="flex items-center justify-center">
                        <div class="mr-6">
                          <Link
                            class="text-lg font-semibold text-black mr-3"
                            to="/dashboardRestau"
                          >
                         <span ></span>
                            Dashboard Restaurant
                            </Link>
               

                          {/* <a
                            href="/admin/users"
                            class="text-lg text-gray-100 hover:underline"
                          >
                            Dashboard Admin
                          </a> */}
                        </div>
                        <div class="flex-1 text-right">
                          <a class="text-black" href="/">
                            Back to UrbainFoods
                          </a>
                          <span class="text-black-300 text-sm pr-4"></span>

                          <Link
                            class="hover:underline text-black text-sm p-3"
                            to="/logout"
                          >
                            {" "}
                            Disconnect
                          </Link>

                          <form
                            id="logout-form"
                            // action="http://localhost:8000/logout"
                            method="POST"
                            class="hidden"
                          ></form>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <Link to="/listereservation">
                  
                  <button class="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-400 hover:border-green-400 rounded mt-10">
  List of Reservations
</button>  
</Link>
<Link to="/menuOf">
                  
                  <button class="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-400 hover:border-green-400 rounded mt-10">
  List of menu
</button>  
</Link>

{/* <Link to={`/menuOf/${restaurant._id}`}> */}

             
                  
                 
                  <div class="p-4">
                    <div class="block w-full overflow-x-auto">
                    
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
export default ListReservation ;
