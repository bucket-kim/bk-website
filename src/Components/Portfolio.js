import { Html } from "@react-three/drei";
import React from "react";

const Portfolio = ({ ...props }) => {
  // const objectDistance = 4;
  return (
    <>
      <mesh
        ref={props.reference}
        scale={0.5}
        position={[0, -props.distance * 0, 0]}
      >
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Portfolio;
