import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from "react";
import { DiCss3Full,DiHtml5, DiJsBadge, DiMongodb, DiReact, DiRuby, DiStreamline, DiTrello, DiVisualstudio } from "react-icons/di";
import { SiCypress, SiJest, SiTailwindcss} from "react-icons/si";
import { TbSql } from "react-icons/tb";

export default function Home() {
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
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='mr-5 cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/" target>Home</a>
              </li>
              <li> 
                <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/about" target>About</a>
              </li>
              <li> 
                <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/projects" target>Projects</a>
              </li>
              <li> 
                <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/Anisha Hirani - CV.pdf" target>CV</a>
              </li>
            </ul>
          </navbar>
          <div className="text-center p-10 py-10">
            <h2 className="h-20 text-5xl py-20 mt-20 text-teal-600 dark:text-orange-200 font-bold">Anisha Hirani</h2>
            <h3 className="text-2xl py-2 mt-4 dark:text-white md:text-3xl">Software developer and designer & ex Maths and English Tutor.</h3>
          </div>
          <div className="flex justify-between ml-18 text-center text-5xl py-3 text-teal-600 dark:text-orange-200 md:text-6xl">
            <div className="flex gap-5 justify-between ml-auto mt-5 mr-auto max-w-l">
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="JavaScript"><DiJsBadge/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="React"><DiReact/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="Ruby"><DiRuby/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="HTML"><DiHtml5/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="CSS"><DiCss3Full/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="Tailwind"><SiTailwindcss/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="SQL"><TbSql/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="Cypress"><SiCypress/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="Jest"><SiJest/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="MongoDB"><DiMongodb/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="Databases"><DiStreamline/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="Trello"><DiTrello/></div>
            <div class="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 dark:before:bg-teal-600 before:px-2 before:py-1.5 before:text-white before:text-sm before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip="VSCode"><DiVisualstudio/></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
         
        
        
        
        
