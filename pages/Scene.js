import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";
import Overlay from "./Components/Overlay";

import css from "../styles/Home.module.css";

const Scene = () => {
  return (
    <motion.div className={css.scene}>
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 75,
        }}
      >
        <OrbitControls enabled={false} />
        <Overlay />
      </Canvas>
    </motion.div>
  );
};

export default Scene;
