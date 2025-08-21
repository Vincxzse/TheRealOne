import React, { useState } from "react";

function TnT_Items(props) {
    return(
        <>
            <div className="flex flex-row items-center justify-center">
                <img src={ props.itemImg } className="h-15" />
            </div>
        </>
    );
}

export { TnT_Items };