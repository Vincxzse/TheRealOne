import React, { useState, useEffect } from "react";
import NavLink from "./Nav-link";
import myLogo from '../../assets/myLogo.png';

function NavigationBar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("div[id]");
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="flex flex-row items-center justify-center font-sans bg-transparent backdrop-blur-lg fixed h-20 w-full shadow-xl z-50">
                {/* Logo */}
                <div className="flex items-center justify-center absolute left-10">
                    <img src={ myLogo } className="h-10 w-10 invert-50" />
                </div>

                {/* Nav Links */}
                <div className="flex flex-row items-center justify-center gap-5 w-full h-full">
                    <NavLink href="#home" navTitle="Home" activeSection={activeSection} />
                    <NavLink href="#technology" navTitle="Technologies" activeSection={activeSection} />
                    <NavLink href="#portfolio" navTitle="Portfolio" activeSection={activeSection} />
                    <NavLink href="#contact" navTitle="Contacts" activeSection={activeSection} />
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
