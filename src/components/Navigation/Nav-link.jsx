function NavLink({ href, navTitle, activeSection }) {
    const isActive = activeSection === href.replace("#", "");

    return (
        <div className="flex items-center justify-center w-auto h-full">
            <a
                href={href}
                className={`hover:text-purple-500 text-md uppercase transition-colors ${
                    isActive ? "text-purple-500 font-bold" : "text-white"
                }`}
            >
                {navTitle}
            </a>
        </div>
    );
}

export default NavLink;
