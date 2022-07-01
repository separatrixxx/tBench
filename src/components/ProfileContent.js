import React from "react";

function ProfileContent() {
    return(
        <div className="flex flex-col items-center w-full my-14">
            <div id="profile_grid" className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
                <div className="w-60 h-60 shadow-md bg-white rounded-3xl"></div>
            </div>
        </div>
    );

}


export default ProfileContent;