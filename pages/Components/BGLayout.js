import React from "react";
import * as THREE from "three";

const BGLayout = ({ ...props }) => {
  const shape = new THREE.Shape();
  props.sizeX;
  props.sizeY;
  let radius = 0.5;

  let halfX = props.sizeX * 0.5 - radius;
  let halfY = props.sizeY * 0.5 - radius;
  let baseAngle = Math.PI * 0.5;

  shape.absarc(halfX, halfY, radius, baseAngle * 0, baseAngle * 0 + baseAngle);
  shape.absarc(-halfX, halfY, radius, baseAngle * 1, baseAngle * 1 + baseAngle);
  shape.absarc(
    -halfX,
    -halfY,
    radius,
    baseAngle * 2,
    baseAngle * 2 + baseAngle
  );
  shape.absarc(halfX, -halfY, radius, baseAngle * 3, baseAngle * 3 + baseAngle);

  return (
    <mesh {...props} ref={props.overlayRef}>
      <extrudeGeometry
        args={[
          shape,
          {
            bevelEnabled: true,
            depth: 1,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 20,
            curveSegments: 20,
          },
        ]}
        center={true}
        rotateX={Math.PI * -0.5}
      />
      <meshNormalMaterial />
    </mesh>
  );
};

export default BGLayout;
