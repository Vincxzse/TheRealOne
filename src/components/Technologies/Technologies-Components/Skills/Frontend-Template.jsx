import { TnT_Items } from "../Tools-And-Technologies-item";
import CardTemplate from "./Card-Template";
import htmlIcon from "../../../../assets/html-5.png";
import cssIcon from "../../../../assets/css-3.png";
import jsIcon from "../../../../assets/js.png";
import reactIcon from "../../../../assets/react.png";
import twCSSIcon from "../../../../assets/tailwindcss.png";
import bootstrapIcon from "../../../../assets/bootstrap.png";

function FrontendTemplate(props) {
    return (
        <>
            <div className="flex flex-col h-full w-full gap-2">
                <div className="flex flex-row items-end justify-start w-full">
                    <h2 className="text-xl font-sans tracking-wide text-center w-full">Frontend</h2>
                </div>
                <div className="flex flex-col h-full grid-rows-2 gap-2">
                    <CardTemplate icon = { htmlIcon } title = "HTMl" percentage = "100%" />
                    <CardTemplate icon = { cssIcon } title = "CSS" percentage = "80%" />
                    <CardTemplate icon = { reactIcon } title = "React" percentage = "80%" />
                    <CardTemplate icon = { twCSSIcon } title = "TailwindCSS" percentage = "80%" />
                    <CardTemplate icon = { bootstrapIcon } title = "Bootstrap" percentage = "80%" />
                    <CardTemplate icon = { jsIcon } title = "Javascript" percentage = "80%" />
                </div>
            </div>
        </>
    );
}

export default FrontendTemplate;