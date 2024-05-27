import { Canvas } from "@react-three/fiber";
import Outline from "./Assets/Outline";
import { OrbitControls } from "@react-three/drei";

const MainCanvas = () => {
  return (
    <Canvas className="bg-skyblue">
      <ambientLight intensity={Math.PI / 2} />
      <OrbitControls />
      <Outline></Outline>
    </Canvas>
  );
};

export default MainCanvas;
