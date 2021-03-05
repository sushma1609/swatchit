//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import './form.css';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbar from './components/commons/AppNavbar';
//import LoginPage from './components/commons/LoginPage';
//import Button from './components/commons/Button';
//import RegisterName from './components/commons/RegisterName';
//import Buttontry from './components/commons/Buttontry';
//import {Button} from 'react-bootstrap'
///import {Buttontry} from 'react-bootstrap'
//import Buttonresuable from './components/commons/Buttonresuable';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
//import LoginPage from './components/commons/LoginPage';
//import RegisterName from './components/commons/RegisterName';
//import NotFound from './components/commons/NotFound';
import LoginValid from './components/commons/Loginvalid';
import RegisterYou from './components/commons/RegisterYou';
import Dashboard from './components/commons/Dashboard';
//import Test from './components/commons/Test';
//import New from './components/commons/New'
//import form from'./components/commons/form';




function App() {
  return (
    <Router>

    
      <div className="App">

          <AppNavbar />  
          {/* <LoginPage />  */}
        {/* <Button />  */}
        {/* <RegisterName />
          */}
          {/* <Buttontry  handleClick={handleAPICall} label="Submit"/>
      <Buttontry handleClick={handleFormReset} label="Reset"/> */}

  {/* <Buttonresuable
        handleClick={handleAPICall}
        label="Submit"
        icon={<i className="fas fa-arrow-alt-circle-right" />}
        type="primary"
      /> */}
      {/* <Buttonresuable handleClick={handleFormReset} label="Reset" type="secondary" /> */}
      {/* <RegisterYou /> */}
      
      
      
      <Link to="/Login">Login</Link> <br />
      <Link to="/Register">Register</Link><br />
      {/* <Link to="/Dashboard">Dashboard</Link><br /> */}

      <switch>
        <Route exact path="/login" component={LoginValid}/>
        <Route exact path ="/register" component={RegisterYou}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        
      </switch>



      </div>
    </Router>
  );
}

export default App;
