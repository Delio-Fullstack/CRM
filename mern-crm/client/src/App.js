import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'App.css';

//import admin LTE CSS
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';


//import admin LTE js Library 
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import 'admin-lte/dist/js/adminlte.js';
import 'admin-lte/plugins/chart.js/Chart.min.js';

import AppNavbar from 'components/AppNavbar';
import SideNavbar from 'components/SideNavbar';
import Footer from 'components/Footer';

import Login from 'page/Login';
import Dashboard from 'admin-dashboard/Dashboard';
import useToken from 'components/App/useToken';


function App() {

  const { token, setToken, clearToken } = useToken() 
  
  return (
      <div className="wrapper">
        <Router>
          <Switch>
              <Route path="/dashboard" component={ Dashboard }  exact>
                <AppNavbar />
                <SideNavbar />
                <Dashboard /> 
                <Footer /> 
            </Route>
            <Route path="/login" exact>
              <Login setToken = {setToken} />  
            </Route>
            <Route path="logout" component={clearToken} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
