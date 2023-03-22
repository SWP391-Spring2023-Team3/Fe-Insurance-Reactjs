import React, { useState } from "react";

import Header from "../Header/Header"; 
import ListPunishment from "../Punishment/ListPunishment";
import SideBar from "../SideBar/SideBar";
import './Style/adminSite.css'
import { useSelector } from "react-redux";


const Adminsite = () => {
    const [data , setData] = useState("")
    return (
        <div>
            <Header/>
            <div className="content">
                <div className="content-sidebar">
                    <SideBar isAdmin={true} setData={setData}/>
                </div>
                <div className="content-data">
                    {data}
                </div>
            </div>
        </div>

    )
}
export default Adminsite