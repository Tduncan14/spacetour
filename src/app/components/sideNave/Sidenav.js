'use client';
import { useEffect, useState } from 'react';
import './sidenav.css';
import Link from 'next/link';
import { Bellefair, Barlow_Condensed } from 'next/font/google';

const bellefair = Bellefair({
    subsets: ['latin'],
    weight: '400',
});

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Sidenav = () => {
    const [showNav, setShowNav] = useState(false);
    const [widthScreen, setWidthScreen] = useState(0); // Initialize with 0 for SSR compatibility

    useEffect(() => {
        // Function to update the screen width
        const handleResize = () => {
            setWidthScreen(window.innerWidth);
        };

        // Set initial width on mount
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="responsiveNav">
                <div className="sideLeftNav">
                    {/* Logo */}
                    <img src="/logo.svg" alt="Company Logo" />
                </div>

                <div className="sideRightNav">
                    {/* Hamburger Menu */}
                    <button className="burgerStack" onClick={() => setShowNav(true)}>
                        <img
                            className="hamburger"
                            src="/icon-hamburger.svg"
                            alt="Open navigation menu"
                        />
                    </button>
                </div>
            </div>

            {/* Side Menu */}
            <div className={widthScreen < 800 && showNav ? 'activeContentSide' : 'contentSid'}>
                <div className="overlaySIDE"></div>

                <button className="closeButton" onClick={() => setShowNav(false)}>
                    <img className="closeMe" src="/icon-close.svg" alt="Close navigation menu" />
                </button>

                <div className="navMe">
                    <Link className={`${barlowCondensed.className} link`} href="/">
                        <span>00</span> HOME
                    </Link>
                    <Link className={`${barlowCondensed.className} link`} href="/Destination">
                        <span>01</span> DESTINATION
                    </Link>
                    <Link className={`${barlowCondensed.className} link`} href="/Crew">
                        <span>02</span> CREW
                    </Link>
                    <Link className={`${barlowCondensed.className} link`} href="/Technology">
                        <span>03</span> TECHNOLOGY
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidenav;
