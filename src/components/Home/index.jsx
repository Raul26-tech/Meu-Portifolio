import React from 'react';
import Header from '../Header/index';
import Animation from '../Animation';
import { DiGithubBadge } from 'react-icons/di';

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col overflow-y-auto">
            <Header />
            <div className="w-full h-[30rem] flex flex-col bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                <Animation />
            </div>
            <div className="w-full h-[15rem] flex justify-center items-center p-6  bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                <div className="w-[40rem] md:w-[50rem] h-auto flex flex-col justify-center items-center p-6 bg-white rounded-md shadow-md">
                    <span className="text-slate-600 text-xl font-bold">
                        Meus contatos
                    </span>
                    <div className="w-full flex mt-1">
                        <div className="w-auto p-3 rounded-md flex justify-center items-center border-solid border-2 border-theme-blue shadow-xl">
                            <span>
                                <a
                                    href="https://github.com/Raul26-tech"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <DiGithubBadge
                                        size={26}
                                        className="text-theme-blue"
                                    />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
