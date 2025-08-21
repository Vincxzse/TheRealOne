import { TnT_Items } from "../Tools-And-Technologies-item";
import CardTemplate from "./Card-Template";
import jsIcon from "../../../../assets/js.png";
import nodeIcon from "../../../../assets/nodejs.png"
import postgresIcon from "../../../../assets/postgre.png";
import mysqlIcon from "../../../../assets/mysql.png";
import mongodbIcon from "../../../../assets/mongodb.png";

function BackendTemplate(props) {
    return (
        <>
            <div className="flex flex-col h-full w-full gap-2">
                <div className="flex flex-row items-end justify-start w-full">
                    <h2 className="text-xl font-sans tracking-wide text-center w-full">Backend</h2>
                </div>
                <div className="flex flex-col h-full grid-rows-2 gap-2">
                    <CardTemplate icon = { jsIcon } title = "Javascript" percentage = "70%" />
                    <CardTemplate icon = { nodeIcon } title = "NodeJS" percentage = "80%" />
                    <CardTemplate icon = { postgresIcon } title = "PostgreSQL" percentage = "100%" />
                    <CardTemplate icon = { mongodbIcon } title = "MongoDB" percentage = "70%" />
                    <CardTemplate icon = { mysqlIcon } title = "MySQL" percentage = "100%" />
                </div>
            </div>
        </>
    );
}

export default BackendTemplate;