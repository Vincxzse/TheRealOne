

function PortfolioPage() {
    return (
        <>
            <div id="portfolio" className="flex flex-col w-full h-screen items-center justify-center bg-zinc-900 shadow-2xl">
                <div className="flex flex-col h-[calc(100%-100px)] w-[calc(100%-100px)]">
                    <div className="flex flex-row items-center justify-center w-full h-[10%]">
                        <h2 className="text-sans text-3xl tracking-wider font-extrabold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">Portfolio</h2>
                    </div>
                    <div className="flex flex-col items-start justify-start h-[90%] w-full p-10">
                        <p className="text-center w-full text-white">Null</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioPage;