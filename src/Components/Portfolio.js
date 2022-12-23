import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import gsap from "gsap";
import { useRef, useState } from "react";

const Portfolio = ({ ...props }) => {
  const polaroidRef = useRef();

  const { nodes } = useGLTF("./Models/polaroid.glb");

  const colorMap = useLoader(
    TextureLoader,
    "./Textures/Polaroid/polaroid_BaseColor.png"
  );

  const Metal = useLoader(
    TextureLoader,
    "./Textures/Polaroid/polaroid_Metalness.png"
  );

  const Roughness = useLoader(
    TextureLoader,
    "./Textures/Polaroid/polaroid_Roughness.png"
  );

  const Normal = useLoader(
    TextureLoader,
    "./Textures/Polaroid/polaroid_Normal.png"
  );

  const portfolioPicture = useLoader(
    TextureLoader,
    "./Textures/Projects/disneyplusclone.png"
  );

  colorMap.flipY = false;
  portfolioPicture.flipY = false;
  colorMap.encoding = THREE.sRGBEncoding;
  portfolioPicture.encoding = THREE.sRGBEncoding;
  Metal.flipY = false;
  Roughness.flipY = false;
  Normal.flipY = false;

  return (
    <>
      <hemisphereLight
        color={"#eaeaea"}
        groundColor={"#000000"}
        intensity={0.75}
        position={[0, 0, 0]}
      />
      <pointLight
        intensity={4}
        // castShadow
        decay={20}
        distance={100}
        color={"#f7cca7"}
        position={[-4, -2, 1]}
      />
      <directionalLight
        castShadow
        intensity={1}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        color="#fee5dd"
        position={[0, 1, 10]}
      />
      <group
        position={[0, 2, 0]}
        scale={1.5}
        rotation={[0, 0, 0]}
        ref={polaroidRef}
      >
        <mesh
          position={[0, -props.distance * 0.15, 0]}
          geometry={nodes.polaroid_geo.geometry}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            side={THREE.DoubleSide}
            map={colorMap}
            metalnessMap={Metal}
            roughnessMap={Roughness}
            Normal={Normal}
          />
        </mesh>
        <mesh
          position={[0, -props.distance * 0.15, 0]}
          geometry={nodes.screen_geo.geometry}
          receiveShadow
          castShadow
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial
            side={THREE.DoubleSide}
            map={portfolioPicture}
            roughness={1}
            metalness={0}
          />
        </mesh>
      </group>
    </>
  );
};

export default Portfolio;
