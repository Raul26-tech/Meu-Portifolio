import React from 'react';

export default function Projects() {
    return (
        <>
            <div className="w-full flex p-3 md:p-20">
                <div className="w-full p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Meus projetos
                        </span>
                    </div>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3 mb-4 text-center md:text-left">
                        Principais projetos
                    </h2>
                    <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-8 md:space-y-2 mt-10 p-6 rounded-md shadow-xl bg-white">
                        <div className="w-[15rem] md:w-[20rem] bg-slate-white rounded-md shadow-xl p-6 hover:-translate-y-2 hover:duration-300 cursor-pointer">
                            <div className="w-full h-20 flex justify-center items-center text-theme-blue text-base">
                                <h2 className="text-2xl font-bold">As-money</h2>
                            </div>
                            <div className="w-full flex md:h-[20rem] flex-col p-3 border-[1px] border-l-theme-blue rounded-md">
                                <p className="text-slate-600 text-sm">
                                    O As-money é um projeto que faz uma pequena
                                    gerencia de finanças, onde nós podemos
                                    realizar um CRUD de transações.
                                    <br />
                                    Foi um projeto que eu desenvolvi para
                                    solucionar um problema de gestão de um
                                    amigo, pois ele realizava gestão de maneira
                                    manual
                                </p>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-theme-blue text-base">
                                        Tecnologias utilizadas
                                    </span>
                                    <span className="text-slate-600 text-sm">
                                        React, React-router-dom, react-icons,
                                        react-hook-form, Typescript, Axios, Live
                                        Server
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[15rem] md:w-[20rem] bg-slate-white rounded-md shadow-xl p-6 hover:-translate-y-2 hover:duration-300 cursor-pointer">
                            <div className="w-full h-20 flex justify-center items-center text-theme-blue text-base">
                                <h2 className="text-2xl font-bold">
                                    Projeto React
                                </h2>
                            </div>
                            <div className="w-full flex h-[20rem] flex-col p-3 border-[1px] border-l-theme-blue rounded-md">
                                <p className="text-slate-600 text-sm">
                                    Meu primeiro projeto desenvolvido com React,
                                    onde eu estava dando os primeiros passos,
                                    adquiri um aprendizado muito bacana e pude
                                    aprender alguns conceitos e como o React
                                    funciona
                                </p>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-theme-blue text-base">
                                        Tecnologias utilizadas
                                    </span>
                                    <span className="text-slate-600 text-sm">
                                        React, React-router-dom, Bootstrap,
                                        Axios, Live Server
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[15rem] md:w-[20rem] bg-slate-white rounded-md shadow-xl p-6 hover:-translate-y-2 hover:duration-300 cursor-pointer">
                            <div className="w-full h-20 flex justify-center items-center text-theme-blue text-base">
                                <h2 className="text-2xl font-bold">
                                    Netflix Clone
                                </h2>
                            </div>
                            <div className="w-full flex flex-col h-[20rem] p-3 border-[1px] border-l-theme-blue rounded-md">
                                <p className="text-slate-600 text-sm">
                                    Clone da Netflix, coloco entre os principais
                                    pois me deu a base de uma boa estrutura HTML
                                    e conceitos importantes do CSS que utilizo
                                    no dia-a-dia.
                                </p>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-theme-blue text-base">
                                        Tecnologias utilizadas
                                    </span>
                                    <span className="text-slate-600 text-sm">
                                        HTML, CSS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center p-6">
                        <button className="bg-white text-theme-blue text-sm p-4 border-2 border-theme-blue rounded-md hover:text-white hover:bg-theme-blue-hover hover:duration-200">
                            <a
                                href="https://github.com/Raul26-tech"
                                target="_blank"
                            >
                                Saiba mais
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
