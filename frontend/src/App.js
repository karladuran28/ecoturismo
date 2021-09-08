import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBars/Navbar';
import LeftMenu from './Components/NavBars/LeftMenu';
import Publicacion from './Components/Publicacion';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import PanelBusqueda from './Components/PanelBusqueda';
import PanelFiltro from './Components/PanelFiltro';


function App() {
  const[isLoggedIn,setIsLoggedin]=useState(false);
  return ( /*isLoggedIn ? */
    <React.StrictMode>
      <NavBar isLoggedin={ isLoggedIn} />
      <LeftMenu />
      <div style = {{ marginTop:"3rem", marginLeft: "180px", height:"100%"}}>
      <Router>
          <Switch>
            <Route path={`/pub/:id`} exact component={Publicacion} />
            <Route path={`/buscador/:nombre`} exact component={PanelBusqueda} />
            <Route path={`/filtro/:region`} exact component={PanelFiltro} />
            <Route path={`/`} exact component={Main} />
          </Switch>
      </Router>
      </div>      
    </React.StrictMode>
  )/*
  : ( 
    /* si el usuario no ha iniciado sesión 
    <React.StrictMode>
      <NavBar isLoggedIn={ isLoggedIn}/>
      <div style = {{ marginTop:"3rem", marginLeft: "180px"}}>
      <Router>
          <Switch>
            <Route path={`/signup`} exact component={Signup}/>
            <Route path={`/`} >
              <Login isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedin}/>
            </Route>
          </Switch>
      </Router>
      </div>      
    </React.StrictMode>

  );*/
}

export default App;
