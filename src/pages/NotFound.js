import React from 'react';
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from 'react-apple-emojis/src/data.json';


function NotFound () {

    return (
        <div className="scroll-smooth bg-blue-600 w-full h-screen flex flex-col justify-center items-center">
            <a href="/">
                <EmojiProvider data={emojiData} ><Emoji name="pensive-face" width={120} /></EmojiProvider>
            </a>
            <a href="/" className="mt-10 md:mt-16 text-xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-500 font-black">Ooops... Looks like page not found :(</a>
        </div>
    );
}

export default NotFound;