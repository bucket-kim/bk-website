const Skills = ({ ...props }) => {
  return (
    <>
      <mesh
        ref={props.reference}
        scale={0.5}
        position={[0, -props.distance * 1.15, 0]}
      >
        <coneGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Skills;
