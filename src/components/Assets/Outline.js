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

const Shroomlight = ({ position, blockColor = "#FFAC1C", size }) => {
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

const WarpedStair = ({
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

const AccaciaBlock = ({ position, blockColor = "orange", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const AccaciaGlass = ({ position, blockColor = "orange", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const WhiteStainedGlass = ({ position, blockColor = "white", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={blockColor} />
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

const RightsideExterriorDetails = ({ position }) => {
  return (
    <>
      <group position={position}>
        {Array.from({ length: 7 }, (_, i) => (
          <IronTrapdoor key={i} position={[8.5, -6, -2 - i]} />
        ))}
        <Shroomlight position={[8, -6, -5]} size={[1, 1, 7]} />
        <BlackStoneBlock position={[8, -8, -2]} size={[1, 3, 1]} />
        <WarpedStair
          position={[7.75, -7, -4]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI * 2]}
        />
        <WarpedStair
          position={[7.75, -7, -3]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI * 2]}
        />
        <WhiteStainedGlass position={[8, -8, -3.5]} size={[1, 1, 2]} />
        <WarpedStair
          position={[7.75, -9, -4]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI]}
        />
        <WarpedStair
          position={[7.75, -9, -3]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI]}
        />
        <BlackStoneBlock position={[8, -8, -5]} size={[1, 3, 1]} />
        <WarpedStair
          position={[7.75, -7, -6]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI * 2]}
        />
        <WarpedStair
          position={[7.75, -7, -7]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI * 2]}
        />
        <WhiteStainedGlass position={[8, -8, -6.5]} size={[1, 1, 2]} />
        <WarpedStair
          position={[7.75, -9, -7]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI]}
        />
        <WarpedStair
          position={[7.75, -9, -6]}
          rotation={[Math.PI, Math.PI * 1.5, Math.PI]}
        />
        <BlackStoneBlock position={[8, -8, -8]} size={[1, 3, 1]} />
      </group>
    </>
  );
};

const QuartzSlab = ({ position, blockColor = "green", size }) => {
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
        <BlackStoneStair position={[1, 7, -4.25]} rotation={[0, Math.PI, 0]} />
        <BlackStoneStair position={[1, 6, -3.25]} rotation={[0, Math.PI, 0]} />
        <BlackStoneStair position={[1, 5, -2.25]} rotation={[0, Math.PI, 0]} />
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

const ExtraRightSideRoof = ({ position }) => {
  return (
    <>
      <group position={position}>
        <ExtraRoof />
        <BlackStoneStair position={[-3, -3, 3.75]} rotation={[0, Math.PI, 0]} />
        <BlackStoneBlock position={[-3, -4, 4.5]} size={[1, 1, 2]} />
        <BlackStoneBlock position={[-3, -5, 6.5]} size={[1, 1, 2]} />
        <BlackStoneSlab position={[-3, -4.25, 6]} size={[1, 0.5, 1]} />
        <BlackStoneSlab position={[-3, -5.25, 8]} size={[1, 0.5, 1]} />
      </group>
    </>
  );
};

const ExtraRoof = ({ position }) => {
  return (
    <>
      <group position={position}>
        <NetherBlock position={[-2, -4, 4]} size={[1, 1, 1]} />
        <NetherSlab position={[-2, -4.25, 5]} size={[1, 0.5, 1]} />
        <NetherSlab position={[-2, -4.5, 5]} size={[1, 0.5, 1]} />
        <NetherBlock position={[-2, -5, 6]} size={[1, 1, 1]} />
        <NetherSlab position={[-2, -5.25, 7]} size={[1, 0.5, 1]} />
      </group>
    </>
  );
};

const SeaLanternBlock = ({ position, blockColor = "#20B2AA", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const EndRod = ({ position, height, blockColor = "white" }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={[0.125, height, 0.125]} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const WarpedBlock = ({ position, blockColor = "#0D98BA", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
};

const WarpedWall = ({
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

const WoodenTrapdoor = ({
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

const AccaciaTrapdoor = ({
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

const IronTrapdoor = ({
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

const BlastFurnace = ({ position, blockColor = "#818589", size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={blockColor} />
      </mesh>
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
      <GrayBlock position={[2.5, 0, -1]} size={[4, 1, 1]} />
      <GrayBlock position={[1, 0, -3]} size={[1, 1, 4]} />
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
        <OuterNetheRoof position={[2, 0, 0]} />
        <OuterNetheRoof position={[0, 0, 0]} />
        {Array.from({ length: 3 }, (_, i) => (
          <ExtraRoof key={-2 - i} position={[-2 - i, 0, 0]} />
        ))}
        <BlackStoneBlock position={[-7, 0, 1]} />
        <BlackStoneSlab position={[-8.5, 0.5, 1]} size={[2, 0.5, 1]} />
        <WoodenTrapdoor
          position={[-1.5, -1, -7]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <WoodenTrapdoor
          position={[-0.5, -1, -7]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <ExtraRightSideRoof />
        {/*Front Side Details */}
        <AccaciaBlock position={[4, -1, 1.5]} size={[1, 1, 2]} />
        <AccaciaGlass position={[4, -2.5, 1.5]} size={[1, 2, 2]} />
        <AccaciaBlock position={[4, -5, 1.5]} size={[1, 3, 2]} />
        <AccaciaGlass position={[4, -7.5, 1.5]} size={[1, 2, 2]} />
        <AccaciaBlock position={[4, -9, 1.5]} size={[1, 1, 2]} />
        <IronTrapdoor position={[-0.4, -5, 2]} rotation={[0, 0, Math.PI / 2]} />
        <IronTrapdoor position={[-0.4, -5, 1]} rotation={[0, 0, Math.PI / 2]} />
        <EndRod position={[5, -5, 2]} height={9} />
        <EndRod position={[5, -5, 1]} height={9} />
        {/*Rightside Details*/}
        <RightsideExterriorDetails />
        <RightsideExterriorDetails position={[0, 5, 0]} />
        <RightsideExterriorDetails position={[0, 10, 0]} />
        {/*Details*/}
        <SeaLanternBlock position={[1.5, -4.5, 3]} size={[4, 8, 1]} />

        {Array.from({ length: 8 }, (_, i) => (
          <AccaciaTrapdoor key={i} position={[-0.6, -1 - i, 4]} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <AccaciaTrapdoor key={i} position={[3.6, -1 - i, 4]} />
        ))}

        {Array.from({ length: 4 }, (_, i) => (
          <AccaciaTrapdoor
            key={i}
            position={[-0.4, 0 - i, 4]}
            rotation={[0, 0, Math.PI / 2]}
          />
        ))}

        {Array.from({ length: 4 }, (_, i) => (
          <AccaciaTrapdoor
            key={i}
            position={[-8.6, 0 - i, 4]}
            rotation={[0, 0, Math.PI / 2]}
          />
        ))}
        <SeaLanternBlock position={[4, -1, 4]} size={[1, 1, 1]} />
        <WarpedBlock position={[-3.5, -1.5, 3]} size={[4, 2, 1]} />
        <BlastFurnace position={[4, -2, 4]} size={[1, 1, 1]} />
      </group>
      <group>
        <InnerBlackStoneRoof position={[7, 0, 0]} />
        <OuterNetheRoof position={[18, 8, -6]} />
        {Array.from({ length: 6 }, (_, i) => (
          <OuterNetheRoof key={16 - i} position={[16 - i, 8, -6]} />
        ))}
        <BlackStoneBlock position={[2, 8, -5]} size={[1, 1, 1]} />
        <BlackStoneSlab position={[0.5, 8.75, -5]} size={[2, 0.5, 1]} />
        <BlackStoneStair
          position={[6.25, 8, -5]}
          rotation={[0, Math.PI / 2, 0]}
        />
        {Array.from({ length: 6 }, (_, i) => (
          <WoodenTrapdoor
            key={i}
            position={[4.4, 7, 2 + i]}
            rotation={[0, Math.PI / 2, 0]}
          />
        ))}

        {/*Billboard */}
        <QuartzSlab position={[-2.5, -0.25, -1.5]} size={[6, 0.5, 8]} />
        <QuartzSlab position={[-5, 0.25, -2]} size={[1, 0.5, 1]} />
        <WarpedWall position={[-5, 1, -2]} />
        {Array.from({ length: 4 }, (_, i) => (
          <AccaciaTrapdoor
            key={i}
            position={[9.6, 5 - i, -2]}
            rotation={[0, 0, Math.PI / 2]}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <AccaciaTrapdoor key={i} position={[-5.6, 9 - i, -2]} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <AccaciaTrapdoor key={i} position={[-1.4, 9 - i, -2]} />
        ))}
        <WarpedBlock position={[-3.5, 5.5, -2]} size={[4, 8, 1]} />
        <QuartzSlab position={[-2, 0.25, -2]} size={[1, 0.5, 1]} />
        <WarpedWall position={[-2, 1, -2]} />
        <QuartzSlab position={[2, -0.25, 1]} size={[3, 0.5, 3]} />
        {/*Billboard */}
      </group>

      <group>
        <InnerBlackStoneRoof />
        <OuterNetheRoof position={[9, 8, -6]} />
        <BlackStoneBlock position={[7, 8, -5]} size={[1, 1, 1]} />
        <BlackStoneSlab position={[8.5, 8.75, -5]} size={[2, 0.5, 1]} />
        <BlackStoneStair
          position={[2.75, 8, -5]}
          rotation={[0, Math.PI * 1.5, 0]}
        />
        <BlackStoneSlab position={[5.5, 7.75, -5]} size={[2, 0.5, 1]} />
        {Array.from({ length: 6 }, (_, i) => (
          <WoodenTrapdoor
            key={i}
            position={[5.6, 7, 2 + i]}
            rotation={[0, Math.PI / 2, 0]}
          />
        ))}
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
