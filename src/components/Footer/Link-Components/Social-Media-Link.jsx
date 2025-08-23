function SocialMediaLink(props) {
    return (
        <>
            <a 
                href={ props.link } 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-row items-center justify-center lg:justify-start w-full h-15 gap-3"
            >
                <img src={ props.image } className="h-12 w-auto rounded-full invert-100" />
                <p className="hidden lg:flex text-white font-sans text-xl group-hover:bg-gradient-to-r group-hover:from-purple-800 group-hover:to-pink-800 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                    { props.linkTitle }
                </p>
            </a>
        </>
    );
}

export default SocialMediaLink;
