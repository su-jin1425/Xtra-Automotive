"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/img3.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://botstacks.sfo3.cdn.digitaloceanspaces.com/webassistant.js";
        script.async = true;
        script.onload = () => {
            // Ensure `window.initBotStackAssistant` is available before calling it
            if (window.initBotStackAssistant) {
                window.initBotStackAssistant({
                    apiKey: "h7p9z00ukli0y6czc4s555qm",
                    botId: "fb0e91ae-97c9-44e1-ab14-eb326dcd2d7c"
                });
            } else {
                console.error("BotStack initialization function not found");
            }
        };
        script.onerror = () => {
            console.error("Failed to load BotStack script");
        };
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#69d028]">
            <div className="max-w-screen flex flex-wrap items-center justify-between p-2">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <Link href="https://forms.office.com/r/DeUQ3nM5TG" className="text-black hover:bg-[#E48EDB] bg-white hover:text-white px-3 py-2 rounded-full text-1.5xl font-medium">Register</Link>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-cta"
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:w-auto md:order-1 bg-[#69d028] ${isOpen ? "block" : "hidden"}`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-[#69d028] text-1.5xl text-xl">
                        <li>
                            <Link href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="#about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-100 dark:text-white dark:hover:bg-gray-700">What we do</Link>
                        </li>
                        <li>
                            <Link href="#features" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-100 dark:text-white dark:hover:bg-gray-700">Services</Link>
                        </li>
                        <li>
                            <Link href="#team" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-100 dark:text-white dark:hover:bg-gray-700">Team</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-100 dark:text-white dark:hover:bg-gray-700">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
