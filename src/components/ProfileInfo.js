import React from "react";


function ProfileInfo() {
    return(
        <div className="flex justify-center w-full pt-10 md:pt-24 mb-5">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <div id="profile_icon" className="drop-shadow-xl md:w-40 md:h-40 w-28 h-28 bg-black rounded-full bg-cover bg-center bg-no-repeat select-none"> </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <h1 id="username" className="mt-7 text-black text-xl md:text-3xl font-bold text-center">Username</h1>
                        <p id="balance" className="text-black text-sm md:text-lg text-center">Balance</p>
                        <input id="editUsername" type="text" name="name" className="w-72 h-8 rounded-lg mt-1 bg-neutral-200
                        text-neutral-800 px-3 focus:outline-none hover:bg-neutral-300 focus:bg-neutral-300 transition-colors
                        duration-300 ease-in-out" />
                        <p id="userInfo" className="w-60 mt-10 text-black text-xs md:text-sm text-center break-words"></p>
                        <input id="editUserInfo" type="text" name="info" className="w-72 h-8 rounded-lg mt-1 bg-neutral-200
                        text-neutral-800 px-3 focus:outline-none hover:bg-neutral-300 focus:bg-neutral-300 transition-colors
                        duration-300 ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProfileInfo;
