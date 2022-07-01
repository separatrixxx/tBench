import ScrollIntoView from "react-scroll-into-view";
import {IoIosArrowDown} from "react-icons/io";
import React from "react";

function Arrow() {
    return(
        <div className="flex align-center justify-center mb-5 h-1/6">
            <ScrollIntoView selector="#second_div">
                <h1 className="text-4xl sm:m-2 sm:p-2 text-white hover:bg-white rounded-full hover:text-blue-500 hover:drop-shadow-xl transition-colors duration-300 animate-bounce">
                    <IoIosArrowDown/>
                </h1>
            </ScrollIntoView>
        </div>
    );

}

export default Arrow;