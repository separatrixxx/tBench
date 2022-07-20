import React from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="scroll-smooth bg-black">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
