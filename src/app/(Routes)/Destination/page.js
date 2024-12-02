"use client"
import { useState, useEffect } from 'react'
import './Destination.css'
import { Bellefair, Barlow_Condensed } from 'next/font/google';
import Nav from '../../components/Nav/Nav';
import Image from 'next/image';

// Configure the fonts
const bellefair = Bellefair({
    subsets: ['latin'], // Specify the subset (default is 'latin')
    weight: '400', // Bellefair only supports Regular (400)
});

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'], // Specify the subset
    weight: ['400', '700'], // Specify the font weights you need
});

const destinations = [
    {
        name: "Moon",
        id: 0,
        images: {
            png: "/image-moon.png",
            webp: "./assets/destination/image-moon.webp"
        },
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        name: "Mars",
        id: 1,
        images: {
            png: "/image-mars.png",
            webp: "./assets/destination/image-mars.webp"
        },
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
    },
    {
        name: "Europa",
        id: 2,
        images: {
            png: "/image-europa.png",
            webp: "./assets/destination/image-europa.webp"
        },
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
    },
    {
        name: "Titan",
        id: 3,
        images: {
            png: "./image-titan.png",
            webp: "./assets/destination/image-titan.webp"
        },
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }
]

const Destination = () => {
    const [index, setIndex] = useState(0);

    const filterThePlanets = (id) => {
        const planetIndex = destinations.findIndex(plan => plan.id === id);
        if (planetIndex !== -1) {
            setIndex(planetIndex);
        }
    };

    useEffect(() => {
        // Optional effect for logging or side effects when index changes
        console.log(`Current index: ${index}`);
    }, [index]);

    return (
        <div className="body">
            <Nav />
            <div className="contentPlanet flex">
                <div className="PlanetLeft">
                    <h1> <span> 01 </span> PICK YOUR DESTINATION</h1>


                    <Image src={destinations[index].images.png} alt='planets' width={200} height={200} />
                </div>
                <div className="PlanetBio">
                    <h2>{destinations[index].name}</h2>
                    <p>{destinations[index].description}</p>
                    <p>Distance: {destinations[index].distance}</p>
                    <p>Travel Time: {destinations[index].travel}</p>
                </div>
            </div>
        </div>
    );
};

export default Destination;
