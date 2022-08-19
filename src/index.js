import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as nearAPI from "near-api-js";
import getConfig from './config.js';

async function initContract() {

    const nearConfig = getConfig(process.env.NEAR_ENV || 'testnet');

    const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();

    const near = await nearAPI.connect({ keyStore, ...nearConfig });

    const walletConnection = new nearAPI.WalletConnection(near);

    let currentUser;
    if (walletConnection.getAccountId()) {
        currentUser = {
            // Gets the accountId as a string
            accountId: walletConnection.getAccountId(),
            // Gets the user's token balance
            balance: (await walletConnection.account().state()).amount,
        };
    }

    const contract = await new nearAPI.Contract(
        walletConnection.account(),
        nearConfig.contractName,
        {
            viewMethods: ['getMessages'],
            changeMethods: ['addMessage'],
            sender: walletConnection.getAccountId(),
        }
    );

    return { contract, currentUser, nearConfig, walletConnection };
}

window.nearInitPromise = initContract().then(
    ({ contract, currentUser, nearConfig, walletConnection }) => {
        ReactDOM.render(
            <App
                contract={contract}
                currentUser={currentUser}
                nearConfig={nearConfig}
                wallet={walletConnection}
            />,
            document.getElementById('root')
        );

        if (walletConnection.isSignedIn()) {
            isSignedIn(walletConnection, currentUser)
        } else {
            isSignedOut()
        }

        document.querySelector('#sign_in_btn')?.addEventListener('click', () => {
            walletConnection.requestSignIn(
                {contractId: nearConfig.contractName, methodNames: [contract.addMessage.name]}, //contract requesting access
                'tBench', //optional name
                null, //optional URL to redirect to if the sign in was successful
                null //optional URL to redirect to if the sign in was NOT successful
            );
        })

        document.querySelector('#sign_out_btn')?.addEventListener('click', () => {
            window.location.href = '/';
            walletConnection.signOut();
        })

        document.querySelector('#back_btn')?.addEventListener('touchstart', handleTouchStart, false);
        document.querySelector('#back_btn')?.addEventListener('touchmove', handleTouchMove, false);

        let xDown = null;
        let yDown = null;

        function getTouches(evt) {
            return evt.touches || // чистый API JS
                evt.originalEvent.touches; // jQuery
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }

            const xUp = evt.touches[0].clientX;
            const yUp = evt.touches[0].clientY;

            const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;

            if (!(Math.abs(xDiff) <= Math.abs(yDiff))) {/* отлавливаем разницу в движении */
                if (!(xDiff >= 0)) {
                    window.location.href = '/';
                }
            }
            /* свайп был, обнуляем координаты */
            xDown = null;
            yDown = null;
        }


    }

);

function isSignedIn(walletConnection, currentUser) {

    let user = {
        name: walletConnection.getAccountId().replace(new RegExp('.testnet', 'g'), ''),
        info: `Hi there, I'm ${walletConnection.getAccountId().replace(new RegExp('.testnet', 'g'), '')}`
    };

    if (document.querySelector('#username') !== null) {
        document.querySelector('#username').innerHTML = user.name;
        document.querySelector('#balance').innerHTML = (currentUser.balance / 10**24).toFixed(5) + ' NEAR';
        document.querySelector('#userInfo').innerHTML = user.info;
    }

    if (document.querySelector('#content_form_username') !== null) {

        let now = new Date();

        let year = now.getFullYear();
        let month = now.getMonth();
        let day = now.getDate();
        let hours = now.getHours();
        let minutes = String(now.getMinutes());

        if  (minutes.length === 1) {
            minutes = '0' + minutes;
        }

        month = ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Мая.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'][month]

        document.querySelector('#content_form_username').innerHTML = user.name;
        document.querySelector('#content_form_time').innerHTML = `${day} ${month} ${year} в ${hours}:${minutes}`;
    }

    if (document.querySelector('#like') !== null && document.querySelector('#dislike') !== null) {
        document.querySelector('#like').addEventListener('click', () => {
            document.querySelector('#like').classList.add('hidden');
            document.querySelector('#dislike').classList.remove('hidden');
        })

        document.querySelector('#dislike').addEventListener('click', () => {
            document.querySelector('#like').classList.remove('hidden');
            document.querySelector('#dislike').classList.add('hidden');
        })
    }

    let lastScroll = 0;
    const defaultOffset = 200;
    const header = document.querySelector('#content_nav_div');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

    const containHide = () => header?.classList.contains('hide');

    window.addEventListener('scroll', () => {
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            header?.classList.add('hide');
        }
        else if(scrollPosition() < lastScroll && containHide()){
            header?.classList.remove('hide');
        }

        lastScroll = scrollPosition();
    })

}

function isSignedOut() {

    document.querySelector('.link')?.addEventListener('click', () => {
        window.location.reload();
    })

    let lastScroll = 0;
    const defaultOffset = 200;
    const header = document.querySelector('#nav_div');

    const height = window.innerHeight
    const div1 = document.querySelector('#first_div');
    const div2 = document.querySelector('#second_div');

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

        if (scrollPosition() > height - 1) {
            div1.classList.add("bg-black");
            div1.classList.remove("bg-blue-tb");
            div2.classList.add("bg-black");
            div2.classList.remove("bg-blue-tb");
        } else {
            div1.classList.remove("bg-black");
            div1.classList.add("bg-blue-tb");
            div2.classList.remove("bg-black");
            div2.classList.add("bg-blue-tb");
        }
    })
}