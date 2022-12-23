import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";

import css from "../styles/Home.module.css";

const Scene = () => {
  return (
    <motion.div
      className={css.scene}
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: 1000, opacity: 0 }}
    >
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
      {/* <h2 className="text-9xl">HI</h2> */}
    </motion.div>
  );
};

export default Scene;
