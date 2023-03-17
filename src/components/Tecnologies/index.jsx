import React from 'react';
import Card from '../Card';
import {
    SiJavascript,
    SiTailwindcss,
    SiStyledcomponents,
    SiTypescript,
    SiMysql,
} from 'react-icons/si';
import { DiHtml5, DiCss3, DiReact, DiNodejsSmall } from 'react-icons/di';

export default function Tecnologies() {
    return (
        <>
            <div className="w-full flex p-6 md:p-20">
                <div className="w-full p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Minhas experiênciais
                        </span>
                    </div>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3 mb-4 text-center md:text-left">
                        Linguagens e Tecnologias
                    </h2>
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-slate-600">
                            Tecnologias que tenho contato
                        </span>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center md:flex-row md:flex-wrap md:items-center md:space-x-8 md:space-y-2 mt-10 p-6 rounded-md shadow-xl bg-white">
                        <Card text="Html" icon={<DiHtml5 size={24} />} />
                        <Card text="Css" icon={<DiCss3 size={24} />} />
                        <Card
                            text="Javascript"
                            icon={<SiJavascript size={20} />}
                        />
                        <Card text="React" icon={<DiReact size={24} />} />
                        <Card
                            text="Tailwind"
                            icon={<SiTailwindcss size={20} />}
                        />
                        <Card
                            text="Typescript"
                            icon={<SiTypescript size={20} />}
                        />
                        <Card text="Mysql" icon={<SiMysql size={30} />} />
                        <Card
                            text="Node js"
                            icon={<DiNodejsSmall size={20} />}
                        />
                        <Card
                            text="Styled components"
                            icon={<SiStyledcomponents size={30} />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
