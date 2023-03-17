import React from 'react';
import Card from '../Card';

import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

export default function Contact() {
    return (
        <>
            <div className="w-full flex p-6 md:p-20">
                <div className="w-full p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Onde me encontrar ?
                        </span>
                    </div>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3 mb-4 text-center md:text-left">
                        Meus contatos
                    </h2>
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-slate-600">Contate-me</span>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center md:flex-row md:flex-wrap md:items-center md:space-x-8 md:space-y-2 mt-10 p-6 rounded-md shadow-xl bg-white">
                        <Card
                            text="Github"
                            link="https://github.com/Raul26-tech"
                            icon={<DiGithubBadge size={30} />}
                        />
                        <Card
                            text="Linkedin"
                            link="https://www.linkedin.com/in/raul-santos-75a1b8201/"
                            icon={<BsLinkedin size={20} />}
                        />
                        <Card
                            text="Instagram"
                            link="https://instagram.com/rauul_guitar?igshid=ZDdkNTZiNTM="
                            icon={<AiFillInstagram size={25} />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
