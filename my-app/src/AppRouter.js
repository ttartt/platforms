import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Result from './Result';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
