import React from "react";
import {IoMdLogOut} from "react-icons/io";


function ProfileHeader() {
    return(
        <div className="flex justify-end items-center absolute w-full h-12 top-0 bg-transparent px-3 md:px-7">
            <button id="sign_out_btn">
                <h1 className="text-3xl text-stone-900 rounded-full hover:text-blue-500 transition-colors duration-300">
                    <IoMdLogOut/>
                </h1>
            </button>
        </div>
    );

}

export default ProfileHeader;