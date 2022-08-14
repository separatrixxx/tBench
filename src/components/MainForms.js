import React from 'react';


function MainForms () {
    return (
        <div className="flex justify-center w-full h-1/2 lg:h-2/3 p-5 mt-5 md:mt-0 drop-shadow-xl">
            <div className="flex flex-col items-center w-full md:w-2/3 lg:w-1/3 bg-white rounded-3xl">
                <div className="flex justify-center pt-7">
                    <h1 id="login_title" className="text-white text-sm md:text-lg bg-green-600 px-5 py-1 scale-110
                    rounded-full cursor-pointer transition-all duration-500 ease-in-out mr-1 md:mr-2">Авторизация</h1>
                    <h1 id="registration_title" className="text-black text-sm md:text-lg hover:bg-black/10 px-5 py-1
                    rounded-full cursor-pointer transition-all duration-500 ease-in-out ml-1 md:ml-2">Регистрация</h1>
                </div>
                <div className="w-5/6 h-px bg-slate-200 mt-7"></div>
                <div id="login_form" className="flex flex-col items-center">
                    <input
                        className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 outline-green-600
                            focus:outline-2 ease-in-out duration-300"
                        placeholder="E-mail" type="text"/>
                    <input
                        className="block shadow-inner md:w-96 h-10 w-64 mt-3 md:mt-7 rounded-full pl-8 p-3 outline-green-600
                            focus:outline-2 ease-in-out duration-300"
                        placeholder="Пароль" type="text"/>
                    <p id="forgot_password_title" className="mt-5 text-green-600 hover:scale-105 font-bold text-sm
                    transition-all ease-in-out duration-300 cursor-pointer">Забыли пароль?</p>
                    <button id="login_btn" className="md:w-48 h-10 w-36 rounded-full mt-10 md:mt-14 text-xs md:text-sm bg-green-600
                    text-white drop-shadow-xl font-bold hover:scale-105 transition-all ease-in-out duration-300">
                        Войти
                    </button>
                </div>
                <div id="registration_form" className="flex flex-col items-center pt-0 hidden">
                    <input
                        className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 outline-green-600
                            focus:outline-2 ease-in-out duration-300"
                        placeholder="E-mail" type="text"/>
                    <input
                        className="block shadow-inner md:w-96 h-10 w-64 mt-3 md:mt-7 rounded-full pl-8 p-3 outline-green-600
                            focus:outline-2 ease-in-out duration-300"
                        placeholder="Пароль" type="text"/>
                    <input
                        className="block shadow-inner md:w-96 h-10 w-64 mt-3 md:mt-7 rounded-full pl-8 p-3 outline-green-600
                            focus:outline-2 ease-in-out duration-300"
                        placeholder="Повторите пароль" type="text"/>
                    <button id="registration_btn" className="md:w-48 w-36 h-10 rounded-full mt-10 md:mt-14 text-xs md:text-sm bg-green-600
                    text-white drop-shadow-xl font-bold hover:scale-105 transition-all ease-in-out duration-300">
                        Зарегистрироваться
                    </button>
                </div>
                <div id="forgot_password_form" className="flex flex-col items-center pt-0 hidden">
                    <input
                        className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 outline-green-600
                            focus:outline-2 ease-in-out duration-300"
                        placeholder="E-mail" type="text"/>
                    <button id="forgot_password_btn" className="md:w-48 h-10 w-36 rounded-full mt-10 md:mt-14 text-xs md:text-sm bg-green-600
                    text-white drop-shadow-xl font-bold hover:scale-105 transition-all ease-in-out duration-300">
                        Восстановить
                    </button>
                </div>
            </div>
        </div>
    );
}


export default MainForms;