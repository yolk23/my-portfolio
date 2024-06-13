import { Canvas } from "@react-three/fiber";
import Outline from "./Assets/Outline";
import { OrbitControls } from "@react-three/drei";
import Lighting from "./Assets/Lighting";

const MainCanvas = () => {
  return (
    <Canvas className="bg-black">
      <Lighting />
      <OrbitControls />
      <Outline />
    </Canvas>
  );
};

export default MainCanvas;
