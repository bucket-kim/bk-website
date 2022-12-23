import bgVertex from "./shaders/bg/vertex.js";
import bgFragment from "./shaders/bg/fragment";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const BackgroundMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  bgVertex,
  bgFragment
);

extend({ BackgroundMaterial });

const Bg = () => {
  const backgroundMaterial = useRef();

  useFrame((state, delta) => {
    // backgroundMaterial.current.uTime += delta;
  });

  return (
    <>
      <mesh
        position={[0, 0, -30]}
        receiveShadow
        // geometry={new THREE.PlaneGeometry(2, 2, 1, 1)}
      >
        <planeGeometry
          attach={"geometry"}
          args={[window.innerWidth / 10, window.innerHeight / 10]}
        />
        <backgroundMaterial ref={backgroundMaterial} />

        {/* <shadowMaterial opacity={0.2} /> */}
      </mesh>
    </>
  );
};

export default Bg;
