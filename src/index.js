import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Web3Auth } from "@web3auth/web3auth";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

const web3auth = new Web3Auth({
    clientId: "BPDBG6BFuXapbc1XsMdHidsam3whUiP0oyySTKMBKzP8iMKZSKIU5S97KvBvN8oVFqYnaDPsfeRY4imG1051eJQ",
    chainConfig: {
        chainNamespace: "solana",
        chainId: "0x1",
    },
});

web3auth.initModal();

document.querySelector('#sign_in_btn').addEventListener('click', () => {
    web3auth.connect();
})

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('#nav_div');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})
