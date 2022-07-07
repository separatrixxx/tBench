import React from 'react';
import Home from './pages/Home'
import Content from './pages/Content'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import PleaseLogin from './pages/PleaseLogin'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = ({ contract, currentUser, nearConfig, wallet }) => {

    return (
        <div className="scroll-smooth bg-black">
            <div id="landing_page" className="scroll-smooth bg-black">
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='*' element={<NotFound/>} />
                        <Route path='/profile' element={<PleaseLogin/>} />
                        <Route path='/content' element={<Content/>} />
                    </Routes>
                </Router>
            </div>
            <div id="home_page" className="scroll-smooth bg-black">
                <Router>
                    <Routes>
                        <Route path='/' element={<Content/>} />
                        <Route path='*' element={<NotFound/>} />
                        <Route path='/profile' element={<Profile/>} />
                    </Routes>
                </Router>
            </div>
        </div>

    );
}

export default App;