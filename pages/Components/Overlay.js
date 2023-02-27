import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import BGLayout from "./BGLayout";

const Overlay = () => {
  const uiRefMiddle = useRef();
  const uiRef1 = useRef();
  const uiRef2 = useRef();
  const uiRef3 = useRef();
  const uiRef4 = useRef();
  const viewport = useThree((state) => state.size);

  useFrame((state) => {});

  return (
    <group scale={[viewport.width / 1800, viewport.height / 1000, 1]}>
      <BGLayout position={[0, 0, 0]} sizeX={9} sizeY={9} />
      <BGLayout position={[-8.5, 3.5, 0]} sizeX={6} sizeY={6} />
      <BGLayout position={[-8.5, -3.5, 0]} sizeX={6} sizeY={6} />
      <BGLayout position={[8.5, 3.5, 0]} sizeX={6} sizeY={6} />
      <BGLayout position={[8.5, -3.5, 0]} sizeX={6} sizeY={6} />
      <BGLayout position={[0, 5.75, 0]} sizeX={9} sizeY={1.5} />
    </group>
  );
};

export default Overlay;
