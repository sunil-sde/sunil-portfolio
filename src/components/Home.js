// components/Home.js
import Image from 'next/image';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Home = () => {
  return (
    <>
    <section className="bg-gray-100 p-8 pt-20 h-screen">
      
      <div className="container mx-auto text-center">
        
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>

        <p className="text-lg text-gray-700 mb-5">
          I am <b>Sunil</b>, a passionate Software Development Engineer dedicated to creating cutting-edge solutions that elevate user experiences.
        </p>

        <TooltipProvider >
            <Tooltip >
                <TooltipTrigger > 
                <a href="static/resume/Sunil-SDE.pdf" download="Sunil-SDE.pdf" 
                  className="hover:scale-115 hover:filter hover:drop-shadow-lg transition duration-300 text-sm"  ><i>
                  <img
                    src="/static/others/cv_logo.webp"
                    alt="cv_logo"
                    style={{  width: '45px', height: '45px', margin: 'auto', title:'Resume'}}
                  />
                </i> Resume</a>
                </TooltipTrigger>
                <TooltipContent side="right" >
                <div>Resume</div>
                </TooltipContent>
            </Tooltip>
          </TooltipProvider>

         

        <p className="mt-5">
          I invite you to explore my portfolio, get to know my work, and envision how we could collaborate on exciting projects.
          If you share a passion for impactful software development, let&apos;s connect!
        </p>
        
        <p className="mt-4">Feel free to reach out through 
        <span className="flex justify-center items-center space-x-4 pt-4">
          <a
            href="mailto:sunilkumarsk20198@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-500 px-2 hover:scale-105 hover:filter hover:drop-shadow-lg transition duration-300"
          >
            <Image
                src="/static/others/other_comp/gmail.png"
                width={35}
                height={35}
                alt="Gmail Logo"
                style={{ }}
            />
          </a>
          
          <a
            href="https://www.linkedin.com/in/sunil-sde/" //https://www.linkedin.com/in/sunil-10212a156/
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-500 pr-2 hover:scale-105 hover:filter hover:drop-shadow-lg transition duration-300 "
          >
              <Image
                  src="/static/home/linkedin.png"
                  width={35}
                  height={35}
                  alt="LinkedIn Logo"
                  style={{ }}
              />
          </a>
         
        </span>
         </p>
        <p className="mt-8 text-gray-600">Thank you for visiting, and I look forward to the opportunity to connect and collaborate!</p>
      </div>
    </section>
    </>
  );
};

export default Home;
