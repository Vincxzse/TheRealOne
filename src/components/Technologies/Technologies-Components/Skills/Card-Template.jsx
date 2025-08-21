import { TnT_Items } from "../Tools-And-Technologies-item";

function CardTemplate(props) {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-1 w-full h-[15%]">
                <TnT_Items itemImg = { props.icon } />
                <div className="grid grid-cols-1 grid-rows-2 w-full h-full col-span-3">
                    <div className="flex flex-col w-full h-full items-start justify-end">
                        <p>{ props.title }</p>
                    </div>
                    <div className="flex flex-row w-full h-full items-center justify-start gap-2">
                        <div className="flex flex-row items-start justify-start w-[80%] h-2 bg-slate-500 rounded-full overflow-hidden">
                            <div className="flex h-full bg-purple-500" style={{ width: props.percentage }}></div>
                        </div>
                        <p>{ props.percentage }</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardTemplate;