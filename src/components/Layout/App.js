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

import Usersite from '../User/Usersite.js';
import AccidentHistory from '../User/AccidentHistory';
import CompensationHistory from '../User/CompensationHistory';
import Contract from '../User/Contract';
import PunishmentHistory from '../User/PunishmentHistory';
import RequestCompensation from '../User/RequestCompensation';


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
<<<<<<< Updated upstream
                    <Route path="/payment"  element={<Payment/>}/>
=======
                    <Route path="/usersite" element={<Usersite />}/>
                    <Route path="/accident" element={<AccidentHistory />}/>
                    <Route path="/compensation" element={<CompensationHistory />}/>
                    <Route path="/contract" element={<Contract />}/>
                    <Route path="/punishment" element={<PunishmentHistory />}/>
                    <Route path="/request-compensation" element={<RequestCompensation />}/>
>>>>>>> Stashed changes
                </Routes>
            </BrowserRouter>
        </div>
    )
}



export default App