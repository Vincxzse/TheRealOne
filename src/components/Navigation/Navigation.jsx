import React, { useState, useEffect } from "react";
import NavLink from "./Nav-link";
import MobileNav from "./Mobile-Navigation";
import menuIcon from '../../assets/menu.png';
import myLogo from '../../assets/myLogo.png';

function NavigationBar() {
    // Auto Highlight Current Location Thru Navigation
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

    // Mobile Navigation
    const [activeMenu, setActiveMenu] = useState(false);
    const handleMenuButton = () => {
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    }

    return (
        <>
            { activeMenu ? <MobileNav closeMenu={() => setActiveMenu(false)} /> : null }
            <div className="flex flex-row items-center justify-end font-sans bg-transparent backdrop-blur-lg fixed h-20 w-full shadow-xl z-50 px-10">
                <div className="flex items-center justify-center absolute left-10">
                    <img src={ myLogo } className="h-10 w-10 invert-50" />
                </div>
                <div className="hidden lg:flex flex-row items-center justify-center gap-5 w-full h-full">
                    <NavLink href="#home" navTitle="Home" activeSection={activeSection} />
                    <NavLink href="#technology" navTitle="Technologies" activeSection={activeSection} />
                    <NavLink href="#portfolio" navTitle="Portfolio" activeSection={activeSection} />
                    <NavLink href="#contact" navTitle="Contacts" activeSection={activeSection} />
                </div>
                <div className="lg:hidden flex flex-row items-center justify-center">
                    <button onClick={ handleMenuButton } id="menu-btn" className="cursor-pointer">
                        <img src={ menuIcon } className="h-8 invert-100" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
