import { Canvas } from "@react-three/fiber";
import "./App.css";
import Overlay from "./Components/Overlay";
import Scene from "./Components/Scene";

function App() {
  return (
    <>
      <Overlay />
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
