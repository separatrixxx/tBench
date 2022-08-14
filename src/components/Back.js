import React from 'react';
import {IoIosArrowBack} from "react-icons/io";


function Back () {

    return (
        <button id="back_btn" onClick={reload} className="flex justify-center items-center fixed bg-transparent h-screen w-14 md:w-20 hover:bg-transparent md:hover:bg-black/5 transition-colors duration-500">
            <h1 className="text-4xl md:text-5xl text-transparent md:text-white">
                <IoIosArrowBack/>
            </h1>
        </button>
    );
}

function reload() {
    if (window.innerWidth > 767) {
        window.location.href = '/';
    }
}


export default Back;