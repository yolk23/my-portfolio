import { useEffect, useRef } from "react";
import * as THREE from "three";
import gifA from "./Images/BillboardA.mp4";
import BillboardB from "./Images/BillboardB.jpg";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Text3D } from "@react-three/drei";
import font from "../../stylings/fonts/Play_Regular.json";
import Wall from "./Images/wall.jpg";

export const GrayBlock = ({ position, blockColor = "#848884", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const Beacon = ({ position, blockColor = "#87CEEB", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial
          color={blockColor}
          emissive={blockColor}
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
};

export const Shroomlight = ({ position, blockColor = "#FFAC1C", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackBlock = ({ position, blockColor = "#71797E", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const LightBlock = ({ position, blockColor = "black", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackStoneSlab = ({ position, blockColor = "black", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackStoneBlock = ({ position, blockColor = "black", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackStoneStair = ({
  position,
  blockColor = "black",
  firstSize = [1, 1, 0.5],
  secondSize = [1, 0.5, 0.5],
  rotation,
}) => {
  return (
    <>
      <group position={position} rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh>
          <boxGeometry args={firstSize} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
        <mesh position={[0, -0.25, -0.5]}>
          <boxGeometry args={secondSize} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const WarpedStair = ({
  position,
  blockColor = "#2E8B57",
  firstSize = [1, 1, 0.5],
  secondSize = [1, 0.5, 0.5],
  rotation,
}) => {
  return (
    <>
      <group position={position} rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh>
          <boxGeometry args={firstSize} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
        <mesh position={[0, -0.25, -0.5]}>
          <boxGeometry args={secondSize} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const NetherBlock = ({ position, blockColor = "#a8b0b2", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const AccaciaBlock = ({ position, blockColor = "orange", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const AccaciaGlass = ({ position, blockColor = "white", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} transparent opacity={0.3} />
      </mesh>
    </>
  );
};

export const WhiteStainedGlass = ({ position, blockColor = "white", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} transparent opacity={0.3} />
      </mesh>
    </>
  );
};

export const WhiteStainedGlassPane = ({
  position,
  blockColor = "white",
  size = [0.125, 1, 1],
}) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} transparent opacity={0.3} />
      </mesh>
    </>
  );
};

export const NetherStair = ({
  position,
  blockColor = "#a8b0b2",
  firstSize = [1, 1, 0.5],
  secondSize = [1, 0.5, 0.5],
  rotation,
}) => {
  return (
    <>
      <group position={position} rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh>
          <boxGeometry args={firstSize} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
        <mesh position={[0, -0.25, -0.5]}>
          <boxGeometry args={secondSize} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const NetherSlab = ({ position, blockColor = "#a8b0b2", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const AndesiteSlab = ({ position, blockColor = "#808080", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const QuartzSlab = ({ position, blockColor = "#FAF9F6", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const SeaLanternBlock = ({ position, blockColor = "white", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const EndRod = ({ position, height, blockColor = "white" }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={[0.125, height, 0.125]} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const WarpedBlock = ({ position, blockColor = "orange", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const WarpedWall = ({
  position,
  blockColor = "#C0C0C0",
  size = [1 / 2, 1, 1 / 2],
}) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const AndesiteWall = ({
  position,
  blockColor = "#808080",
  size = [1 / 2, 1, 1 / 2],
}) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const WarpeFence = ({
  position,
  blockColor = "#C0C0C0",
  size = [1 / 4, 1, 1 / 4],
}) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackstoneWall = ({
  position,
  blockColor = "#301934",
  size = [1, 1, 1 / 2],
}) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const WoodenTrapdoor = ({
  position,
  blockColor = "white",
  size = [0.1875, 1, 1],
  rotation,
}) => {
  return (
    <>
      <group rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={blockColor} emissive={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const HalfGlassPane = ({
  position,
  blockColor,
  size = [0.125, 1, 0.5],
  rotation,
}) => {
  return (
    <>
      <group rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={blockColor} transparent opacity={0.3} />
        </mesh>
      </group>
    </>
  );
};

export const AccaciaTrapdoor = ({
  position,
  blockColor = "#D3D3D3",
  size = [0.1875, 1, 1],
  rotation,
}) => {
  return (
    <>
      <group rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const IronTrapdoor = ({
  position,
  blockColor = "#a19d94",
  size = [0.1875, 1, 1],
  rotation,
}) => {
  return (
    <>
      <group rotation={rotation ? rotation : [0, 0, 0]}>
        <mesh position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const BlastFurnace = ({ position, blockColor = "#818589", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const FloorBlock = ({ position, blockColor, size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BillBoardPlaneA = ({ position, blockColor = "#818589", size }) => {
  const BillboardTexture = useLoader(TextureLoader, BillboardB);
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial map={BillboardTexture} />
      </mesh>
    </>
  );
};

export const BillBoardPlaneB = ({ position, blockColor = "#818589", size }) => {
  const meshRef = useRef();
  const videoRef = useRef(document.createElement("video"));

  useEffect(() => {
    const video = videoRef.current;
    video.src = gifA;
    video.loop = true;
    video.muted = true;
    video.play();

    const playVideoOnInteraction = () => {
      video.play().catch((error) => {
        console.error("Error playing the video:", error);
      });
    };

    document.addEventListener("click", playVideoOnInteraction);

    return () => {
      document.removeEventListener("click", playVideoOnInteraction);
    };
  }, []);

  const videoTexture = new THREE.VideoTexture(videoRef.current);
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial map={videoTexture} />
      </mesh>
    </>
  );
};

export const ThreeDLetter = ({ position, letter, color, size, depth }) => {
  return (
    <Text3D
      position={position}
      size={size}
      font={font}
      height={depth}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.1}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      {letter}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={5}
      />
    </Text3D>
  );
};
