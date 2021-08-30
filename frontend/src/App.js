import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBars/Navbar';
import LeftMenu from './Components/NavBars/LeftMenu';
import Lugar from './Components/Lugares/Lugar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <LeftMenu />
      <div style = {{ marginTop:"3rem", marginLeft: "180px"}}>
      <Router>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/detallelugar/:id" exact component={Lugar}/>
          </Switch>
      </Router>
        
        
      </div>      
    </React.StrictMode>
  );
}

export default App;
