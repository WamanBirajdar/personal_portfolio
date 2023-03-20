import React from "react";
import { FiMenu } from 'react-icons/fi';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub,FaLinkedin,FaMedium} from "react-icons/fa";
import { FaPython} from "react-icons/fa";
import { SiAmazonaws,SiApachehadoop } from "react-icons/si";
import { DiSpark } from "react-icons/di";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Big Data Developer.","Data Engineer", "ML Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Waman Birajdar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Hello, I'm Wmaan Birajdar, a self taught passionate Big data Developer.
          You can check out my Tech blog on Medium and Linkdin platforms.
          Also i love to exploring new Technologies.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a target="_blank" href="https://github.com/WamanBirajdar">
                <FaGithub/>
              </a>
                       
            </span>
            <span className="bannerIcon">
              <a target="_blank" href="https://www.linkedin.com/in/waman-b-birajdar">
                <FaLinkedin />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://medium.com/@wamanbirajdar">
                <FaMedium />
              </a>
            </span>
           
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiApachehadoop />
            </span>
            <span className="bannerIcon">
              <SiAmazonaws />
            </span>
            <span className="bannerIcon">
              <DiSpark />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
