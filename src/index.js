import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


let loginTitle = document.getElementById('login_title');
let registrationTitle = document.getElementById('registration_title');
let forgotPasswordTitle = document.getElementById('forgot_password_title');

let loginForm = document.getElementById('login_form');
let registrationForm = document.getElementById('registration_form');
let forgotPasswordForm = document.getElementById('forgot_password_form');

loginTitle?.addEventListener('click', () => {
    registrationTitle?.classList.remove('bg-green-600');
    registrationTitle?.classList.remove('scale-110');
    registrationTitle?.classList.remove('text-white');
    registrationTitle?.classList.add('text-black');
    registrationTitle?.classList.add('hover:bg-black/10');

    loginTitle?.classList.add('bg-green-600');
    loginTitle?.classList.add('scale-110');
    loginTitle?.classList.add('text-white');
    loginTitle?.classList.remove('text-black');
    loginTitle?.classList.remove('hover:bg-black/10');

    loginForm?.classList.remove('hidden');
    registrationForm?.classList.add('hidden');
    forgotPasswordForm?.classList.add('hidden');
})

registrationTitle?.addEventListener('click', () => {
    registrationTitle?.classList.add('bg-green-600');
    registrationTitle?.classList.add('scale-110');
    registrationTitle?.classList.add('text-white');
    registrationTitle?.classList.remove('text-black');
    registrationTitle?.classList.remove('hover:bg-black/10');

    loginTitle?.classList.remove('bg-green-600');
    loginTitle?.classList.remove('scale-110');
    loginTitle?.classList.remove('text-white');
    loginTitle?.classList.add('text-black');
    loginTitle?.classList.add('hover:bg-black/10');

    loginForm?.classList.add('hidden');
    registrationForm?.classList.remove('hidden');
    forgotPasswordForm?.classList.add('hidden');
})

forgotPasswordTitle?.addEventListener('click', () => {
    registrationTitle?.classList.remove('bg-green-600');
    registrationTitle?.classList.remove('scale-110');
    registrationTitle?.classList.remove('text-white');
    registrationTitle?.classList.add('text-black');
    registrationTitle?.classList.add('hover:bg-black/10');

    loginTitle?.classList.remove('bg-green-600');
    loginTitle?.classList.remove('scale-110');
    loginTitle?.classList.remove('text-white');
    loginTitle?.classList.add('text-black');
    loginTitle?.classList.add('hover:bg-black/10');

    loginForm?.classList.add('hidden');
    registrationForm?.classList.add('hidden');
    forgotPasswordForm?.classList.remove('hidden');
})