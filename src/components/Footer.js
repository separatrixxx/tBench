import React from "react";
import logo from "../img/logo_icon_white.svg";
import {FaTelegramPlane, FaDiscord, FaYoutube, FaTwitter, FaVk} from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";


function Footer() {
    return(
        <div className="flex flex-col items-center w-full bg-black mt-10">
            <div className="flex flex-col lg:flex-row lg:flex-row justify-between items-center w-full lg:w-2/3 pb-0 lg:pb-10 pt-10 px-10 border-t">
                <div className="flex items-center">
                    <ScrollIntoView selector="#first_div">
                        <h1 className="cursor-pointer mb-10 lg:mb-0">
                            <img className="w-6 select-none" draggable="false" src={logo} alt="logo_icon" />
                        </h1>
                    </ScrollIntoView>
                    <p className="text-white text-sm font-medium ml-5 hidden lg:block">© 2022 <span className="font-semibold">tBench</span></p>
                </div>
                <div className="flex justify-center">
                    <a id="vk" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaVk/>
                    </a>
                    <a id="telegram" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaTelegramPlane/>
                    </a>
                    <a id="discord" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaDiscord/>
                    </a>
                    <a id="youtube" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaYoutube/>
                    </a>
                    <a id="twitter" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaTwitter/>
                    </a>
                </div>
                <p className="text-white text-sm font-medium mt-12 block lg:hidden">© 2022 <span className="font-semibold">tBench</span></p>
            </div>
            <p className="text-white text-xs m-5">by <span className="font-bold">separatrix</span></p>
        </div>
    );

}

export default Footer;