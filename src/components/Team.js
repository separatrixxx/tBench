import React from "react";


function Team() {
    return(
        <div className="flex justify-center w-full py-10">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col items-center px-5 py-5 md:py-0">
                    <div className="flex w-36 md:w-32 h-36 md:h-32 rounded-full overflow-hidden">
                        <div id="spr_img" className="w-36 md:w-32 h-36 md:h-32 bg-cover bg-center bg-no-repeat
                        md:hover:scale-110 ease-in-out duration-500">

                        </div>
                    </div>
                    <p className="text-white pt-5 md:pt-10 text-base md:text-lg font-medium">separatrix</p>
                </div>
                <div className="flex flex-col items-center px-0 md:px-32 py-5 md:py-0">
                    <div className="flex w-36 md:w-32 h-36 md:h-32 rounded-full overflow-hidden">
                        <div id="bigg_img" className="w-36 md:w-32 h-36 md:h-32 bg-cover bg-center bg-no-repeat
                        md:hover:scale-110 ease-in-out duration-500">

                        </div>
                    </div>
                    <p className="text-white pt-5 md:pt-10 text-base md:text-lg font-medium">biggvladik</p>
                </div>
                <div className="flex flex-col items-center px-5 py-5 md:py-0">
                    <div className="flex w-36 md:w-32 h-36 md:h-32 rounded-full overflow-hidden">
                        <div id="elnd_img" className="w-36 md:w-32 h-36 md:h-32 bg-cover bg-center bg-no-repeat
                        md:hover:scale-110 ease-in-out duration-500">

                        </div>
                    </div>
                    <p className="text-white pt-5 md:pt-10 text-base md:text-lg font-medium">elanoide_s</p>
                </div>
            </div>
        </div>
    );

}

export default Team;