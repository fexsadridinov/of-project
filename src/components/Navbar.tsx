import { Link } from 'react-router-dom';
import { navLinks } from '@/constants/index.ts';

import React from "react";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href = {href}
                       className="nav-li_a"
                       onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-700 to-red-800">
            <div className="max-w-7xl mx-auto">
               <div className="flex justify-between items-center py-8 mx-auto c-space">
                   <Link to="/">
                       <p className="text-5xl font-thin text-white hover:text-red-200 transition-colors">
                       M U S E
                       </p>
                   </Link>
                   <button onClick={toggleMenu}
                   className="text-white hover:text-red-200 focus:outline-none sm:hidden flex"
                   aria-label="Toggle menu">
                       <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                       alt="toggle"
                       className="w-8 h-8"/>
                   </button>
                   <nav className="sm:flex hidden">
                       <NavItems />
                   </nav>
               </div>
                <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                    <nav className="p-5">
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;