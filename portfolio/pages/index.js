import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/portrait.png";
import reelplaces from "../public/reelplaces-ss.png";
import acebook from "../public/acebook-new.png";
import bnb from "../public/makersbnb.png";
import { SiCodewars } from "react-icons/si";
// import { useState } from "react";


export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Anisha Hirani</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-orange-100 px-0 md:px-20 lg:px-0">
        <section className="min-h-screen">
          <navbar className="fixed w-full z-20 top-0 left-0 bottom-50 bg-gray-700 py-10 mb-9 flex justify-between">
          <h1 className='text-xl text-teal-500 font-bold font-burtons ml-8 tracking-wider'>Developed by Anisha</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className='ml-8 cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className="bg-teal-600 text-white px-4 py-2 rounded-md ml-8 mr-8" href="#">Resume</a>
            </li>
          </ul>
          </navbar>
          <div className="text-center p-10 py-10">
            <h2 className="h-20 text-5xl py-20 mt-0 text-teal-600 font-medium">Anisha Hirani</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-black md:text-xl max-w-lg mx-auto">
              Makers Academy graduate that is passionate about working in the tech industry in 
              order to make a positive impact on the future of technology for the society.
              I have a combination of the skills to adapt to any work-style as well as be 
              willing to learn and code new projects. 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-teal-600 md:text-6xl">
            <AiFillGithub />
            <SiCodewars />
            <AiFillLinkedin />
          </div>
          <div className="relative w-30 h-20 mx-auto mt-8 justify-center md:w-96 md:h-96">
            <Image className="rounded-xl shadow-lg shadow-gray-700 mx-auto" src={profile}/>
          </div> 
        </section>
        
        <section className="flex justify-center align-center text-center flex-wrap:wrap items-stretch">
          <div className='flex-col justify-center items-center ml-auto mr-auto max-w-l"'>
            <div className="text-center shadow-lg bg-gray-700 shadow-gray-700 p-1.5 rounded-xl my-8 mr-12 ml-12 mt-0 mx-auto justify-center">
              <Image className="rounded-xl" src={reelplaces} width={650} height={200}/>
              <h3 className="text-4xl text-teal-500 font-extrabold pt-8 pb-2">REELPLACES</h3>
              <p className="text-md py-5 leading-5 text-white md:text-xl max-w-xl mx-auto">
                Makers final project! A web-application that allows you to search for a location 
                you are currently 
                at and shows you the top 20 movies filmed in that particular location 
                with a map that pinpoints that location. </p>
            </div>
            <div className="text-center bg-gray-700 shadow-lg shadow-gray-700 p-1.5 rounded-xl my-8 mr-12 ml-12 mx-auto justify-center">
              <Image className="rounded-xl" src={acebook} width={650} height={200} />
              <h3 className="text-4xl text-teal-500 font-extrabold pt-8 pb-2">ACEBOOK</h3>
              <p className="text-md py-5 leading-8 text-white md:text-xl max-w-xl mx-auto">A clone of Facebook using the MERN Stack and allowing users to comment, upload pictures and have fun on this social media platform.</p>
            </div>
            <div className="text-center display-flex shadow-lg bg-gray-700 shadow-gray-700 p-1.5 rounded-xl my-8 mr-12 ml-12 mx-auto justify-center">
              <Image className="rounded-xl" src={bnb} width={650} height={200} />
              <h3 className="text-4xl  text-teal-500 font-extrabold pt-8 pb-2">MAKERS-BNB</h3>
              <p className="text-md py-5 leading-8 text-white md:text-xl max-w-xl mx-auto">First ever group project with Makers which was a clone of AirBnB using Ruby, Sinatra, databases and much more.</p>
            </div>
          </div>
          {/* <div> */}
            {/* <h3 className="text-4xl py-1 text-center">Projects Made</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center">include text about projects.</p> */}
          {/* </div>
          <div>
            <div className="text-center shadow-lg p-12 rounded-xl my-8 mr-12 mx-auto justify-center">
              <Image src={acebook} width={568} height={200}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Acebook</h3>
              <p>created web application....add more later</p>
            </div>
          </div>
          <div> */}
            {/* <h3 className="text-3xl py-1 text-center">Projects Made</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">include text about projects.</p> */}
          {/* </div>
          <div>
            <div className="text-center display-flex shadow-lg p-12 rounded-xl my-8 mr-12 mx-auto justify-center">
              <Image src={bnb} width={650} height={200}/>
              <h3 className="text-lg font-medium pt-8 pb-2">MakersBnB</h3>
              <p>created web application....add more later</p>
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
};
         
        
        
        
        
