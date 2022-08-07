import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from "react-toastify";
import "./App.css"

const App = () => {
    return (
        <div>
            <AuthContextProvider>
                <AppRouter />
                <ToastContainer />
            </AuthContextProvider>
        </div>
    );
};

export default App;