import React from 'react';
import ContentHeader from '../components/ContentHeader'
import ContentForm from '../components/ContentForm'



function Content () {

    return (
        <div className="scroll-smooth bg-white">
            <ContentHeader />
            <div className="flex flex-col items-center w-full mt-10">
                <ContentForm />
                <ContentForm />
                <ContentForm />
                <ContentForm />
                <ContentForm />
            </div>
        </div>
    );
}



export default Content;