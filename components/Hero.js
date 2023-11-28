import React from "react";
import Navbar from "./Navbar";
import { FiCloud } from "react-icons/fi";
import { FaPodcast } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";

const Hero = () => {
  return (

        <section className="home" id="home">
  <Navbar />
<div className="content">
    <h3>New episodes <br/> avaiiable now</h3>
    <h4 style={{fontSize:"25px"}}>Available on Apple SoundCloud and Spotify</h4>
    <a href="#" className="btn"><FaPodcast style={{ fontSize:"35px", float:"left", marginTop:"5%"}}/><p style={{color: "gray"}}>Listen on <br/> <i style={{fontSize: "20px", color: "white"}}> Apple Podcast</i></p></a>
    <a href="#" className="btn"><BsSoundwave style={{ fontSize:"35px", float:"left", marginTop:"5%"}}/><p style={{color: "gray"}}>Listen on <br/> <i style={{fontSize: "20px", color: "white"}}> SoundWave</i></p></a>
</div>

</section>
  );
};

export default Hero;
