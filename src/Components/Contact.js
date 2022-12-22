const Contact = ({ ...props }) => {
  return (
    <>
      <mesh
        ref={props.reference}
        scale={0.5}
        position={[0, -props.distance * 3.1, 0]}
      >
        <tubeGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Contact;
