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
        <ScrollControls damping={6} pages={3}>
          <Scene />
          <Scroll html style={{ width: "100%" }}>
            {/* <Overlay /> */}
            <div className="flex justify-evenly items-center">
              <section>Portfolio</section>
              <section>Skills</section>
              <section>About</section>
              <section>Contact</section>
            </div>
            <div>
              <div className="h-screen flex items-center relative px-10 ">
                <h1 className="text-3xl">Portfolio</h1>
              </div>
              <div className="h-screen flex items-center relative px-10">
                <h1 className="text-3xl">Skills</h1>
              </div>
              <div className="h-screen flex items-center relative px-10">
                <h1 className="text-3xl">About</h1>
              </div>
              <div className="h-screen flex items-center relative px-10">
                <h1 className="text-3xl">Contact</h1>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
