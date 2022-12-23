import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Overlay = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 h-full">
      <div className="flex flex-col items-center place-content-center h-full">
        <h1 className="text-9xl text-white font-bold">Brian Kim</h1>
        <h2 className="text-4xl text-white opacity-50">Website</h2>
        <motion.a
          href="#"
          className="text-3xl pt-6 text-white hover:text-yellow-500 
          duration-150
          "
          whileHover={{ scale: 1.4 }}
        >
          enter
        </motion.a>
        <a href="https://github.com/bucket-kim">
          <FaGithub className="absolute bottom-6 left-6 text-3xl opacity-50" />
        </a>
        <a href="https://www.linkedin.com/in/brianbucketkim/">
          <FaLinkedin className="absolute bottom-6 left-16 text-3xl opacity-50" />
        </a>
      </div>
    </div>
  );
};

export default Overlay;
