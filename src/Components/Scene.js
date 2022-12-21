import { Scroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Portfolio from "./Portfolio";

const Scene = () => {
  const objectDistance = 8;

  const boxGeometry = useRef();
  const coneGeometry = useRef();
  const sphereGeometry = useRef();

  useFrame((state, delta) => {
    boxGeometry.current.rotation.x += delta;
    boxGeometry.current.rotation.y += delta;

    coneGeometry.current.rotation.x += delta;
    coneGeometry.current.rotation.y += delta;

    sphereGeometry.current.rotation.x += delta;
    sphereGeometry.current.rotation.y += delta;
  });

  return (
    <>
      <Scroll>
        <Portfolio reference={boxGeometry} distance={objectDistance} />

        <mesh
          ref={coneGeometry}
          scale={1}
          position={[0, -objectDistance * 1, 0]}
        >
          <coneGeometry />
          <meshNormalMaterial />
        </mesh>
        <mesh
          ref={sphereGeometry}
          scale={0.5}
          position={[0, -objectDistance * 2, 0]}
        >
          <sphereGeometry />
          <meshNormalMaterial />
        </mesh>
      </Scroll>
    </>
  );
};

export default Scene;
