import NavLink from "./Nav-link"
import React, { useState, useEffect } from "react";

function MobileNav({ closeMenu }) {
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
            <div id="pop-up-menu" className="fixed flex flex-col right-0 top-20 h-auto w-50 gap-5 p-2 bg-transparent backdrop-blur-lg shadow-xl z-50">
                <NavLink href="#home" navTitle="Home" activeSection={activeSection} closeMenu = { closeMenu } />
                <NavLink href="#technology" navTitle="Technologies" activeSection={activeSection} closeMenu = { closeMenu } />
                <NavLink href="#portfolio" navTitle="Portfolio" activeSection={activeSection} closeMenu = { closeMenu } />
                <NavLink href="#contact" navTitle="Contacts" activeSection={activeSection} closeMenu = { closeMenu } />
            </div>
        </>
    )
}

export default MobileNav