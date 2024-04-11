import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";
import Admin from "./components/AdminDashboard/Admin";
import User from "./components/UserDashboard/User";
import Attendence from "./components/AdminDashboard/Attendence/Attendence";
import Calanderdata from "../src/components/Calendar/Calanderdata"
import TakeAttendance from "./components/UserDashboard/TakeAttendance/TakeAttendance";
import AddEmployee from "./components/AdminDashboard/AddEmployee/AddEmployee";
import SuccessMessage from "./components/AdminDashboard/AddEmployee/SuccessMessage/SuccessMessage";



function App(){
  return (
    <>
    <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/Calanderdata" element={<Calanderdata/>} />
          <Route path="/attendance" element={<Attendence/>} />
          <Route path="/takeAttendance" element={<TakeAttendance/>}/>
          <Route path="/addEmployee" element={<AddEmployee/>}/>
          <Route path="/successmes" element={<SuccessMessage/>}/>

    </Routes>
    </>
  )
}
export default App;