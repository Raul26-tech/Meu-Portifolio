import React from 'react';

export default function Card({ text = '', icon }) {
    return (
        <>
            <div className="w-[15rem] md:w-auto mt-3 md:mt-0 md:space-x-3 flex justify-around items-center h-10 p-8 rounded-md shadow-xl text-theme-blue border-[1px] border-l-[#2596FF] hover:bg-theme-blue hover:text-white hover:border-l-theme-blue-dark-50">
                <span>{text}</span>
                <div>{icon}</div>
            </div>
        </>
    );
}
