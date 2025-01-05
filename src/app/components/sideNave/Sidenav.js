'use client';
import { useState } from 'react';
import './sidenav.css';

const Sidenav = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <div className="responsiveNav">

                <div class="sideLeftNav">
                    {/* Access the image directly with a relative path */}
                    <img src="/logo.svg" alt="logo" />



                </div>


                <div className="sideRightNav">
                    {/* Add a click handler for the hamburger menu */}
                    <button className="burgerStack">
                        <img classname="hamburger"
                            src="/icon-hamburger.svg"
                            alt="hamburger"
                            onClick={() => setShowNav(!showNav)}
                        />
                    </button>
                </div>
            </div>

            {showNav && (
                <div className="contentSid">
                    {/* Add a close button */}
                    <img
                        src="/icon-close.svg"
                        alt="close"
                        onClick={() => setShowNav(false)}
                    />
                    <p>Menu Content Goes Here</p>
                </div>
            )}
        </>
    );
};

export default Sidenav;
