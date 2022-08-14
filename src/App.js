import React from 'react';
import Home from './pages/Home'
import Content from './pages/Content'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import PleaseLogin from './pages/PleaseLogin'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = ({ contract, currentUser, nearConfig, wallet }) => {

    if (wallet.isSignedIn()) {

        if (document.location.pathname === '/') {
            document.title = 'Content';
        } else if (document.location.pathname === '/profile') {
            document.title = wallet.getAccountId().replace(new RegExp('.testnet', 'g'), '');
        } else {
            document.title = '404';
        }

        return (
            <div className="scroll-smooth bg-black">
                <Router>
                    <Routes>
                        <Route path='/' element={<Content/>} />
                        <Route path='*' element={<NotFound/>} />
                        <Route path='/profile' element={<Profile/>} />
                    </Routes>
                </Router>
            </div>
        );
    } else {

        if (document.location.pathname === '/') {
            document.title = 'tBench';
        } else {
            document.title = '404';
        }

        return (
            <div className="scroll-smooth bg-black">
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='*' element={<NotFound/>} />
                        <Route path='/profile' element={<PleaseLogin/>} />
                    </Routes>
                </Router>
            </div>
        );
    }


}

export default App;