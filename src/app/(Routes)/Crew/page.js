"use client"


import { useEffect, useState } from "react";
import './crew.css';
import Image from "next/image";
import { Bellefair, Barlow_Condensed } from 'next/font/google';
import Nav from '../../components/Nav/Nav';



const bellefair = Bellefair({
    subsets: ['latin'], // Specify the subset (default is 'latin')
    weight: '400', // Bellefair only supports Regular (400)
});

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'], // Specify the subset
    weight: ['400', '700'], // Specify the font weights you need
});

const crew = [
    {
        name: "Douglas Hurley",
        id: 0,
        images: {
            png: "/image-douglas-hurley.png",
            webp: "/image-douglas-hurley.webp"
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "Mark Shuttleworth",
        id: 1,
        images: {
            png: "/image-mark-shuttleworth.png",
            webp: "/image-mark-shuttleworth.webp"
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        id: 2,
        images: {
            png: "/image-victor-glover.png",
            webp: "/image-victor-glover.webp"
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "Anousheh Ansari",
        id: 3,
        images: {
            png: "/image-anousheh-ansari.png",
            webp: "/image-anousheh-ansari.webp"
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];
const Crew = () => {
    const [index, setIndex] = useState(0);

    // Filter function to update the index based on the button click
    const filterMembers = (id) => {
        const memberIndex = crew.findIndex(member => member.id === id);
        if (memberIndex !== -1) {
            setIndex(memberIndex);
        }
    };


    useEffect(() => {

    }, [index])


    // const nextMember = () => {
    //     setIndex((prevIndex) => (prevIndex + 1) % crew.length);
    // };

    // const prevMember = () => {
    //     setIndex((prevIndex) => (prevIndex - 1 + crew.length) % crew.length);
    // };




    return (
        <>
            <Nav />

            {/* Content */}
            <div className="content flex flex-col">
                <div className="crew">
                    <div className="headerMe flex">
                        <h1 className={`${barlowCondensed.className} hugeMeet`}>
                            <span>02</span> MEET YOUR CREW
                        </h1>
                    </div>

                    {/* Crew Profile Section */}
                    <div className="flex crewProfile">
                        <div className="crewBioPro">
                            <h2 className={`${barlowCondensed.className} crewRole`}>{crew[index].role}</h2>
                            <h1 className={`${bellefair.className} crewName`}>{crew[index].name}</h1>
                            <p className={`${barlowCondensed.className} crewBio`}>{crew[index].bio}</p>

                            {/* Navigation Buttons */}
                            <div className="crewNavigation">
                                {crew.map((member) => (
                                    <button
                                        key={member.id}
                                        className={`${index === crew.findIndex(item => item.id === member.id) ? 'button active' : 'button '}`}
                                        onClick={() => filterMembers(member.id)}
                                    >

                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="crewPic">
                            <Image
                                className="imageMe"
                                src={crew[index].images.png}
                                alt={crew[index].name}
                                height={1500}
                                width={1500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Crew;
