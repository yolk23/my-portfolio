export const GrayBlock = ({ position, blockColor = "#808080 ", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
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

export const BlackBlock = ({ position, blockColor = "black", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const LightBlock = ({ position, blockColor = "green", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackStoneSlab = ({ position, blockColor = "#7F00FF", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const BlackStoneBlock = ({ position, blockColor = "#7F00FF", size }) => {
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
  blockColor = "#7F00FF",
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

export const NetherBlock = ({ position, blockColor = "red", size }) => {
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

export const AccaciaGlass = ({ position, blockColor = "orange", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const WhiteStainedGlass = ({ position, blockColor = "white", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} />
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
        <meshBasicMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const NetherStair = ({
  position,
  blockColor = "red",
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

export const NetherSlab = ({ position, blockColor = "red", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const QuartzSlab = ({ position, blockColor = "green", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

export const SeaLanternBlock = ({ position, blockColor = "#20B2AA", size }) => {
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

export const WarpedBlock = ({ position, blockColor = "#0D98BA", size }) => {
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
  blockColor = "#0D98BA",
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
  blockColor = "#0D98BA",
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
  blockColor = "black",
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
  blockColor = "brown",
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
          <meshStandardMaterial color={blockColor} />
        </mesh>
      </group>
    </>
  );
};

export const AccaciaTrapdoor = ({
  position,
  blockColor = "orange",
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
