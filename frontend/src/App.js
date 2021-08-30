import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBars/Navbar';
import LeftMenu from './Components/NavBars/LeftMenu';


function App() {
  return (
    <>
      <NavBar />
      <LeftMenu />
      <div style = {{ marginTop:"3rem", marginLeft: "180px"}}>
        <Main />
      </div>      
    </>
  );
}

export default App;
