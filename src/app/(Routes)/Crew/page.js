"use client"

import { useState, useEffect } from "react";
import './crew.css';
import Image from "next/image";
import Nav from '../../components/Nav/Nav';

const crew = [
    {
        name: "Douglas Hurley",
        id: 1,
        images: {
            png: "/image-douglas-hurley.png",
            webp: "/image-douglas-hurley.webp"
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "Mark Shuttleworth",
        id: 2,
        images: {
            png: "/image-mark-shuttleworth.png",
            webp: "/image-mark-shuttleworth.webp"
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        id: 3,
        images: {
            png: "/image-victor-glover.png",
            webp: "/image-victor-glover.webp"
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "Anousheh Ansari",
        id: 4,
        images: {
            png: "/image-anousheh-ansari.png",
            webp: "/image-anousheh-ansari.webp"
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

const Crew = () => {

    const [index, setIndex] = useState(1);





    useEffect(() => {

    }, [index]);
    return (
        <>
            <Nav />
            <div className="crew">

                <div className="headerMe flex">
                    <h1> <span> 02 </span> MEET YOUR CREW</h1>
                </div>

                {/* this is the content */}

                <div className="content">

                    {crew && crew.map((member, index) => (
                        <div key={member.id} className="">

                            <div className="CrewBio">
                                <h2 className="crewRole">{member.role}</h2>
                                <h1 className="crewName">{member.name}</h1>

                                <p>{member.bio}</p>
                            </div>


                            <div className="CrewPic">

                                <Image src={`${member.images.png}`} alt="" height={100} width={100} />


                            </div>


                        </div>
                    ))}



                </div>

            </div>
        </>
    )
}

export default Crew
