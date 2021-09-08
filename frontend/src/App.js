import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBars/Navbar';
import LeftMenu from './Components/NavBars/LeftMenu';
import Publicacion from './Components/Publicacion';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';

function App() {

  const isLoggedIn = false;

  return  isLoggedIn ? (
    <React.StrictMode>
      <NavBar isLoggedin={ isLoggedIn } />
      <LeftMenu />
      <div style = {{ marginTop:"3rem", marginLeft: "180px"}}>
      <Router>
          <Switch>
            <Route path={`/pub/:id`} exact component={Publicacion} />
            <Route path={`/`} component={Main} />
          </Switch>
      </Router>
      </div>      
    </React.StrictMode>
  
  ) : (
    /* si el usuario no ha iniciado sesión */
   <React.StrictMode>
      <NavBar isLoggedIn={ isLoggedIn }/>
      <div className="loginSign_container">
        <Router>
            <Switch>
              <Route path={`/signup`} exact component={Signup}/>
              <Route path={`/`} component={Login}/>
            </Switch>
        </Router>
      </div>      
    </React.StrictMode>

  );
}

export default App;
