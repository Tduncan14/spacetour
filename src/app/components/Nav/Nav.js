import React from 'react'
import Image from 'next/image'
import './Nav.css'
import Link from 'next/link'
import { Bellefair, Barlow_Condensed } from 'next/font/google';

// Configure the fonts
const bellefair = Bellefair({
  subsets: ['latin'], // Specify the subset (default is 'latin')
  weight: '400', // Bellefair only supports Regular (400)
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'], // Specify the subset
  weight: ['400', '700'], // Specify the font weights you need
});

const Nav = () => {
  return (
    <div className="header">




      <div className="leftNav">
        <Image src="./logo.svg" alt="" height={55} width={55} />

      </div>


      <div className="rightNav">

        <div className="line"></div>

        <div className="overlay"></div>


        <Link className={` ${barlowCondensed.className}  link special`} href="/"><span>00</span> HOME</Link>
        <Link className={` ${barlowCondensed.className}  link`} href="/Destination"><span>01</span> DESTINATION</Link>
        <Link className={` ${barlowCondensed.className} link`} href="/Crew"><span>02</span> CREW</Link>
        <Link className={`${barlowCondensed.className} link `} href="/Technology"><span>03</span>TECHNOLOGY </Link>
      </div>

    </div>
  )
}

export default Nav
