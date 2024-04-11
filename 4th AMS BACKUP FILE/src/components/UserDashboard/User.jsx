import React from "react";
import "../AdminDashboard/Admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeader from "./UserHeader/UserHeader";
import UserDetails from "./UserDetails/UserDetails";
import Graphs from "./Charts/Graphs";
import Sidebar from "./UserSidebar/Sidebar";


function Admin(){
    return(
        <div className="admin">
            <UserHeader/>
            <div className="sidebarEmp">
                    <Sidebar/>
                    <UserDetails/>
            </div>
            <Graphs/>
        </div>
        
    )
}

export default Admin;