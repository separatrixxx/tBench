import React from 'react';
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from 'react-apple-emojis/src/data.json';


function PleaseLogin () {

    return (
        <div className="scroll-smooth bg-blue-600 w-full h-screen flex flex-col justify-center items-center">
            <a href="/">
                <EmojiProvider data={emojiData} ><Emoji name="face-with-rolling-eyes" width={120} /></EmojiProvider>
            </a>
            <a href="/" className="mt-10 md:mt-16 text-xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-500 font-black">You need to be logged in to view this page...</a>
        </div>
    );
}


export default PleaseLogin;