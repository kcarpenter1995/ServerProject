import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href='/employees' className='navbar-brand'>
            Keegan's Employee Management App
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/employees'} className='nav-link'>
                Employees
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/add'} className='nav-link'>
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<EmployeeList/>} />
            <Route path='/employees' element={<EmployeeList/>} />
            <Route path='/add' element={<AddEmployee/>} />  
            <Route path='/employees/:employeeId' element={<Employee/>} />
          </Routes>
        </div>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div>
//        <Router>
//         <Header />
//         <div className= "container">
//           {/* <Routes>
//               <Route exact path = "/" element = {<EmployeeList/>}></Route>
//               <Route path = "/employees" element = {<EmployeeList/>}></Route>
//               <Route path = "/add-employee" element = {<AddEmployee/>} ></Route>
//               <Route path = "/edit-employee/:id" element = {<AddEmployee/>}></Route>
//             </Routes> */}
//         </div>
//         <Footer />
//         </Router>
//     </div>
//   )
// }

export default App;