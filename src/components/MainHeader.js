import React from 'react';
import logo from "../img/logo.svg";


function MainHeader () {
    return (
        <div className="p-2 md:p-5">
            <a href="/" className="flex items-center w-max py-3 rounded-full cursor-pointer hover:bg-black/10
        transition-colors duration-300 ease-in-out">
                <img className="w-16 md:w-20 select-none pr-2 md:pr-3 pl-4 md:pl-6" draggable="false" src={logo} alt="logo_icon" />
                <h1 className="text-white text-xl md:text-2xl pl-2 md:pl-3 pr-4 md:pr-6">Vineyard's Land</h1>
            </a>
        </div>
    );
}


export default MainHeader;