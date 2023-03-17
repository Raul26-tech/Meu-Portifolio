import React from 'react';
import Experencies from '../Experiences';

export default function Works() {
    return (
        <>
            <div className="w-full flex p-6 md:p-20">
                <div className="w-full md:w-[80rem] p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Minhas experiênciais
                        </span>
                    </div>

                    <h2 className="text-slate-600 text-center md:text-left text-4xl font-bold mt-3">
                        Lugares onde trabalhei
                    </h2>

                    <div className="w-full md:flex justify-center items-start mt-10 p-3 rounded-md shadow-md bg-white">
                        <Experencies textButton="Asisto tecnologia">
                            <span className="text-lg font-bold">
                                2022 - Atual
                            </span>
                            <p>
                                Trabalho atuando como Desenvolvedor Front-end,
                                desenvolvendo soluções para aplicações Web.
                                <br />
                                Atuando com diversas tecnologias com Html,css3,
                                Tailwindcss, Javascript, React, Typescript.
                                <br />
                                Desde que adentrei tenho aprendido muito, não só
                                os conhecimentos técnicos mas também, sobre o
                                mercado e regra de negócio.
                                <br /> Asisto é uma empresa de desenvolvimento
                                de software especializada no ramo moveleiro.
                                <br />
                            </p>
                        </Experencies>

                        <Experencies textButton="Drean tecnology">
                            <span className="text-lg font-bold">
                                2021 - Outubro - 2021
                            </span>
                            <p>
                                Meu primeiro trabalho na área, onde atuei como
                                desenvolvedor front-end freelance.
                                <br />
                                Trabalhei em alguns projetos onde tive o
                                primeiro contato com o mundo do desenvolvimento.
                                Onde realizava a manutenção de aplicações Web
                                <br />
                                Atuei com tecnologias como Html, Javascript,
                                Styled-Component, css, React, React Native.
                                <br />
                            </p>
                        </Experencies>
                    </div>
                </div>
            </div>
        </>
    );
}
