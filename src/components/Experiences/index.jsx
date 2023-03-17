import React, { useState } from 'react';

export default function Experencies({ children, textButton = '' }) {
    const [jobs, setJobs] = useState(false);

    return (
        <>
            <div className="w-full flex flex-col p-3 h-auto">
                <button
                    className="w-full h-[3rem] justify-center items-center p-3 text-theme-blue border-l-[#2596FF] hover:bg-theme-blue hover:text-white hover:border-l-theme-blue-dark-50 transition duration-150 border-2"
                    onClick={() => {
                        setJobs((prevState) => !prevState);
                    }}
                >
                    {textButton}
                </button>
                {jobs && (
                    <div className="w-full flex justify-center">
                        <div className="m-6 p-3 text-slate-600 font-normal">
                            <p>{children}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
