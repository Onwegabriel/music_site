import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">

<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
   
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Best places to find <br/>design inspiration
          </p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-dark-500">Episode 1 <br/><span className="text-gray-500">Category .0:13</span></p> 
         
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-1xl">
            There is no way I could have made the same <br /> progress learning Spanish
            without using Lingua. <br /> The best part is now learning Spanish has <br />
            become one of my biggest hobbies.
            There is no way I could have made the same <br /> progress learning Spanish
            without using Lingua. <br /> The best part is now learning Spanish has <br />
            become one of my biggest hobbies.
          </p>     
        </div>
        <img src="/assets/img (1).jpg" alt="" 
          style={{
            width:'400px',
            height:'450px',
            borderRadius:'30px',
            backgroundImage: "url('/assets/img (7).jpg')",
            backgroundSize: 'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition: 'right',
            
          }}
         className="reveal"/>
        
      </div>
    </div>
  );
};

export default Values;
