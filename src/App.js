
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/aboutus';
import Admin from './components/admin';

import Homepage from './components/home';

import LoginForm from './components/loginform';
import Servicepage from './components/service';
import Redux from './components/learning/redux';
import Loginboot from './components/loginbootstrap';
import SignUpForm from './components/signupform';







function App() {
  return (
     <BrowserRouter>
     
     <Routes>
       <Route exact path="/employee/:empid" element={<About/>}/>
   <Route exact path="/Services" element={<Servicepage/>}/>
   <Route exact path="/Home" element={<Homepage/>}/>
   <Route exact path="/" element={< Loginboot/>}/>
   
   <Route exact path="/AdminDashboard" element={<Admin/>}/>
    <Route exact path="/Redux" element={<Redux/>}/> 
    <Route exact path="/signUp" element={<SignUpForm/>}/> 
    </Routes>
    </BrowserRouter>
    
  )
  }  
        

export default App;
