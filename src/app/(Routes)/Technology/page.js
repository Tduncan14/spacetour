
'use client'

import { useState, useEffect } from 'react';
import './technology.css';
import { Bellefair, Barlow_Condensed } from "next/font/google";
import Nav from '../../components/Nav/Nav';


const bellefair = Bellefair({
    subsets: ['latin'], // Specify the subset (default is 'latin')
    weight: '400', // Bellefair only supports Regular (400)
});

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'], // Specify the subset
    weight: ['400', '700'], // Specify the font weights you need
});



const technology = [
    {
        id: 0,
        name: "Launch vehicle",
        images: {
            portrait: "./image-launch-vehicle-portrait.jpg",
            landscape: "./image-launch-vehicle-landscape.jpg"
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },

    {
        id: 1,
        name: "Spaceport",
        images: {
            portrait: "./image-spaceport-portrait.jpg",
            landscape: "./image-spaceport-landscape.jpg"
        },
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        id: 2,
        name: "Space capsule",
        images: {
            portrait: "./image-space-capsule-portrait.jpg",
            landscape: "./image-space-capsule-landscape.jpg"
        },
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]


const Technology = () => {

    const [index, setIndex] = useState(0);




    useEffect(() => {

    }, [index])




    return (
        <div className='technologyBody'>

            <Nav />

            <div className="technologyLeft">

                <h1><span>03</span>SPACE LAUNCH 101</h1>


                <div className="technologyContent">

                    <div className="buttonTech">

                        <button> 1 </button>

                        <button> 2</button>


                        <button> 3</button>
                    </div>


                    <div className="contentTech">

                        <h2 class="textTech">THE TERMINOLOGY...</h2>



                        <p>


                        </p>

                    </div>



                </div>
            </div>


            <div className="technologyRight">

            </div>




        </div>
    )
}

export default Technology
