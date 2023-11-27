import logo from'./logo.svg';
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
 import Landing from './Landing';
 import ForgetPassword from './ForgetPassword';
 import Employee from './Employee';
import Profile from './Profile';
import Task from './Task';
import GetTrained from './GetTrained';
import Trainings from './Trainings';
import Admin from './Admin';
import ViewEmployee from './ViewEmployee';
import AddCourse from './AddCourse';
import Addtopics from './Addtopics';
import ViewReports from './ViewReports';
import ViewElements from './ViewElements';
import Search from './Search';

 function App() {
  return(
   <>
     <Router>
    <Routes>
   <Route exact path="/" element={<Landing/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
   <Route path="/Employee" element={<Employee/>}/>
   <Route path="/Profile" element={<Profile/>}/>
   <Route path="/Task" element={<Task/>}/>
   <Route path="/GetTrained" element={<GetTrained/>}/>
   <Route path="/Trainings" element={<Trainings/>}/>
   <Route path="/Admin" element={<Admin/>}/>
   <Route path="/ViewEmployee" element={<ViewEmployee/>}/>
   <Route path="/AddCourse" element={<AddCourse/>}/>
   <Route path="/Addtopics" element={<Addtopics/>}/>
   <Route path="/ViewReports" element={<ViewReports/>}/>
   <Route path="/ViewElements" element={<ViewElements/>}/>
   <Route path="/Search" element={<Search/>}/>
    </Routes>
     </Router>
     
   
 
    </>

   )
  }
  export default App;