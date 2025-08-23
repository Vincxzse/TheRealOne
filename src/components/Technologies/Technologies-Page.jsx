import terminalIcon from "../../assets/terminal.png";
import codingIcon from "../../assets/coding.png";
import FrontendTemplate from "./Technologies-Components/Skills/Frontend-Template.jsx";
import BackendTemplate from "./Technologies-Components/Skills/Backend-Template.jsx";
import OthersTemplate from "./Technologies-Components/Skills/Others-Template.jsx";
import { TnT_Items } from "./Technologies-Components/Tools-And-Technologies-item.jsx";

function TechnologiesPage() {
    return(
        <>
            <div id="technology" className="flex flex-col items-center w-full h-auto lg:h-[150vh] gap-5 bg-zinc-800 p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full place-self-end self-center justify-around gap-5 h-[30%]">
                    <div className="hidden lg:grid grid-cols-2 items-center justify-start gap-10">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <img src={ terminalIcon } className="w-60 h-auto invert-50" />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <img src={ codingIcon } className="w-60 h-auto invert-50" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-start gap-5 h-full">
                        <div className="flex flex-row items-center w-full">
                            <h1 className="text-3xl lg:text-6xl text-purple-500 font-bold tracking-wider">Bring your <span className="bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">Goals</span> to Life</h1>
                        </div>
                        <div className="flex flex-row w-full">
                            <p className="text-md font-normal tracking-wider">I craft responsive, visually striking, and high-performing web experiences, bringing your ideas to life with clean code and creative precision</p>
                        </div>
                        <a
                            href="/files/VinceSalenga_CV.pdf"
                            download="VinceSalenga_CV.pdf"
                            className="flex flex-col items-center justify-center w-full lg:w-4/10 h-12 rounded-full bg-purple-500 border-3 border-purple-500 text-lg font-bold tracking-wide cursor-pointer hover:bg-transparent transition-[.1s]"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="lg:hidden flex w-full h-auto">
                    <div className="flex flex-col items-center justify-center w-full gap-2">
                        <h2 className="text-2xl font-bold font-sans tracking-wider text-white text-shadow-lg">Tools & Technologies</h2>
                        <div className="flex flex-row flex-wrap items-start justify-start bg-zinc-700 h-auto w-full p-2 rounded-sm gap-2">
                            <TnT_Items itemTitle = "HTMl" />
                            <TnT_Items itemTitle = "CSS" />
                            <TnT_Items itemTitle = "Javascript" />
                            <TnT_Items itemTitle = "React" />
                            <TnT_Items itemTitle = "Node.js" />
                            <TnT_Items itemTitle = "TailwindCSS" />
                            <TnT_Items itemTitle = "Bootstrap" />
                            <TnT_Items itemTitle = "PostgreSQL" />
                            <TnT_Items itemTitle = "MySQL" />
                            <TnT_Items itemTitle = "MongoDB" />
                            <TnT_Items itemTitle = "GIT" />
                            <TnT_Items itemTitle = "Github" />
                            <TnT_Items itemTitle = "Figma" />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col items-start justify-start w-full h-[70%] place-self-start self-center gap-3 bg-[rgba(0,0,0,0.1)] px-5 py-7 rounded-xl shadow-xl">
                    <div className="flex items-center justify-center w-full">
                        <h2 className="text-2xl font-bold tracking-wider text-purple-500">Tools & Technologies</h2>
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