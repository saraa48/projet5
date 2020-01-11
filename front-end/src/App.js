import React from 'react';
import './App.css';

import {BrowserRouter,Route,Switch} from "react-router-dom";

import ListRestaurant from './Components/Restaurants/ListRestaurant';
import ListMenu from './Components/OurMenu/ListMenu';
import Galery from "./Galery/Galery"
import UserInfo from "./Components/Users/UserInfo"

import UserReservation from "./Components/Users/UserReservation";
//-----------------Dashboard Restaurant
import ListReservation from "./Components/Restaurant/ListReservation"
import MyRestau from "./Components/Restaurant/MyRestau"
import MyReservation from "./Components/Restaurant/MyReservations"
import CardReservation from"./Components/Restaurant/CardReservation"
import  ListOfReservation from"./Components/Restaurant/ListOfReservation"
import  ListOfMenu from"./Components/Restaurant/ListOfMenu";
//--------------------
import Butreserv from "./Components/Reservation/Butreserv";
//---------Dashboard Admin----------
import DashbAdminUsers from "./Components/Admin/DashbAdminUsers";
import DashbAdminRestau from "./Components/Admin/DashAdminRestau";
//-------------Auth-----------------
import Register from "./Components/Ahthentificat/Register"
// import UserInfo from "./Components/Ahthentificat/UserInfo";
import Login from "./Components/Ahthentificat/Login";
import Logout from "./Components/Ahthentificat/Logout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListRestaurant}/>
        <Route exact path="/menuOf" component={ListOfMenu}/>
        <Route exact path="/menu/:id" component={ListMenu}>
          
         {/* <ListMenu/> */}
        
          </Route>
          <Route  exact path="/galery" component={Galery} />
          <Route
        exact
        path={`${process.env.PUBLIC_URL}/reservationPage`}
        component={UserReservation}
      />
       {/* <Route
        exact
        path={`${process.env.PUBLIC_URL}/authentification`}
        component={authentification}
      /> */}
     
 <Route
        exact
        path={`${process.env.PUBLIC_URL}/butserv`}
        component={Butreserv}
      />

<Route
        exact
        path={`${process.env.PUBLIC_URL}/dashboard`}
        component={DashbAdminUsers}
      />
<Route
        exact
        path={`${process.env.PUBLIC_URL}/dashboardadmin_restau`}
        component={DashbAdminRestau}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/listReservation`}
        component={ListReservation}
      />
       <Route
        exact
        path={`${process.env.PUBLIC_URL}/myreservation`}
        component={MyReservation}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/cardReservation`}
        component={CardReservation}
      />
<Route
        exact
        path={`${process.env.PUBLIC_URL}/myrestau`}
        component={MyRestau}
      />
 <Route
        exact
        path={`${process.env.PUBLIC_URL}/userinfo`}
        component={UserInfo}
      />
 <Route
        exact
        path={`${process.env.PUBLIC_URL}/logout`}
        component={Logout}
      />

<Route
        exact
        path={`${process.env.PUBLIC_URL}/listereservation`}
        component={ListOfReservation}
      />


<Route
        exact
        path={`${process.env.PUBLIC_URL}/register`}
        component={Register}
      />
<Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
 <Route
        exact
        path={`${process.env.PUBLIC_URL}/userinfo`}
        component={UserInfo}
      />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
