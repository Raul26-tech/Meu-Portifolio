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
                        <Experencies textButton="Dream Tecnology">
                            <span className="text-lg font-bold text-theme-blue">
                                Setembro 2021 - Outubro 2021
                            </span>
                            <p>
                                Meu primeiro trabalho na área, onde atuei como
                                Desenvolvedor Front-end Freelance.
                                <br />
                                Trabalhei em alguns projetos onde tive o
                                primeiro contato com o mundo do desenvolvimento,
                                onde realizava a criação e manutenção de
                                aplicações Web utilizando técnologias como HTML,
                                CSS, JAVASCRIPT, STYLED-COMPONENTS, REACT,
                                REACT-NATIVE.
                                <br />
                            </p>
                        </Experencies>
                        <Experencies textButton="Asisto Tecnologia">
                            <span className="text-lg font-bold text-theme-blue">
                                2022 - Atual
                            </span>

                            <p>
                                Atuo como Desenvolvedor Front-end, desenvolvendo
                                soluções para aplicações Web com diversas
                                tecnologias, como por exemplo HTML, CSS,
                                JAVASCRIPT, TAILWINDCSS, REACT, TYPESCRIPT.
                                <br />
                            </p>
                            <p>
                                Desde que adentrei tenho aprendido muito, não só
                                os conhecimentos técnicos mas também sobre o
                                mercado e regra de negócio.
                            </p>
                            <br />
                            <p>
                                <span>
                                    <a
                                        href="https://asisto.com.br/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-theme-blue mr-1"
                                    >
                                        Asisto
                                    </a>
                                </span>
                                é uma empresa de desenvolvimento de software
                                especializada no ramo moveleiro.
                                <br />
                            </p>
                        </Experencies>
                    </div>
                </div>
            </div>
        </>
    );
}
