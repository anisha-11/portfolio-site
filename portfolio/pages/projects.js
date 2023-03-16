import Head from 'next/head';
import Image from "next/image";
import reelplaces from "../public/reelplaces-ss.png";
import acebook from "../public/acebook-new.png";
import bnb from "../public/makersbnb.png";
import { useState } from "react";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}></div>
  );
};