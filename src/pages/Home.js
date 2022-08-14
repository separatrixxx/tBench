import React from 'react';
import MainHeader from '../components/MainHeader'
import MainForms from '../components/MainForms'
import MainFooter from '../components/MainFooter'


function Home () {
    return (
        <div id="first_div" className="w-full h-screen bg-green-600 scroll-smooth bg-cover bg-center bg-no-repeat">
            <MainHeader />
            <MainForms />
            <MainFooter />
        </div>
    );
}


export default Home;