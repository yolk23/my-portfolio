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

const GrayBlock = ({ position, blockColor = "#808080 ", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const BlackBlock = ({ position, blockColor = "black", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const LightBlock = ({ position, blockColor = "green", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const BlackStoneSlab = ({ position, blockColor = "#7F00FF", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const BlackStoneBlock = ({ position, blockColor = "#7F00FF", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const BlackStoneStair = ({
  position,
  blockColor = "#7F00FF",
  firstSize = [1, 1, 0.5],
  secondSize = [1, 0.5, 0.5],
  rotation,
}) => {
  return (
    <>
      <group
        position={position}
        rotation={rotation ? [0, Math.PI, 0] : [0, 0, 0]}
      >
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

const NetherBlock = ({ position, blockColor = "red", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const NetherStair = ({
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

const NetherSlab = ({ position, blockColor = "red", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const InnerBlackStoneRoof = ({ position }) => {
  return (
    <>
      <group position={position}>
        <LightBlock position={[1, 6, -5]} size={[1, 1, 1]} />
        <LightBlock position={[1, 5, -5]} size={[1, 1, 3]} />
        <LightBlock position={[1, 4, -5]} size={[1, 1, 5]} />
        <BlackStoneBlock position={[1, 3, -10.5]} size={[1, 1, 2]} />
        <BlackStoneBlock position={[1, 4, -8.5]} size={[1, 1, 2]} />
        <BlackStoneBlock position={[1, 5, -7]} size={[1, 1, 1]} />
        <BlackStoneBlock position={[1, 6, -6]} size={[1, 1, 1]} />
        <BlackStoneBlock position={[1, 7.5, -5]} size={[1, 2, 1]} />
        <BlackStoneBlock position={[1, 6, -4]} size={[1, 1, 1]} />
        <BlackStoneBlock position={[1, 5, -3]} size={[1, 1, 1]} />
        <BlackStoneBlock position={[1, 4, -1.5]} size={[1, 1, 2]} />
        <BlackStoneBlock position={[1, 3, 0.5]} size={[1, 1, 2]} />
        <BlackStoneSlab position={[1, 3.75, 0]} size={[1, 0.5, 1]} />
        <BlackStoneSlab position={[1, 2.75, 2]} size={[1, 0.5, 1]} />
        <BlackStoneSlab position={[1, 2.75, -12]} size={[1, 0.5, 1]} />
        <BlackStoneSlab position={[1, 3.75, -10]} size={[1, 0.5, 1]} />
        <BlackStoneStair position={[1, 5, -7.75]} />
        <BlackStoneStair position={[1, 6, -6.75]} />
        <BlackStoneStair position={[1, 7, -5.75]} />
        <BlackStoneStair position={[1, 7, -4.25]} rotation={true} />
        <BlackStoneStair position={[1, 6, -3.25]} rotation={true} />
        <BlackStoneStair position={[1, 5, -2.25]} rotation={true} />
      </group>
    </>
  );
};

const OuterNetheRoof = ({ position }) => {
  return (
    <>
      <group position={position}>
        <NetherBlock position={[-9, -1, 1]} size={[1, 1, 1]} />
        <NetherStair
          position={[-8.75, -2, 1]}
          rotation={[0, Math.PI / 2, Math.PI]}
        />
        {/*Left Section (Outer)*/}
        <NetherStair position={[-9, -2, 1.75]} rotation={[0, Math.PI, 0]} />
        <NetherSlab position={[-9, -3.75, -1]} size={[1, 0.5, 1]} />
        <NetherStair position={[-9, -3, -0.25]} rotation={[Math.PI, 0, 0]} />
        <NetherStair position={[-9, -2, 0.25]} />
        <NetherStair position={[-9, -3, -0.75]} />
        <NetherBlock position={[-9, -4, -2]} size={[1, 1, 1]} />
        <NetherSlab position={[-9, -4.25, -3]} size={[1, 0.5, 1]} />
        <NetherSlab position={[-9, -4.5, -3]} size={[1, 0.5, 1]} />
        <NetherBlock position={[-9, -5, -4]} size={[1, 1, 1]} />
        <NetherSlab position={[-9, -5.25, -5]} size={[1, 0.5, 1]} />
        {/*Right Section (Outer) */}
        <NetherStair position={[-9, -2, 1.75]} rotation={[0, Math.PI, 0]} />
        <NetherStair position={[-9, -3, 2.25]} rotation={[0, 0, Math.PI]} />
        <NetherSlab position={[-9, -3.75, 3]} size={[1, 0.5, 1]} />
        <NetherStair position={[-9, -3, 2.75]} rotation={[0, Math.PI, 0]} />
        <NetherBlock position={[-9, -4, 4]} size={[1, 1, 1]} />
        <NetherSlab position={[-9, -4.25, 5]} size={[1, 0.5, 1]} />
        <NetherSlab position={[-9, -4.5, 5]} size={[1, 0.5, 1]} />
        <NetherBlock position={[-9, -5, 6]} size={[1, 1, 1]} />
        <NetherSlab position={[-9, -5.25, 7]} size={[1, 0.5, 1]} />
      </group>
    </>
  );
};

const BaseLayer = () => {
  return (
    <>
      <GrayBlock position={[-10, -10, 5]} size={[1, 1, 1]} />
      <GrayBlock position={[-7, -10, 5]} size={[3, 1, 1]} />
      <LightBlock position={[-4.5, -10, 5]} size={[2, 1, 1]} />
      <GrayBlock position={[-3, -10, 4]} size={[1, 1, 3]} />
      <BlackBlock position={[1, -5, 3]} size={[7, 11, 1]} />
      <BlackBlock position={[4, -5, 0.5]} size={[1, 11, 4]} />
      <GrayBlock position={[6.5, -10, -1]} size={[4, 1, 1]} />
      <GrayBlock position={[8, -10, -5.5]} size={[1, 1, 8]} />
      <GrayBlock position={[4, -10, -9]} size={[7, 1, 1]} />
      <GrayBlock position={[1, -10, -7.5]} size={[1, 1, 2]} />
      <BlackBlock position={[-2.5, -5, -6]} size={[8, 11, 1]} />
      <BlackBlock position={[-6, -5, -4]} size={[1, 11, 3]} />
      <GrayBlock position={[-7.5, -10, -3]} size={[2, 1, 1]} />
      <GrayBlock position={[-8, -10, 1]} size={[1, 1, 7]} />
    </>
  );
};

const ExtraRightSideRoof = () => {
  return (
    <>
      <NetherBlock position={[-2, -4, 4]} size={[1, 1, 1]} />
      <NetherSlab position={[-2, -4.25, 5]} size={[1, 0.5, 1]} />
      <NetherSlab position={[-2, -4.5, 5]} size={[1, 0.5, 1]} />
      <NetherBlock position={[-2, -5, 6]} size={[1, 1, 1]} />
      <NetherSlab position={[-2, -5.25, 7]} size={[1, 0.5, 1]} />
      <BlackStoneStair position={[-3, -3, 3.75]} rotation={true} />
      <BlackStoneBlock position={[-3, -4, 4.5]} size={[1, 1, 2]} />
      <BlackStoneBlock position={[-3, -5, 6.5]} size={[1, 1, 2]} />
      <BlackStoneSlab position={[-3, -4.25, 6]} size={[1, 0.5, 1]} />
      <BlackStoneSlab position={[-3, -5.25, 8]} size={[1, 0.5, 1]} />
    </>
  );
};

const SecondLayer = () => {
  return (
    <>
      <GrayBlock position={[-3, -7, 4.5]} size={[1, 5, 2]} />
      <GrayBlock position={[-4.5, -5.5, 5]} size={[2, 2, 1]} />
      <GrayBlock position={[-7, -7, 5]} size={[3, 5, 1]} />
      <GrayBlock position={[-8, -7, 1]} size={[1, 5, 7]} />
      <GrayBlock position={[-7.5, -7, -3]} size={[2, 5, 1]} />
      <BlackBlock position={[-4.5, -2, 3]} size={[4, 5, 1]} />
      <BlackBlock position={[-6, -2, 0]} size={[1, 5, 5]} />
      <GrayBlock position={[6.5, -3, -1]} size={[4, 13, 1]} />
      <GrayBlock position={[8, -3, -5.5]} size={[1, 13, 8]} />
      <GrayBlock position={[4, -3, -9]} size={[7, 13, 1]} />
      <GrayBlock position={[1, -3, -7.5]} size={[1, 13, 2]} />
      <GrayBlock position={[1, 2, -4]} size={[1, 3, 5]} />
      <GrayBlock position={[2.5, 2, -1]} size={[4, 3, 1]} />
    </>
  );
};

const MainIsland = ({ position }) => {
  return (
    <group position={position}>
      {/*Base */}
      <BaseLayer />
      {/*Second Section */}
      <SecondLayer />
      {/*Third Section Roofs*/}
      <group>
        <InnerBlackStoneRoof position={[-9, -8, 6]} />
        <OuterNetheRoof position={[0, 0, 0]} />
        <ExtraRightSideRoof />
      </group>
      <group>
        <InnerBlackStoneRoof position={[7, 0, 0]} />
        <OuterNetheRoof position={[18, 8, -6]} />
        {Array.from({ length: 6 }, (_, i) => (
          <OuterNetheRoof key={16 - i} position={[16 - i, 8, -6]} />
        ))}
      </group>
      <group>
        <InnerBlackStoneRoof />
        <OuterNetheRoof position={[9, 8, -6]} />
      </group>
      {/*Fourth */}
    </group>
  );
};

const Outline = () => {
  return (
    <>
      <OutlineDimensions
        color={"0x87CEEB"}
        position={[0, 0, 0]}
        size={[21, 21, 23]}
      />
      <MainIsland position={[0, 0, 0]} />
    </>
  );
};

export default Outline;
