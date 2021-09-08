import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBars/Navbar';
import LeftMenu from './Components/NavBars/LeftMenu';
import Publicacion from './Components/Publicacion';
import React, {useEffect, useReducer, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import PanelBusqueda from './Components/PanelBusqueda';
import PanelFiltro from './Components/PanelFiltro';
import AuthContext from './auth/AuthContext';
import authReducer from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('usuario')) || {isLoggedIn: false};
} 

function App() {

  const[isLoggedIn,setIsLoggedin]=useState(false);

  const [usuario, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario])

  return usuario.isLoggedIn ? ( /**/
    <AuthContext.Provider value={{ usuario, dispatch }}>
    <React.StrictMode>
      <NavBar isLoggedin={ usuario.isLoggedIn} />
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
    </AuthContext.Provider>
  ) : ( 
    <AuthContext.Provider value={{ usuario, dispatch }}>
    /*si el usuario no ha iniciado sesión */
    <React.StrictMode>
      <NavBar isLoggedIn={ usuario.isLoggedIn }/>
      <div className="loginSign_container">
        <Router>
            <Switch>
              <Route path={`/signup`} exact component={Signup}/>
              <Route path={`/`} >
                <Login isLoggedIn={ usuario.isLoggedIn } setIsLoggedin={ setIsLoggedin }/>
              </Route>
            </Switch>
        </Router>
      </div>      
    </React.StrictMode>
    </AuthContext.Provider>  
  );
}

export default App;
