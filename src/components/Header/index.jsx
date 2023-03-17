import React from 'react';
import { BiCode, BiCodeAlt } from 'react-icons/bi';

export default function Header() {
    return (
        <>
            <div className="w-full h-[5rem] flex items-center justify-between p-12 bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                <div className="flex justify-center items-center text-white">
                    <BiCode size={24} style={{ color: '#2596FF' }} />
                    <span className="m-1">Raul</span>
                    <BiCodeAlt size={24} style={{ color: '#2596FF' }} />
                </div>
                <div className="w-[5rem] h-[5rem] p-3 flex justify-center items-center">
                    <button className="w-full h-[1.5rem] flex justify-center items-center text-white rounded-xl bg-theme-blue" />
                </div>
            </div>
        </>
    );
}
