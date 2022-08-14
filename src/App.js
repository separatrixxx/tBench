import React from "react";
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  if (document.location.pathname === '/') {
    document.title = "Vineyard's Land";
  } else {
    document.title = '404';
  }

  return (
      <div className="scroll-smooth bg-neutral-900">
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