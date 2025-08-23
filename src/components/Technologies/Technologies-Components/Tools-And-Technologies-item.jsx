import React, { useState } from "react";

function TnT_Items(props) {
    return(
        <>
            <div className="hidden lg:flex flex-row items-center justify-center">
                <img src={ props.itemImg } className="h-15" />
            </div>
            <div className="lg:hidden flex items-center justify-center px-2 py-1 bg-zinc-900 rounded-lg">
                <p className="font-mono text-white">{ props.itemTitle }</p>
            </div>
        </>
    );
}

export { TnT_Items };