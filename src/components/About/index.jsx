import React from 'react';

import image from '../../assets/animation.png';

export default function About() {
    return (
        <>
            <section className="w-full flex justify-center p-6 md:p-20">
                <div className="w-[30rem] p-3 hidden md:block">
                    <figure>
                        <img src={`${image}`} alt="Animação da sessão" />
                    </figure>
                </div>
                <div className="w-full  md:w-[30rem] p-8">
                    <span className="text-theme-blue text-base">
                        Um pouco sobre mim
                    </span>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3">
                        Sobre
                    </h2>
                    <p className="mt-3 text-slate-500">
                        Sou um jovem desenvolvedor que teve seu primeiro contato
                        com o mundo do desenvolvimento aos 17 anos.
                        <br />
                        Sempre fui muito curioso e gosto de entender como as
                        coisas funcionam, e esse extinto se aflorou ainda mais
                        no ano de 2017 quando fiz meu primeiro curso técnico em
                        Redes de Computadores na Etec de Embu das Artes. <br />
                        Mais tarde, no ano de 2020, fiz Desenvolvimento de
                        Sistemas na mesma instituição, e de lá pra cá venho
                        aprimorando meus conhecimento em Desenvolvimento Web.
                        <br />
                        Atualmente trabalho como Desenvolvedor Front End e faço
                        graduação em Análise e Desenvolvimento de Sistemas.
                    </p>
                </div>
            </section>
        </>
    );
}
