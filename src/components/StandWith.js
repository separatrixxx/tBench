import React from "react";


function StandWith() {
    return(
        <div className="flex flex-col w-full h-48 md:h-96 mb-12">
            <div className="flex items-end px-10 py-5 justify-center h-1/2 bg-yellow-300">
                <h1 className="font-semibold text-white text-xl md:text-7xl">STAND WITH IRANIAN PEOPLE</h1>
            </div>
            <div className="flex items-start px-10 py-5 justify-center h-1/2 bg-blue-500">
                <h3 className="font-normal text-white text-sm md:text-3xl">STOP THE OCCUPATION OF WUHAN</h3>
            </div>
        </div>
    );

}

export default StandWith;