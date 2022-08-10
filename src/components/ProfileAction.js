import React from "react";


function ProfileAction() {
    return(
        <div className="flex justify-center w-full mt-5">
            <div className="flex justify-center sm:w-1/2 md:w-2/5 w-5/6">
                <button id="follow_btn" onClick={follow} className="w-1/2 h-10 text-xs md:text-sm bg-blue-600 rounded-full shadow-md
                text-white font-bold mr-1 md:mr-3 hover:scale-105 duration-300 easy-in-out transition-transform">Follow</button>
                <button id="following_btn" onClick={unfollow} className="w-1/2 h-10 text-xs md:text-sm bg-white rounded-full shadow-md
                text-blue-600 font-bold mr-1 md:mr-3 hidden hover:scale-105 duration-300 easy-in-out transition-transform">Following</button>
                <button id="message_btn" className="w-1/2 h-10 text-xs md:text-sm bg-blue-600 rounded-full shadow-md
                text-white font-bold ml-1 md:ml-3 hover:scale-105 duration-300 easy-in-out transition-transform">Message</button>
            </div>
        </div>
    );

}

function follow() {
    document.getElementById('follow_btn').classList.add('hidden');
    document.getElementById('following_btn').classList.remove('hidden');
}

function unfollow() {
    document.getElementById('follow_btn').classList.remove('hidden');
    document.getElementById('following_btn').classList.add('hidden');
}

export default ProfileAction;