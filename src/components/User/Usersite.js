import React, { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar"


const UserSite = () => {

    return (
        <div>
            <Header/>
            <div className="content">
                <div className="content-sidebar">
                    <SideBar isAdmin={false}/>
                </div>
                <div className="content-data">
                    
                </div>
            </div>
        </div>
    )
}
export default UserSite