const OutlineDimensions = ({ position, size, color }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={size} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const GrassBlock = ({
  position,
  landColor = "#A0522D ",
  size,
  grassColor = "#7CFC00",
}) => {
  return (
    <>
      <mesh position={[position[0], position[1] + 0.55, position[2]]}>
        <boxGeometry args={[size[0], size[1] * 0.1, size[2]]} />
        <meshStandardMaterial color={grassColor} />
      </mesh>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={landColor} />
      </mesh>
    </>
  );
};

const LandBlock = ({ position, landColor = "#A0522D ", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={landColor} />
      </mesh>
    </>
  );
};

const StoneBlock = ({ position, stoneColor = "red", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={stoneColor} />
      </mesh>
    </>
  );
};

const MainIsland = ({ position }) => {
  return (
    <group position={position}>
      {/*First Section */}
      <GrassBlock position={[2.5, -3, -5]} size={[2, 1, 1]} />
      {/*Second Section */}
      <LandBlock position={[2.5, -2, -4]} size={[6, 1, 1]} />
      <GrassBlock position={[-1, -2, -4]} size={[1, 1, 1]} />
      <GrassBlock position={[1, -1, -4]} size={[3, 1, 1]} />
      <LandBlock position={[0, -3, -4]} size={[3, 1, 1]} />
      <StoneBlock position={[3, -1, -4]} size={[1, 1, 1]} />
      <GrassBlock position={[4.5, -1, -4]} size={[2, 1, 1]} />
      {/*Third Section */}
      <GrassBlock position={[-0.5, -1, -3]} size={[2, 1, 1]} />
      <StoneBlock position={[1, -1, -3]} size={[1, 1, 1]} />
      <GrassBlock position={[3.5, -1, -3]} size={[4, 1, 1]} />
    </group>
  );
};

const Outline = () => {
  return (
    <>
      <OutlineDimensions
        color={"0x87CEEB"}
        position={[0, 0, 0]}
        size={[11, 11, 11]}
      />
      <MainIsland position={[0, 0, 0]} />
    </>
  );
};

export default Outline;
