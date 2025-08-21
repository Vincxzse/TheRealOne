import { TnT_Items } from "../Tools-And-Technologies-item";
import CardTemplate from "./Card-Template";
import gitIcon from "../../../../assets/git.png";
import githubIcon from "../../../../assets/github.png";
import figmaIcon from "../../../../assets/figma.png";
import vscodeIcon from "../../../../assets/vscode.png";

function OthersTemplate(props) {
    return (
        <>
            <div className="flex flex-col h-full w-full gap-2">
                <div className="flex flex-row items-end justify-start w-full">
                    <h2 className="text-xl font-sans tracking-wide text-center w-full">Backend</h2>
                </div>
                <div className="flex flex-col h-full grid-rows-2 gap-2">
                    <CardTemplate icon = { gitIcon } title = "Git" percentage = "80%" />
                    <CardTemplate icon = { githubIcon } title = "Github" percentage = "80%" />
                    <CardTemplate icon = { figmaIcon } title = "Figma" percentage = "60%" />
                    <CardTemplate icon = { vscodeIcon } title = "Visual Studio Code" percentage = "90%" />
                </div>
            </div>
        </>
    );
}

export default OthersTemplate;