'use client';
import { useState } from 'react';
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
    const [showNav, setShowNav] = useState(null);

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
            <div className={showNav ? 'activeContentSide' : 'contentSid'}>
                <button className="closeButton" onClick={() => setShowNav(false)}>
                    <img src="/icon-close.svg" alt="Close navigation menu" />
                </button>

                <Link className={` ${barlowCondensed.className}  link `} href="/"><span>00</span> HOME</Link>
                <Link className={` ${barlowCondensed.className}  link`} href="/Destination"><span>01</span> DESTINATION</Link>
                <Link className={` ${barlowCondensed.className} link`} href="/Crew"><span>02</span> CREW</Link>
                <Link className={`${barlowCondensed.className} link `} href="/Technology"><span>03</span>TECHNOLOGY </Link>
            </div>
        </>
    );
};

export default Sidenav;
