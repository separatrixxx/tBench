import React from 'react';
import Arrow from '../components/Arrow'
import Team from '../components/Team'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'


function Home () {

    return (
        <div className="scroll-smooth bg-black" onTouchStart={closeMenu}>
            <Header />
            <div id="first_div" className="w-full h-screen bg-blue-600 transition-colors duration-700">
                <div className="flex flex-col justify-center max-w-xs mx-auto w-full h-5/6">
                    <button id="sign_in_btn" className='max-w-xs mx-auto bg-white shadow-2xl rounded-full w-48 md:w-64 h-10 md:h-12 text-sm md:text-base items-center text-blue-500 font-bold select-none hover:scale-110 ease-in-out duration-300'>
                        Connect
                    </button>
                </div>
                <Arrow />
            </div>
            <div id="second_div" className="w-full bg-blue-600 transition-colors duration-700">
                <Main />
                <Team />
                <div className="w-full h-screen">

                </div>
            </div>
            <Footer />
        </div>
    );
}

function closeMenu() {
    document.getElementById('close_menu').classList.add('hidden');
    document.getElementById('link_1').classList.add('hidden');
    document.getElementById('link_2').classList.add('hidden');
    document.getElementById('link_3').classList.add('hidden');
    document.getElementById('burger_menu').classList.remove('hidden');
}


export default Home;
