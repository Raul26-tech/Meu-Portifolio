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
                        Sou um jovem desenvolvedor que entrei nesse mundo aos 17
                        anos. Sempre fui muito curioso e gosto de entender como
                        as coisas funcionam, esse extinto se aflorou ainda mais
                        no ano de 2017 quanto fiz meu primeiro curso técnico em
                        Redes de computadores na Etec de Embu das artes, mais
                        tarde, no ano de 2020 fiz Desenvolvimento de sistemas na
                        mesma instituição.
                        <br /> De lá pra cá, veio aprimorando meus conhecimento
                        em desenvolvimento Web, atualmente trabalho como
                        Desenvolvedor Front End e faço graduação em Análise de
                        Desenvolvimento.
                    </p>
                </div>
            </section>
        </>
    );
}
