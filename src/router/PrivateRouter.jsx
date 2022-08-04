import React, {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

export function PrivateRouter() {
    const {currentUser} = useContext(AuthContext);
    return currentUser ? <Outlet/> : <Navigate to="/login" replace/>;
}