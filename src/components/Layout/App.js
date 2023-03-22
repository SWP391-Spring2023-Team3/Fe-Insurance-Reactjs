import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../Home/Home'
import Login from '../Login/Login.js';
import Adminsite from '../Admin/Adminsite.js';
import Usersite from '../User/Usersite';
import { Provider } from 'react-redux';
import {store,persistor} from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin-site" element={<Adminsite />} />
                        <Route path="/user-site" element={<Usersite />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}



export default App