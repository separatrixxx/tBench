import React from "react";
import logo from "../img/logo_icon_white.svg";
import {IoMdClose, IoMdMenu} from "react-icons/io";


function HeaderNew() {
    return(
        <div id="nav_hidden_div_new" className="flex flex-col justify-center w-full sticky top-0 hidden ">
            <div className="flex items-center px-5 py-2 justify-between">
                <a className="" href="/">
                    <img className="w-5 select-none" draggable="false" src={logo} alt="logo_icon" />
                </a>
                <h1 id="burger_menu_new" className="text-3xl text-white" onClick={openMenu}>
                    <IoMdMenu/>
                </h1>
                <h1 id="close_menu_new" className="text-3xl text-white hidden" onClick={closeMenu}>
                    <IoMdClose/>
                </h1>
            </div>
            <div id="menu_new" className="flex flex-col justify-center w-1/3 px-5 hidden">
                <a className="text-base text-white mt-3 select-none" href="/">About</a>
                <a className="text-base text-white mt-3 select-none" href="/">About</a>
                <a className="text-base text-white mt-3 mb-3 select-none" href="/">About</a>
            </div>
        </div>
    );
}

function openMenu() {
    document.getElementById('close_menu').classList.remove('hidden');
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('burger_menu').classList.add('hidden');
    document.getElementById('nav_hidden_div').classList.add('backdrop-blur-sm');
    document.getElementById('nav_hidden_div').classList.add('bg-black/30');
    document.getElementById('nav_hidden_div').classList.add('transition-colors');
    document.getElementById('nav_hidden_div').classList.add('duration-300');
}

function closeMenu() {
    document.getElementById('close_menu').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('burger_menu').classList.remove('hidden');
    document.getElementById('nav_hidden_div').classList.remove('backdrop-blur-sm');
    document.getElementById('nav_hidden_div').classList.remove('bg-black/30');
    document.getElementById('nav_hidden_div').classList.remove('transition-colors');
    document.getElementById('nav_hidden_div').classList.remove('duration-300');
}


export default HeaderNew;