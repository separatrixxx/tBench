import React from "react";
import logo from "../img/logo_icon_white.svg";
import {IoMdClose, IoMdMenu} from "react-icons/io";


function Header() {
    return(
        <div id="nav_div" className="flex flex-col md:flex-row justify-center w-full fixed top-0 bg-black/30 backdrop-blur-sm">
            <div className="flex justify-between md:justify-end w-full md:w-1/3 items-center">
                <a className="link px-5 py-3 md:py-0" href="/">
                    <img className="w-5 select-none" draggable="false" src={logo} alt="logo_icon" />
                </a>
                <h1 id="burger_menu" className="text-3xl text-white px-5 flex md:hidden" onClick={openMenu}>
                    <IoMdMenu/>
                </h1>
                <h1 id="close_menu" className="text-3xl text-white px-5 hidden md:hidden" onClick={closeMenu}>
                    <IoMdClose/>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center w-1/3 items-start md:items-center">
                <a id="link_1" href="/" className="text-base md:text-xs py-2 md:py-0 mt-3 md:mt-0 hover:text-gray-300 transition-colors duration-300 text-white mx-5 select-none hidden md:flex">About</a>
                <a id="link_2" href="/" className="text-base md:text-xs py-2 md:py-0 hover:text-gray-300 transition-colors duration-300 text-white mx-5 select-none hidden md:flex">Ecosystem</a>
                <a id="link_3" href="/" className="text-base md:text-xs py-2 md:py-0 mb-3 md:mb-0 hover:text-gray-300 transition-colors duration-300 text-white mx-5 select-none hidden md:flex">Explore</a>
            </div>
            <div className="flex justify-center p-5 w-1/3 hidden md:block">

            </div>
        </div>
    );

}

function openMenu() {
    document.getElementById('close_menu').classList.remove('hidden');
    document.getElementById('link_1').classList.remove('hidden');
    document.getElementById('link_2').classList.remove('hidden');
    document.getElementById('link_3').classList.remove('hidden');
    document.getElementById('burger_menu').classList.add('hidden');
}

function closeMenu() {
    document.getElementById('close_menu').classList.add('hidden');
    document.getElementById('link_1').classList.add('hidden');
    document.getElementById('link_2').classList.add('hidden');
    document.getElementById('link_3').classList.add('hidden');
    document.getElementById('burger_menu').classList.remove('hidden');
}

export default Header;