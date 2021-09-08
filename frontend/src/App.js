import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBars/Navbar';
import LeftMenu from './Components/NavBars/LeftMenu';
import Publicacion from './Components/Publicacion';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import PanelBusqueda from './Components/PanelBusqueda';

function App() {

  const isLoggedIn = false;

  return (/* isLoggedIn ? (*/
    <React.StrictMode>
      <NavBar isLoggedin={ isLoggedIn } />
      <LeftMenu />
      <div style = {{ marginTop:"3rem", marginLeft: "180px", height:"100%"}}>
      <Router>
          <Switch>
            <Route path={`/pub/:id`} exact component={Publicacion} />
            <Route path={`/buscador/:nombre`} exact component={PanelBusqueda} />
            <Route path={`/`} exact component={Main} />
          </Switch>
      </Router>
      </div>      
    </React.StrictMode>
  )
  /*) : ( */
    /* si el usuario no ha iniciado sesión */
 /*   <React.StrictMode>
      <NavBar isLoggedIn={ isLoggedIn }/>
      <div style = {{ marginTop:"3rem", marginLeft: "180px"}}>
      <Router>
          <Switch>
            <Route path={`/signup`} exact component={Signup}/>
            <Route path={`/`} component={Login}/>
          </Switch>
      </Router>
      </div>      
    </React.StrictMode>

  );*/
}

export default App;
