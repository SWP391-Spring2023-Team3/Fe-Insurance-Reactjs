import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../Home/Home'
import Login from '../Login/login.js';
import UserProfile from '../User/UserProfile.js';
import UserList from '../Admin/UserList.js';
import Adminsite from '../Admin/Adminsite.js';
import Payment from '../User/Payment.js';




function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/list-user" element={<UserList />} />
                    <Route path="/adminsite" element={<Adminsite />}/>
                    <Route path="/payment"  element={<Payment/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}



export default App