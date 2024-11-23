import React from 'react'
import Image from 'next/image'
import './Nav.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="header">
      <div className="leftNav">
        <Image src="./logo.svg" alt="" height={40} width={40} />

      </div>


      <div className="rightNav">
        <Link className="link" href="/"><span>00</span> HOME</Link>
        <Link className="link" href="/destination"><span>01</span> DESTINATION</Link>
        <Link className="link" href="/crew"><span>02</span> CREW</Link>
        <Link className="link" href=""><span>03</span>TECHNOLOGY </Link>
      </div>

    </div>
  )
}

export default Nav
