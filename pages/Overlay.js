import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Overlay = () => {
  const [show, setShow] = useState(true);

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gradient-to-b from-cyan-500 to-blue-500 h-screen">
        <div className="flex flex-col items-center place-content-center h-full">
          <h1 className="text-9xl text-white font-bold">Brian Kim</h1>
          <h2 className="text-4xl text-white opacity-50">Website</h2>
          <Link href="./Scene">
            <motion.div
              className="text-3xl pt-6 text-white cursor-pointer
            "
              whileHover={{ scale: 1.4, color: "#ffc700" }}
            >
              enter
            </motion.div>
          </Link>
          <a href="https://github.com/bucket-kim">
            <FaGithub className="absolute bottom-6 left-6 text-3xl opacity-50" />
          </a>
          <a href="https://www.linkedin.com/in/brianbucketkim/">
            <FaLinkedin className="absolute bottom-6 left-16 text-3xl opacity-50" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Overlay;
