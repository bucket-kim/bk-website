const About = ({ ...props }) => {
  return (
    <>
      <mesh
        ref={props.reference}
        scale={0.5}
        position={[0, -props.distance * 2.1, 0]}
      >
        <ringGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default About;
