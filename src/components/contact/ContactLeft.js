import React from 'react'
import { FaGithub,FaLinkedin,FaMedium} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Waman Birajdar</h3>
        <p className="text-lg font-normal text-gray-400">
          Big Data Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Someone said Data is New oil of 21th centurey, Connect With Me and Let's Explore Big Data together!!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91-9881045931</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">wamanbirajdar@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft