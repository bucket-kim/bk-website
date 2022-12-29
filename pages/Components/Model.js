import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { nodes } = useGLTF("/models/items.glb");
  const colorMap = useTexture("/textures/items_BaseColor.png");
  const MetalnessMap = useTexture("/textures/items_Metalness.png");
  const NormalMap = useTexture("/textures/items_Normal.png");
  const Roughness = useTexture("/textures/items_Roughness.png");

  colorMap.flipY = false;
  MetalnessMap.flipY = false;
  NormalMap.flipY = false;
  Roughness.flipY = false;

  colorMap.encoding = THREE.sRGBEncoding;

  return (
    <>
      <group scale={200}>
        <mesh
          geometry={nodes.items_geo.geometry}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            map={colorMap}
            metalnessMap={MetalnessMap}
            roughnessMap={Roughness}
          />
        </mesh>
        <group position={[0, 0, 0]} scale={1}>
          <mesh
            geometry={nodes.iphone_geo.geometry}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              map={colorMap}
              metalnessMap={MetalnessMap}
              roughnessMap={Roughness}
            />
          </mesh>
          <mesh
            geometry={nodes.iphoneScreen_geo.geometry}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
          >
            <meshStandardMaterial color={"black"} />
          </mesh>
        </group>
        <mesh
          geometry={nodes.polaroid_geo.geometry}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            map={colorMap}
            metalnessMap={MetalnessMap}
            roughnessMap={Roughness}
          />
        </mesh>
        <mesh
          geometry={nodes.macbook_geo.geometry}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            map={colorMap}
            metalnessMap={MetalnessMap}
            roughnessMap={Roughness}
          />
        </mesh>
      </group>
      <mesh
        receiveShadow
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[2000, 2000]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
    </>
  );
};

export default Model;
