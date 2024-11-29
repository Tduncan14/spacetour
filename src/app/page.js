import Image from "next/image";
import './home.css'
import Nav from "./components/Nav/Nav";
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

export default function Home() {
  return (
    <div className="home">
      <Nav />


      <div className="content">

        <div class="leftHome">


          <div className="wrapperLeft">

            <h5 className={`wrapperfive ${bellefair.className}`}>SO, YOU WANT TO TRAVEL TO</h5>


            <h1 className={`spaceR ${barlowCondensed.className}`}> SPACE</h1>

            <div className="para">
              <p>Let's face; if you want to go to space, you might as well</p>
              <p>genuinely go outer space and not hover kind of on the</p>
              <p>edge of it. Well sit back, and relax because we'll give you a</p>
              <p>truly out of this world experience!</p>
            </div>

          </div>

        </div>



        <div class="rightHome">

          <div className="rightWrapper">
            <button className="rightButton"> <span className={`${bellefair.className} explore`} > Explore</span></button>

          </div>

        </div>


      </div>



    </div>
  );
}
