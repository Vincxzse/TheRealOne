import terminalIcon from "../../assets/terminal.png";
import codingIcon from "../../assets/coding.png";
import FrontendTemplate from "./Technologies-Components/Skills/Frontend-Template.jsx";
import BackendTemplate from "./Technologies-Components/Skills/Backend-Template.jsx";
import OthersTemplate from "./Technologies-Components/Skills/Others-Template.jsx";

function TechnologiesPage() {
    return(
        <>
            <div id="technology" className="flex flex-col items-center w-full h-[150vh] gap-10 bg-zinc-800 p-10">
                <div className="grid grid-cols-2 w-full place-self-end self-center justify-around gap-5 h-[30%]">
                    <div className="grid grid-cols-2 items-center justify-start gap-10">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <img src={ terminalIcon } className="w-60 h-auto invert-50" />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <img src={ codingIcon } className="w-60 h-auto invert-50" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-start gap-5 h-full">
                        <div className="flex flex-row items-center w-full">
                            <h1 className="text-6xl text-purple-500 font-bold tracking-wider">Bring your <span className="bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">Dreams</span> to Life</h1>
                        </div>
                        <div className="flex flex-row w-full">
                            <p className="text-md font-normal tracking-wider">I craft responsive, visually striking, and high-performing web experiences, bringing your ideas to life with clean code and creative precision</p>
                        </div>
                        <a
                            href="/files/VinceSalenga_CV.pdf"
                            download="VinceSalenga_CV.pdf"
                            className="flex flex-col items-center justify-center w-4/10 h-12 rounded-full bg-purple-500 border-3 border-purple-500 text-lg font-bold tracking-wide cursor-pointer hover:bg-transparent transition-[.1s]"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-[70%] place-self-start self-center gap-3 bg-[rgba(0,0,0,0.1)] px-5 py-7 rounded-xl shadow-xl">
                    <div className="flex items-center justify-center w-full">
                        <h2 className="text-2xl font-bold tracking-wider text-purple-500">Tools & Technologies I Use</h2>
                    </div>
                    <div className="grid grid-cols-3 items-center justify-start h-full w-full gap-2">
                        <FrontendTemplate />
                        <BackendTemplate />
                        <OthersTemplate />
                    </div>
                </div>
            </div>        
        </>
    );
}

export default TechnologiesPage;