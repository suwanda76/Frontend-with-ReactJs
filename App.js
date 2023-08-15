import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, useParams, Routes, globalStore} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import SimpleInterface from './components/SimpleInterface';
import DeleteEmployeeComponent from './components/DeleteEmployeeComponent';
import  Header from './services/Header.jsx';
import CompanyHeaderComponent from './components/CompanyHeaderComponent';
import React, {useState} from 'react';

import potrait from '../src/img/suwanda.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  const modifyEmployee = (e)=>{
    alert("to call modify Employee Component function..!!!");
  }

  const Dropdown=()=>{
    const [isOpen, setIsOpen]= useState(false);

    const toggleDropdown =()=> {
      setIsOpen(!isOpen);
    };
  }
return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">New Life Pte Ltd</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Master Data</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Settings
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">Employee</a>
                      <ul className="dropdown-menu dropdown-submenu">
                         <li>
                            <a className="dropdown-item" onClick={modifyEmployee}>Modify</a>
                          </li>
                      </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Career</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" style= {{marginLeft: "150px"}} type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success "  type="submit">Search</button>
            </form>
            <img className="profile" src={potrait} ></img>
             {/*isOpen && (
                <div className="dropdown-menu">
                     {/*Dropdown content *//*}  
                     <a href="">Login</a>
                     <a href="">Logout</a>
                </div>
             )*/} 
          </div>
        </div>
      </nav>
      <Router>
            <div  className="container" >
                  <Routes>
                    <Route path ="/" exact element={<ListEmployeeComponent/>} />
                    <Route path ="/employees" element={<ListEmployeeComponent/>} />
                    <Route path ="/add-employee"  element = {<CreateEmployeeComponent/>} />
                    <Route path ="/update-employee/:id" element= {<UpdateEmployeeComponent />} />
                    <Route path ="/view-employee/:id" element= {<ViewEmployeeComponent />} />
                  </Routes>            
            </div>           
          <FooterComponent/>
      </Router>
     </div>   
  );

  function DropdownItem(props){
    return(
      <li className='dropdownItem'>
          <img src={props.img} ></img>
              <a>{props.text}</a>
      </li>
    )
  }
  
}

export default App;
