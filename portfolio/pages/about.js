import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/portrait.png";
import { SiCodewars } from "react-icons/si";
import Main from "./index.js";
import { useState } from "react";

export default function About() {
  const gitHub = "https://github.com/anisha-11";
  const codeWars = "https://www.codewars.com/users/anisha.hirani";
  const linkedIn = "https://www.linkedin.com/in/anisha-hirani-251b67203/";
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
      <title>Anisha Hirani</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className="bg-orange-100 px-0 md:px-20 lg:px-0 dark:bg-gray-700">
      <section className="min-h-screen">
        <navbar className="fixed w-full z-20 top-0 left-0 bottom-50 bg-gray-700 py-10 mb-9 flex justify-between dark:bg-teal-600">
          <h1 className='text-xl text-teal-500 dark:text-orange-200 font-bold font-burtons ml-8 tracking-wider'>Developed by Anisha Hirani</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='ml-8 cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className="bg-teal-600 text-white dark:bg-orange-200 dark:text-black px-4 py-2 rounded-md ml-8 mr-8" href="/Anisha Hirani - CV.pdf" target="_blank">Resume</a>
            </li>
            <li> 
              <a className="bg-teal-600 text-white dark:bg-orange-200 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/about" target>About Me</a>
            </li>
            <li> 
              <a className="bg-teal-600 text-white dark:bg-orange-200 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/" target>Home</a>
            </li>
          </ul>
        </navbar>
         <div className="text-center p-10 py-10">
            <h2 className="h-20 text-5xl py-20 mt-0 text-teal-600 dark:text-orange-200 font-medium">Anisha Hirani</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-black dark:text-white md:text-xl max-w-lg mx-auto">
              Makers Academy graduate that is passionate about working in the tech industry in 
              order to make a positive impact on the future of technology for the society.
            </p>
          </div>
         <div className="text-5xl flex justify-center gap-16 py-3 text-teal-600 dark:text-orange-200 md:text-6xl">
            <a href={gitHub} target="_blank"><AiFillGithub /></a>
            <a href={codeWars} target="_blank"><SiCodewars /></a>
            <a href={linkedIn} target="_blank"><AiFillLinkedin/></a>
          </div>
          <div className="relative w-30 h-20 mx-auto mt-8 justify-center md:w-96 md:h-96">
            <Image className="rounded-xl shadow-lg shadow-gray-700  dark:shadow-orange-200 mx-auto" src={profile}/>
          </div> 
        </section>
      </main>
    </div>
  );
};