import React from 'react';
import TypeIt from 'typeit-react';

import image from '../../assets/user.jpeg';

const User = ({ children }) => {
    return (
        <strong style={{ color: '#f5f5f5', fontSize: '40px' }}>
            {children}
        </strong>
    );
};

export default function Animation() {
    return (
        <div className="w-full h-[20rem] flex items-center justify-center p-12">
            <div className="w-[50rem] flex justify-between items-center">
                <div>
                    <span className="text-theme-blue text-lg">
                        Olá, seja bem-vindo(a) ao meu perfil !
                    </span>
                    <br />
                    <TypeIt
                        options={{
                            loop: true,
                            loopDelay: 600,
                            nextStringDelay: 900,
                        }}
                    >
                        <User>Eu sou Raul Santos</User>
                        <br />
                        <User>Desenvolvedor </User>
                        <span className="text-theme-blue font-bold text-[2.5rem]">
                            Front end.
                        </span>
                        <br />
                    </TypeIt>
                </div>
                <div className="w-[15rem] h-[15rem] hidden md:block">
                    <figure>
                        <img
                            className="rounded-full opacity-[0.8]"
                            src={`${image}`}
                            alt="Usuário"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
}
