import React from 'react';
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import {BiComment} from "react-icons/bi";

function ContentForm () {

    return (
        <div className="bg-white w-5/6 lg:w-2/3 mt-10 rounded-3xl shadow-lg">
            <div className="flex flex-row justify-start items-center w-full p-5">
                <a href="/profile">
                    <div id="content_form_icon" className="w-10 md:w-11 h-10 md:h-11 bg-black rounded-full cursor-pointer bg-cover bg-center
                bg-no-repeat select-none hover:scale-105 duration-300 easy-in-out transition-transform"></div>
                </a>
                <div className="flex flex-col items-start ml-2">
                    <h1 id="content_form_username" className="text-sm md:text-base text-blue-tb font-extrabold text-center
                        cursor-pointer hover:text-blue-600 duration-300 easy-in-out transition-colors">
                        Username
                    </h1>
                    <p id="content_form_time" className="text-xs text-gray-600 text-center">
                        Time
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-slate-200"></div>

            <div className="flex flex-col items-center justify-start w-full p-5">

                <p id="content_form_text" className="w-72 md:w-144 text-sm md:text-base text-black break-words">
                    Это очень красивая картинка, кстати. Я её сам нарисовал когда-то :))
                    Хз, что ещё тут можно написать, ляляляляляля.
                    И ещё водички
                </p>
                <div className="w-72 md:w-144 h-48 md:h-96 bg-gray-600 mt-3 rounded-3xl overflow-hidden shadow-lg">
                    <div id="content_form_img" className="w-72 md:w-144 h-48 md:h-96 rounded-3xl cursor-pointer
                        bg-cover bg-center bg-no-repeat select-none hover:scale-105 duration-500 easy-in-out transition-transform">

                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-slate-200"></div>

            <div className="flex flex-row justify-start items-center w-full p-5">
                <div className="flex flex-row items-center">
                    <h1 id="like" className="text-xl md:text-2xl text-gray-600 font-extrabold text-center
                        cursor-pointer hover:scale-105 duration-300 easy-in-out transition-transform">
                        <IoMdHeartEmpty />
                    </h1>
                    <h1 id="dislike" className="text-xl md:text-2xl text-red-600 font-extrabold text-center
                        cursor-pointer hover:scale-105 duration-300 easy-in-out transition-transform hidden">
                        <IoMdHeart />
                    </h1>
                    <h1 className="text-xs md:text-sm text-gray-600 text-center ml-2 cursor-pointer">228</h1>
                </div>

                <div className="flex flex-row items-center ml-5">
                    <h1 className="text-xl md:text-2xl text-gray-600 font-extrabold text-center
                        cursor-pointer hover:scale-105 duration-300 easy-in-out transition-transform">
                        <BiComment />
                    </h1>
                    <h1 className="text-xs md:text-sm text-gray-600 text-center ml-2">13</h1>
                </div>
            </div>
        </div>
    );
}



export default ContentForm;