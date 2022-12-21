import { Canvas } from "@react-three/fiber";
import React from "react";

const Bg = () => {
  return (
    <>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Bg;
