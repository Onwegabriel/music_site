import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const Host = () => {
  return (

    <section class="blog" id="blog">

    <h1 class="heading">Meet our hosts:</h1>

    <div class="box-container">

        <div class="box reveal">
            <div class="image">
                <img src="images/blog-1.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Bella Jimenez</h3>
                <div class="icons">
                    <a href="#"><i class="fas fa-calendar"></i> Creative Strategist</a>
                </div>
                <div className="flex items-center gap-5 reveal">
                <BsFacebook style={{fontSize:"20px", display:"flex"}}/>
                <BsLinkedin style={{fontSize:"20px"}}/>
                <BsTwitter style={{fontSize:"20px"}}/>
                </div>
            </div>
        </div>

        <div class="box reveal">
            <div class="image">
                <img src="img/img (6).jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Edwin Watson</h3>
                <div class="icons">
                    <a href="#"><i class="fas fa-calendar"></i>Creative Strategist</a>
                </div>
               <div className="flex items-center gap-5 reveal">
                <BsFacebook style={{fontSize:"20px", display:"flex"}}/>
                <BsLinkedin style={{fontSize:"20px"}}/>
                <BsTwitter style={{fontSize:"20px"}}/>
                </div>
            </div>
        </div>

        <div class="box reveal">
            <div class="image">
                <img src="images/blog-3.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Caitlin Henderson</h3>
                <div class="icons">
                    <a href="#"><i class="fas fa-calendar"></i>Creative Strategist</a>
                </div>
               <div className="flex items-center gap-5 reveal">
                <BsFacebook style={{fontSize:"20px", display:"flex"}}/>
                <BsLinkedin style={{fontSize:"20px"}}/>
                <BsTwitter style={{fontSize:"20px"}}/>
                </div>
            </div>
        </div>

    </div>

</section>

  )
}

export default Host