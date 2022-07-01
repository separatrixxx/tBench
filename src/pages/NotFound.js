import React from 'react';
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from 'react-apple-emojis/src/data.json';


function NotFound () {

    return (
        <div className="scroll-smooth bg-blue-600 w-full h-screen flex flex-col justify-center items-center">
            <button onClick={reload}>
                <EmojiProvider data={emojiData} ><Emoji name="pensive-face" width={120} /></EmojiProvider>
            </button>
            <button onClick={reload} className="mt-10 md:mt-16">
                <h2 className="text-xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-500 font-black">Ooops... Looks like page not found :(</h2>
            </button>
        </div>
    );
}

function reload() {
    window.location.href = '/';
}

export default NotFound;