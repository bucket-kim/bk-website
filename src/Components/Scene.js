import { Scroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import About from "./About";
import Bg from "./Bg";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Scene = () => {
  const objectDistance = 8;

  const boxGeometry = useRef();
  const coneGeometry = useRef();
  const sphereGeometry = useRef();
  const tubeGeometry = useRef();

  useFrame((state, delta) => {
    coneGeometry.current.rotation.x += delta;
    coneGeometry.current.rotation.y += delta;

    sphereGeometry.current.rotation.x += delta;
    sphereGeometry.current.rotation.y += delta;

    tubeGeometry.current.rotation.x += delta;
    tubeGeometry.current.rotation.y += delta;
  });

  return (
    <>
      <Portfolio reference={boxGeometry} distance={objectDistance} />

      <Skills reference={coneGeometry} distance={objectDistance} />
      <About reference={sphereGeometry} distance={objectDistance} />
      <Contact reference={tubeGeometry} distance={objectDistance} />
      <Bg />
    </>
  );
};

export default Scene;
