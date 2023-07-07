import React from 'react';
import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact component={EmployeeList}></Route>
            <Route path="/employees" component={EmployeeList}></Route>
            <Route path="/add-employee/:id" component={AddEmployee}></Route>
            <Route path="/view-employee/:id" component={ViewEmployee}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;