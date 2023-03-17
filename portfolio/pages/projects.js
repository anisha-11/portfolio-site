import Head from 'next/head';
import Image from "next/image";
import reelplaces from "../public/reelplaces-ss.png";
import acebook from "../public/acebook-new.png";
import bnb from "../public/makersbnb.png";
import {BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from "react";

export default function Projects() {
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
              <li> 
                <a className="bg-teal-600 text-white dark:bg-orange-200 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/" target>Projects</a>
              </li>
            </ul>
        </navbar>
        <section className="flex flex-wrap:wrap justify-center align-center text-center flex-wrap:wrap items-stretch">
          <div className="h-20 text-5xl py-20 mt-20 text-teal-600 dark:text-orange-200 font-bold">
          <h1>PROJECTS</h1>
          </div>
        </section>
        <section className="flex flex-wrap:wrap justify-center align-center text-center flex-wrap:wrap items-stretch">
            <div className='grid grid-cols-3 justify-center items-center ml-auto mr-auto max-w-l"'>
              <div className="text-center shadow-lg dark:bg-teal-600 bg-gray-700 shadow-gray-700 dark:shadow-teal-600 p-1.5 rounded-xl my-8 mr-12 ml-12 mx-auto justify-center">
                <Image className="border-solid border-2 dark:border-black rounded-xl" src={reelplaces} width={650} height={200}/>
                <h3 className="text-4xl text-teal-500 dark:text-orange-200 font-extrabold pt-8 pb-2">REELPLACES</h3>
                <p className="text-md py-5 leading-5 text-white dark:text-white md:text-xl max-w-xl mx-auto">
                  Makers final project! A web-application that allows you to search for a location 
                  you are currently 
                  at and pinpoints the top 20 movies filming locations on a map.
               </p>
              </div>
              <div className="text-center bg-gray-700 dark:bg-teal-600 shadow-lg shadow-gray-700 dark:shadow-teal-600 p-1.5 rounded-xl my-8 mr-12 ml-12 mx-auto justify-center">
                <Image className="border-solid border-2 dark:border-black rounded-xl" src={acebook} width={650} height={200} />
                <h3 className="text-4xl text-teal-500 dark:text-orange-200 font-extrabold pt-8 pb-2">ACEBOOK</h3>
                <p className="text-md py-5 leading-8 text-white dark:text-white md:text-xl max-w-xl mx-auto">A clone of Facebook using the MERN Stack and allowing users to comment, upload pictures and have fun on this social media platform.</p>
              </div>
              <div className="text-center display-flex dark:bg-teal-600 shadow-lg bg-gray-700 shadow-gray-700 dark:shadow-teal-600 p-1.5 rounded-xl my-8 mr-12 ml-12 mx-auto justify-center">
                <Image className="border-solid border-2 dark:border-black rounded-xl" src={bnb} width={650} height={200} />
                <h3 className="text-4xl  text-teal-500 dark:text-orange-200 font-extrabold pt-8 pb-2">MAKERS-BNB</h3>
                <p className="text-md py-5 leading-8 text-white dark:text-white md:text-xl max-w-xl mx-auto">First group 
                project with Makers which was similar to AirBnB using 
                Ruby, Sinatra, databases with SQL queries. Allows you to book spaces and rent 
                out a space.
                </p>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
};