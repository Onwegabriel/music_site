import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsHeadset } from "react-icons/bs";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styles from '../styles/styles.css';
import '../styles/swiper-bundle.min.js';
import '../styles/script.js';


const Toppodcast = () => {
  return (



<section class="artist" id="artist">

<h1 class="heading">Top Podcast</h1>

<div class="box-container">

    <div class="box reveal">
        <div class="image">
            <img src="images/artist-1.jpg" alt=""/>
            <div class="share">
                <a href="#"><BsHeadset/></a>
            </div>
        </div>
        <div class="content">
            <h5>Episode 8 * Technology</h5>
            <h3>SRKP select: keep your <br/> watch</h3>
            <div class="line"></div><br/>
            <h5 style={{color:"black"}}>Episode page </h5>
        </div>
    </div>

    <div class="box reveal">
        <div class="image">
            <img src="images/artist-2.jpg" alt=""/>
            <div class="share">
            <a href="#"><BsHeadset/></a>
            </div>
        </div>
        <div class="content">
            <h5>Episode 8 * Technology</h5>
            <h3>SRKP select: keep your <br/> watch</h3>
            <div class="line"></div><br/>
            <h5 style={{color:"black"}}>Episode page </h5>
        </div>
    </div>

    <div class="box reveal">
        <div class="image">
            <img src="images/artist-3.jpg" alt=""/>
            <div class="share">
            <a href="#"><BsHeadset/></a>
            </div>
        </div>
        <div class="content">
            <h5>Episode 8 * Technology</h5>
            <h3>SRKP select: keep your <br/> watch</h3>
            <div class="line"></div><br/>
            <h5 style={{color:"black"}}>Episode page </h5>
        </div>
    </div>
 
   

</div>

</section>


















   
  
  );
};

export default Toppodcast;
