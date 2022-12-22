import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const Portfolio = ({ ...props }) => {
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
        position={[0, 1, 0]}
      />
      <pointLight
        intensity={4}
        castShadow
        decay={20}
        distance={4000}
        color={"#f7cca7"}
        position={[-2.5, 3, 2]}
      />
      <directionalLight
        castShadow
        intensity={0.75}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-near={1}
        shadow-camera-far={2500}
        shadow-camera-left={-1200}
        shadow-camera-right={1200}
        shadow-camera-top={1200}
        shadow-camera-bottom={-1200}
        color="#fee5dd"
        position={[-10, 20, 30]}
      />
      {/* <rectAreaLight
        rotation={[0, -Math.PI / 2, 0]}
        position={[-4, 0, 0]}
        intensity={2}
      /> */}
      <group position={[0, 2, 0]} scale={1.5} rotation={[0, 0, 0]}>
        <mesh
          ref={props.reference}
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
          // ref={props.reference}
          position={[0, -props.distance * 0.15, 0]}
          geometry={nodes.screen_geo.geometry}
          receiveShadow
          castShadow
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial
            side={THREE.DoubleSide}
            // color="#80a3ca"
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
