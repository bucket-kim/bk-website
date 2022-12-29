import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { nodes } = useGLTF("/models/items.glb");
  const colorMap = useTexture("/textures/items_BaseColor.png");
  const MetalnessMap = useTexture("/textures/items_Metalness.png");
  const NormalMap = useTexture("/textures/items_Normal.png");
  const Roughness = useTexture("/textures/items_Roughness.png");

  const tableNormal = useTexture("/textures/table/beige_Normal.jpg");
  const tableDiffuse = useTexture("/textures/table/beige_Diffuse.jpg");
  const tableAO = useTexture("/textures/table/beige_AO.jpg");
  const tableRoughness = useTexture("/textures/table/beige_Roughness.jpg");

  tableAO.encoding = THREE.sRGBEncoding;

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
          position={[0, 0, -0.425]}
        >
          <meshStandardMaterial
            map={colorMap}
            metalnessMap={MetalnessMap}
            roughnessMap={Roughness}
          />
        </mesh>
        <group position={[0, 0, 0]}>
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
          position={[-0.6, 0.001, 0.1]}
        >
          <meshStandardMaterial
            map={colorMap}
            metalnessMap={MetalnessMap}
            roughnessMap={Roughness}
            side={THREE.DoubleSide}
          />
        </mesh>
        <group position={[0.75, 0, -0.1]}>
          <mesh geometry={nodes.macbook_geo.geometry} castShadow receiveShadow>
            <meshStandardMaterial
              map={colorMap}
              metalnessMap={MetalnessMap}
              roughnessMap={Roughness}
            />
          </mesh>
          <mesh geometry={nodes.screen_geo.geometry} castShadow receiveShadow>
            <meshStandardMaterial color={"#000000"} />
          </mesh>
        </group>
      </group>
      <mesh
        receiveShadow
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </>
  );
};

export default Model;
