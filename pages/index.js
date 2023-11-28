import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Host from "../components/Host.js";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfoModal from "../components/MoreInfoModal";
import MoreInfo from "../components/MoreInfoModal";
import Navbar from "../components/Navbar";
import Essential from "../components/Essential.js";
import Toppodcast from "../components/Toppodcast.js";
import Values from "../components/Values";


export default function Home() {



  useEffect(() => {
    
    if (typeof window !== 'undefined') {
        require('../styles/script.js')
        require('../styles/bootstrap.bundle.min.js')
    }

  }, [])

  return (
    <div>
      <Head>
        <title>Ed -Circle Education Website</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      




    <Hero/>
    <Values/>
    <Toppodcast/>
    <Essential/>
   <MoreInfoModal/>
   <Host/>
   <Footer/>
    </div>
  );
}