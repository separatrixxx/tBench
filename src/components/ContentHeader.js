import React from "react";
import {IoIosSearch} from "react-icons/io";


function ContentHeader() {
    return(
        <div id="content_nav_div" className="flex justify-end items-center w-full fixed top-0 bg-white drop-shadow-lg px-3 md:px-7 py-2">
            <label className="relative block mr-5 md:mr-12 rounded-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-300 text-md md:text-xl">
                    <IoIosSearch />
                </span>
                <input
                    className="block shadow-inner md:w-52 h-8 w-44 rounded-full pl-8 p-3 focus:outline-none focus:border-blue-500 focus:ring-blue-5000 focus:ring-1"
                    placeholder="" type="text" name="search"/>
            </label>
            <button id="content_profile_icon_btn">
                <div id="content_profile_icon" className="w-8 h-8 bg-black rounded-full cursor-pointer bg-cover bg-center bg-no-repeat select-none">

                </div>
            </button>
        </div>
    );

}

export default ContentHeader;