import React from "react";


function ProfileFollowings() {
    return(
        <div className="flex justify-center w-full mt-7 h-10">
            <div className="flex justify-center sm:w-1/2 md:w-2/5 w-5/6 shadow-md rounded-full">
                <div className="flex justify-center items-center w-1/3">
                    <h1 className="text-blue-600 font-bold text-xs md:text-sm cursor-pointer pr-2">0</h1>
                    <h1 className="text-black font-bold text-xs md:text-sm cursor-pointer">Content</h1>
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <h1 className="text-blue-600 font-bold text-xs md:text-sm cursor-pointer pr-2">0</h1>

                    <h1 className="text-black font-bold text-xs md:text-sm cursor-pointer">Followers</h1>
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <h1 className="text-blue-600 font-bold text-xs md:text-sm cursor-pointer pr-2">0</h1>

                    <h1 className="text-black font-bold text-xs md:text-sm cursor-pointer">Following</h1>
                </div>
            </div>
        </div>
    );

}

export default ProfileFollowings;