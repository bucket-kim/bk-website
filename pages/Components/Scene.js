import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { motion } from "framer-motion";

import css from "../../styles/Home.module.css";
import Model from "../Components/Model";

const Scene = () => {
  return (
    <motion.div
      className={css.scene}
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // exit={{ y: 1000, opacity: 0 }}
    >
      <Canvas
        camera={{ position: [0, 350, 0], fov: 35, near: 1, far: 10000 }}
        shadows={true}
      >
        <color attach="background" args={["#eaeaea"]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        {/* light setup */}
        {/* <hemisphereLight
          intensity={0.75}
          color={"#eaeaea"}
          position={[0, 1, 0]}
        /> */}
        <Environment preset="apartment" />
        <pointLight
          intensity={4}
          decay={20}
          distance={8222}
          color={"#ffefd3"}
          position={[170, 58, -100]}
        />
        <directionalLight
          castShadow
          intensity={0.75}
          shadow-mapSize={[15000, 15000]}
          shadow-camera-near={1}
          shadow-camera-far={2500}
          shadow-camera-left={-2500}
          shadow-camera-right={2500}
          shadow-camera-top={2500}
          shadow-camera-bottom={-2500}
          color="#eaf5ff"
          position={[-80, 150, -80]}
        />
        {/* model setup
         */}
        <Model />
      </Canvas>
    </motion.div>
  );
};

export default Scene;
