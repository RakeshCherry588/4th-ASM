import React from 'react'
import './TakeAttendance.css'
import TakePicIpLocation from './takePhoto/TakePicIpLocation'
import UserHeader from '../UserHeader/UserHeader'
import Sidebar from '../UserSidebar/Sidebar'
import Timer from '../Timer/Timer'

const TakeAttendance = () => {
  return (
    <div>
      <UserHeader/>     
      <div className="attendanceContanier mx-5">
        <div><Sidebar/></div>       
        <div className="attendance_details">
            <div className="middleContainer">
              <TakePicIpLocation/>
          <div className="logInLogOut">
              <div className="login">Login</div>
              <div className="logOut">logOut</div>
              <div className="breaktime">breaktime</div>
          </div>
            </div>
        </div>
        <div className="employeeRightSidebar">
          <div className="employeeDetails">
                employeeDetails
          </div>
          <div className="livetime">
              <Timer/>
          </div>
          <div className="WorkingHours">
              Working Hours
          </div>
        </div>
      </div>
    </div>            
  )
}

export default TakeAttendance