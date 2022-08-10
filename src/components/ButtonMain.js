import React from "react";


function ButtonMain() {
    return(
        <div className="flex flex-col justify-center max-w-xs mx-auto w-full h-5/6">
            <button id="main_btn" className='max-w-xs mx-auto bg-white shadow-2xl rounded-full w-48 md:w-64 h-10 md:h-12 text-sm md:text-base items-center text-blue-500 font-bold select-none hover:scale-105 ease-in-out duration-300'>
                Connect
            </button>
        </div>
  );
}

export default ButtonMain;
