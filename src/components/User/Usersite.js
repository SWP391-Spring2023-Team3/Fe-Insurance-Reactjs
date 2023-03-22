import React, { useState } from "react";
import { HeaderUser } from "../Header/Header";
import SideBar from "../SideBar/SideBar"
import './Style/user.css'

const UserSite = () => {
    const [menu, setMenu] = useState("")
    const handleMenu = () => {
        setMenu(menu===""?"open" : "")
    }

    const [data , setData] = useState("")

    return (
        <div>
            <HeaderUser />
            <div className="content">
                <nav className={menu} style={{zIndex:"99"}}> 
                    <section class="overlay"></section>
                    <div class="logo">
                        <i class="fa-solid fa-bars" onClick={handleMenu} style={{ marginRight: "8px", cursor: "pointer" }}></i>
                        <span class="logo-name">User</span>
                    </div>
                    <div className="content-sidebar">
                    <SideBar isAdmin={false} setData={setData}/>
                </div>
                </nav>
                <div className="content-data" style={{marginLeft:"343px"}}>
                    {data}
                </div>
            </div>
        </div>
    )
}
export default UserSite