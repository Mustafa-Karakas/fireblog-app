import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import {PrivateRouter} from "./PrivateRouter";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/details/:id" element={<PrivateRouter/>}>
                    <Route path="" element={<Details/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;