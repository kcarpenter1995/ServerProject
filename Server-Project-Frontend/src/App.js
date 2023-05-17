import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';


function App() {
  return (
    <div>
       <Router>
        <Header />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = {<EmployeeList/>}></Route>
              <Route path = "/employees" element = {<EmployeeList/>}></Route>
              <Route path = "/add-employee" element = {<AddEmployee/>} ></Route>
              <Route path = "/edit-employee/:id" element = {<AddEmployee/>}></Route>
            </Routes>
        </div>
        <Footer />
        </Router>
    </div>
  )
}

export default App;