import React from "react";
import briefcaseIcon from '../../assets/portfolio.png';
import myAvatar from '../../assets/avatar.png';

function HomePage() {
    return(
        <>
            <div id="home" className="flex w-full h-screen items-end justify-center bg-zinc-900 shadow-xl">
                <div className="grid grid-cols-2 w-full h-[75%] items-center justify-center">
                    <div className="flex flex-col w-full h-full items-center">
                        <div className="flex flex-col w-[70%] h-full gap-25">
                            <h1 className="text-7xl text-purple-800 font-extrabold">Full Stack <br /> Developer</h1>
                            <div className="flex flex-col gap-5">
                                <p>I'm Vince – a <span className="font-bold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">full stack developer</span> who loves building clean, functional, and responsive web apps.</p>
                                <div className="flex flex-row items-center justify-start gap-5 w-full h-15">
                                    <a href="" className="flex items-center justify-center w-[40%] h-full border-3 border-purple-800 bg-purple-800 rounded-lg font-bold text-lg hover:bg-transparent transition-[.1s] gap-2">
                                        My Work
                                        <img src={ briefcaseIcon } className="invert-100 h-5" />
                                    </a>
                                    <a href="" className="flex items-center justify-center w-auto h-full font-bold text-lg hover:text-purple-500 transition-[.1s]">Connect With Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full items-center justify-center overflow-hidden">
                        <img src={ myAvatar } className="w-auto h-150" />
                    </div>
                    {/* Continue right side of home */}
                </div>
            </div>
        </>
    );
}

export default HomePage;