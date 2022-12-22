import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Bg from "./Components/Bg";
import Overlay from "./Components/Overlay";
import Scene from "./Components/Scene";

function App() {
  return (
    <>
      <Canvas>
        {/* <Bg /> */}
        {/* <OrbitControls /> */}
        <ScrollControls damping={10} pages={4}>
          <Scene />
          <Scroll html style={{ width: "100%", zIndex: "-1" }}>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
