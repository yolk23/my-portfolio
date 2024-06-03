import {
  GrayBlock,
  Shroomlight,
  BlackBlock,
  LightBlock,
  BlackStoneBlock,
  WarpedStair,
  WhiteStainedGlass,
  BlackStoneSlab,
  NetherBlock,
  NetherSlab,
  BlackStoneStair,
  NetherStair,
  AccaciaBlock,
  AccaciaGlass,
  WhiteStainedGlassPane,
  QuartzSlab,
  BlackstoneWall,
  EndRod,
  WoodenTrapdoor,
  BlastFurnace,
  WarpeFence,
  AndesiteWall,
  WarpedWall,
  AccaciaTrapdoor,
  SeaLanternBlock,
  WarpedBlock,
  IronTrapdoor,
  HalfGlassPane,
  FloorBlock,
} from "./Blocks";

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
        <BlackStoneStair
          position={[1, 2, -0.25]}
          rotation={[0, Math.PI, Math.PI]}
        />
        <BlackStoneSlab position={[1, 2.25, 1]} size={[1, 0.5, 1]} />
        <BlackStoneSlab position={[1, 2.25, 2]} size={[1, 0.5, 1]} />
        <BlackStoneStair position={[1, 2, -9.75]} rotation={[0, 0, Math.PI]} />
        <BlackStoneSlab position={[1, 2.25, -11]} size={[1, 0.5, 1]} />
        <BlackStoneSlab position={[1, 2.25, -12]} size={[1, 0.5, 1]} />
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
      <GrayBlock position={[-7, -10, 5]} size={[3, 1, 1]} />
      <LightBlock position={[-4.5, -10, 5]} size={[2, 1, 1]} />
      <GrayBlock position={[-3, -10, 4]} size={[1, 1, 3]} />

      <BlackBlock position={[-1, -5, 3]} size={[1, 11, 1]} />
      <BlackBlock position={[1, 0, 3]} size={[7, 1, 1]} />
      <BlackBlock position={[-2, -6.5, 3]} size={[1, 8, 1]} />
      <BlackBlock position={[2, -9.5, 3]} size={[5, 2, 1]} />
      <BlackBlock position={[4, -5, 3]} size={[1, 11, 1]} />

      <BlackBlock position={[4, -5, 0]} size={[1, 11, 1]} />
      <BlackBlock position={[4, 0, 1.5]} size={[1, 1, 2]} />
      <BlackBlock position={[4, -5.5, -1]} size={[1, 10, 1]} />
      <BlackBlock position={[4, -10, 1.5]} size={[1, 1, 2]} />

      <GrayBlock position={[6.5, -10, -1]} size={[4, 1, 1]} />
      <GrayBlock position={[8, -10, -5.5]} size={[1, 1, 8]} />
      <GrayBlock position={[4, -10, -9]} size={[7, 1, 1]} />
      <GrayBlock position={[1, -10, -7.5]} size={[1, 1, 2]} />

      <BlackBlock position={[0, -5, -6]} size={[1, 11, 1]} />
      <BlackBlock position={[1, -5, -6]} size={[1, 10, 1]} />
      <BlackBlock position={[-3, -5, -6]} size={[1, 11, 1]} />
      <BlackBlock position={[-6, -5, -6]} size={[1, 11, 1]} />
      <BlackBlock position={[-3, 0, -6]} size={[6, 1, 1]} />
      <BlackBlock position={[-3, -10, -6]} size={[6, 1, 1]} />

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

const SecondLayer = () => {
  return (
    <>
      <GrayBlock position={[-3, -7, 4.5]} size={[1, 5, 2]} />
      <GrayBlock position={[-4.5, -5.5, 5]} size={[2, 2, 1]} />
      <GrayBlock position={[-6, -7, 5]} size={[1, 5, 1]} />
      <GrayBlock position={[-8, -7, 5]} size={[1, 5, 1]} />
      <GrayBlock position={[-8, -5, 1]} size={[1, 1, 7]} />
      <GrayBlock position={[-8, -7.5, 1]} size={[1, 4, 1]} />
      <GrayBlock position={[-8, -7.5, 4]} size={[1, 4, 1]} />
      <GrayBlock position={[-8, -7.5, -2]} size={[1, 4, 1]} />
      <GrayBlock position={[-8, -7, -3]} size={[1, 5, 1]} />

      <BlackstoneWall position={[-7, -9, -3]} />
      <GrayBlock position={[-7, -8, -3]} size={[1, 1, 1]} />
      <BlackstoneWall position={[-7, -7, -3]} />
      <GrayBlock position={[-7, -6, -3]} size={[1, 1, 1]} />

      <BlackBlock position={[-4.5, -3, 3]} size={[4, 1, 1]} />
      <BlackBlock position={[-6, -1, 3]} size={[1, 3, 1]} />
      <BlackBlock position={[-4.5, 0, 3]} size={[4, 1, 1]} />

      <BlackBlock position={[-6, -2, 0]} size={[1, 5, 5]} />

      <GrayBlock position={[8, -3, -1]} size={[1, 13, 1]} />
      <GrayBlock position={[6, 2, -1]} size={[3, 1, 1]} />
      <GrayBlock position={[6, 0, -1]} size={[3, 1, 1]} />
      <GrayBlock position={[6, -2, -1]} size={[3, 1, 1]} />
      <GrayBlock position={[6, -4, -1]} size={[3, 1, 1]} />
      <GrayBlock position={[6, -6, -1]} size={[3, 1, 1]} />
      <GrayBlock position={[6, -8, -1]} size={[3, 1, 1]} />

      <GrayBlock position={[8, -3, -9]} size={[1, 13, 1]} />
      <GrayBlock position={[8, 0, -5]} size={[1, 1, 7]} />
      <GrayBlock position={[8, -5, -5]} size={[1, 1, 7]} />

      <GrayBlock position={[1, -3, -9]} size={[1, 13, 1]} />
      <GrayBlock position={[4.5, 2, -9]} size={[6, 1, 1]} />
      <GrayBlock position={[4.5, 0, -9]} size={[6, 1, 1]} />
      <GrayBlock position={[4.5, -2, -9]} size={[6, 1, 1]} />
      <GrayBlock position={[4.5, -4, -9]} size={[6, 1, 1]} />
      <GrayBlock position={[4.5, -6, -9]} size={[6, 1, 1]} />
      <GrayBlock position={[4.5, -8, -9]} size={[6, 1, 1]} />

      <GrayBlock position={[1, 0, -6.5]} size={[1, 1, 4]} />
      <GrayBlock position={[1, -5, -7.5]} size={[1, 1, 2]} />

      <GrayBlock position={[2.5, 2, -1]} size={[4, 1, 1]} />
      <GrayBlock position={[1, 2, -1]} size={[1, 3, 1]} />

      <GrayBlock position={[2.5, 0, -1]} size={[4, 1, 1]} />

      <GrayBlock position={[1, 0, -3]} size={[1, 1, 4]} />

      <WarpedStair position={[-7, -9, 4.75]} rotation={[0, Math.PI, 0]} />
      <WarpedStair
        position={[-7, -6.75, 5]}
        rotation={[Math.PI / 2, Math.PI, 0]}
      />
      <WarpedStair
        position={[-5, -6.75, 5]}
        rotation={[Math.PI / 2, Math.PI, 0]}
      />
      <WarpedStair
        position={[-4, -6.75, 5]}
        rotation={[Math.PI / 2, Math.PI, 0]}
      />

      {Array.from({ length: 4 }, (_, i) => (
        <WoodenTrapdoor
          key={i}
          position={[-5.5, -6, -4 - i]}
          rotation={[0, Math.PI / 2, 0]}
        />
      ))}
      <BlackStoneStair
        position={[-3, -6, 5.75]}
        rotation={[0, Math.PI, Math.PI]}
      />
      <BlackStoneStair
        position={[-8, -6, 5.75]}
        rotation={[0, Math.PI, Math.PI]}
      />
      <BlackStoneSlab position={[-8, -5.75, 7.5]} size={[1, 0.5, 2]} />
      <BlackStoneSlab position={[-3, -5.75, 7.5]} size={[1, 0.5, 2]} />
      <HalfGlassPane position={[-3, -7, 5.75]} blockColor="black" />
      <HalfGlassPane position={[-3, -8, 5.75]} blockColor="black" />
      <HalfGlassPane position={[-3, -9, 5.75]} blockColor="black" />

      <HalfGlassPane position={[-8, -7, 5.75]} blockColor="black" />
      <HalfGlassPane position={[-8, -8, 5.75]} blockColor="black" />
      <HalfGlassPane position={[-8, -9, 5.75]} blockColor="black" />
      {/* */}
      <WoodenTrapdoor position={[-8.5, -6, -1]} />
      <WoodenTrapdoor position={[-8.5, -6, 0]} />
      <WoodenTrapdoor position={[-8.5, -6, 1]} />
      <WoodenTrapdoor position={[-8.5, -6, 2]} />
      <WoodenTrapdoor position={[-8.5, -6, 3]} />

      <WoodenTrapdoor position={[-8.5, -4, 0]} />
      <WoodenTrapdoor position={[-8.5, -4, 1]} />
      <WoodenTrapdoor position={[-8.5, -4, 2]} />
      {/* */}
      <WarpedStair
        position={[-7.75, -7, 0]}
        rotation={[0, Math.PI / 2, Math.PI]}
      />
      <WarpedStair
        position={[-7.75, -7, -1]}
        rotation={[0, Math.PI / 2, Math.PI]}
      />
      <WhiteStainedGlassPane position={[-8, -8, 0]} />
      <WhiteStainedGlassPane position={[-8, -8, -1]} />
      <WarpedStair
        position={[-8, -9.25, -1]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <WarpedStair
        position={[-8, -9.25, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      {/* */}
      <WarpedStair
        position={[-7.75, -7, 2]}
        rotation={[0, Math.PI / 2, Math.PI]}
      />
      <WarpedStair
        position={[-7.75, -7, 3]}
        rotation={[0, Math.PI / 2, Math.PI]}
      />
      <WhiteStainedGlassPane position={[-8, -8, 2]} />
      <WhiteStainedGlassPane position={[-8, -8, 3]} />
      <WarpedStair
        position={[-8, -9.25, 2]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <WarpedStair
        position={[-8, -9.25, 3]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      {/* */}
      <AccaciaBlock position={[-4.5, -9, -6]} size={[2, 1, 1]} />
      <AccaciaGlass position={[-4.5, -7.5, -6]} size={[2, 2, 1]} />
      <AccaciaBlock position={[-4.5, -5, -6]} size={[2, 3, 1]} />
      <AccaciaGlass position={[-4.5, -2.5, -6]} size={[2, 2, 1]} />
      <AccaciaBlock position={[-4.5, -1, -6]} size={[2, 1, 1]} />
      <EndRod position={[-4, -5, -7]} height={9} />
      <EndRod position={[-5, -5, -7]} height={9} />
      <IronTrapdoor position={[-0.4, 4, -7]} rotation={[0, 0, Math.PI / 2]} />
      <IronTrapdoor position={[-0.4, 5, -7]} rotation={[0, 0, Math.PI / 2]} />
      <group position={[3, 0, 0]}>
        <AccaciaBlock position={[-4.5, -9, -6]} size={[2, 1, 1]} />
        <AccaciaGlass position={[-4.5, -7.5, -6]} size={[2, 2, 1]} />
        <AccaciaBlock position={[-4.5, -5, -6]} size={[2, 3, 1]} />
        <AccaciaGlass position={[-4.5, -2.5, -6]} size={[2, 2, 1]} />
        <AccaciaBlock position={[-4.5, -1, -6]} size={[2, 1, 1]} />
        <EndRod position={[-4, -5, -7]} height={9} />
        <EndRod position={[-5, -5, -7]} height={9} />
        <IronTrapdoor position={[-0.4, 4, -7]} rotation={[0, 0, Math.PI / 2]} />
        <IronTrapdoor position={[-0.4, 5, -7]} rotation={[0, 0, Math.PI / 2]} />
      </group>
      <BlastFurnace position={[-7, -9, -6]} size={[1, 1, 1]} />
      <BlastFurnace position={[-7, -8, -6]} size={[1, 1, 1]} />
      <BlastFurnace position={[-7, -9, -5]} size={[1, 1, 1]} />
      <BlastFurnace position={[-7, -8, -5]} size={[1, 1, 1]} />
      <group position={[9, 10, -6]}>
        <WarpedStair
          position={[-7.75, -7, 0]}
          rotation={[0, Math.PI / 2, Math.PI]}
        />
        <WarpedStair
          position={[-7.75, -7, -1]}
          rotation={[0, Math.PI / 2, Math.PI]}
        />
        <WhiteStainedGlassPane position={[-8, -8, 0]} />
        <WhiteStainedGlassPane position={[-8, -8, -1]} />
        <WarpedStair
          position={[-8, -9.25, -1]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <WarpedStair
          position={[-8, -9.25, 0]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        {/* */}
        <WarpedStair
          position={[-7.75, -7, 2]}
          rotation={[0, Math.PI / 2, Math.PI]}
        />
        <WarpedStair
          position={[-7.75, -7, 3]}
          rotation={[0, Math.PI / 2, Math.PI]}
        />
        <WhiteStainedGlassPane position={[-8, -8, 2]} />
        <WhiteStainedGlassPane position={[-8, -8, 3]} />
        <WarpedStair
          position={[-8, -9.25, 2]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <WarpedStair
          position={[-8, -9.25, 3]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <group position={[0, -5, 0]}>
          <WarpedStair
            position={[-7.75, -7, -1]}
            rotation={[0, Math.PI / 2, Math.PI]}
          />
          <WhiteStainedGlassPane position={[-8, -8, 0]} />

          <WarpedStair
            position={[-8, -9.25, -1]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <BlackStoneBlock position={[-8, -6, -1]} size={[1, 1, 1]} />
          <BlackStoneBlock position={[-8, -7.5, -2]} size={[1, 4, 1]} />
        </group>
        <group position={[0, -10, 0]}>
          <WarpedStair
            position={[-7.75, -7, -1]}
            rotation={[0, Math.PI / 2, Math.PI]}
          />
          <WhiteStainedGlassPane position={[-8, -8, 0]} />

          <WarpedStair
            position={[-8, -9.25, -1]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <BlackStoneBlock position={[-8, -6, -1]} size={[1, 1, 1]} />
          <BlackStoneBlock position={[-8, -7.5, -2]} size={[1, 4, 1]} />
        </group>
        <BlackStoneBlock position={[-8, -7.5, 4]} size={[1, 4, 1]} />
        <BlackStoneBlock position={[-8, -7.5, 1]} size={[1, 4, 1]} />
        <BlackStoneBlock position={[-8, -7.5, -2]} size={[1, 4, 1]} />
      </group>
    </>
  );
};

const BackDetails = ({}) => {
  return (
    <group>
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={1 - i} position={[7 - i, -9, -9]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={1 - i} position={[7 - i, -7, -9]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={1 - i} position={[7 - i, -5, -9]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={1 - i} position={[7 - i, -3, -9]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={1 - i} position={[7 - i, -1, -9]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={1 - i} position={[7 - i, 1, -9]} />
      ))}
      <EndRod position={[8, -9, -10]} />
      {Array.from({ length: 6 }, (_, i) => (
        <EndRod key={1 - i} position={[8, -9 + i + i, -10]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <EndRod key={1 - i} position={[1, -9 + i + i, -10]} />
      ))}

      {Array.from({ length: 6 }, (_, i) => (
        <HalfGlassPane key={1 - i} position={[8, -8 + i + i, -10]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <HalfGlassPane key={1 - i} position={[1, -8 + i + i, -10]} />
      ))}
    </group>
  );
};

const FirstBuilding = ({}) => {
  return (
    <>
      {/*Roof */}
      <group>
        <WoodenTrapdoor
          position={[-1.5, -1, -7]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <WoodenTrapdoor
          position={[-0.5, -1, -7]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <BlackStoneBlock position={[-7, 0, 1]} />
        <BlackStoneSlab position={[-8.5, 0.5, 1]} size={[2, 0.5, 1]} />
        <InnerBlackStoneRoof position={[-9, -8, 6]} />
        <OuterNetheRoof position={[2, 0, 0]} />
        <OuterNetheRoof position={[0, 0, 0]} />
        {Array.from({ length: 3 }, (_, i) => (
          <ExtraRoof key={-2 - i} position={[-2 - i, 0, 0]} />
        ))}
        <ExtraRightSideRoof />
      </group>
    </>
  );
};

const SecondBuilding = ({}) => {
  return (
    <>
      {/*Exterrior*/}
      <group>
        {/*Front Side Right Details Second Building*/}
        <AccaciaBlock position={[4, -1, 1.5]} size={[1, 1, 2]} />
        <AccaciaGlass position={[4, -2.5, 1.5]} size={[1, 2, 2]} />
        <AccaciaBlock position={[4, -5, 1.5]} size={[1, 3, 2]} />
        <AccaciaGlass position={[4, -7.5, 1.5]} size={[1, 2, 2]} />
        <AccaciaBlock position={[4, -9, 1.5]} size={[1, 1, 2]} />
        <IronTrapdoor position={[-0.4, -5, 2]} rotation={[0, 0, Math.PI / 2]} />
        <IronTrapdoor position={[-0.4, -5, 1]} rotation={[0, 0, Math.PI / 2]} />
        <EndRod position={[5, -5, 2]} height={9} />
        <EndRod position={[5, -5, 1]} height={9} />

        {Array.from({ length: 6 }, (_, i) => (
          <HalfGlassPane key={1 - i} position={[8, -8 + i + i, 0]} />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <EndRod key={1 - i} position={[8, -9 + i + i, 0]} />
        ))}

        {/*Front Billboard Second Building*/}
        <SeaLanternBlock position={[1.5, -4.5, 3]} size={[4, 8, 1]} />

        {Array.from({ length: 8 }, (_, i) => (
          <AccaciaTrapdoor key={i} position={[-0.6, -1 - i, 4]} />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <AccaciaTrapdoor key={i} position={[3.6, -2 - i, 4]} />
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
        <WarpedBlock position={[-3.5, -1.5, 3]} size={[4, 2, 1]} />
        <BlastFurnace position={[4, -1, 4]} size={[1, 1, 1]} />
      </group>

      {/*Second Top Layer Building */}
      <group>
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
        <QuartzSlab position={[2, -0.25, 1]} size={[3, 0.5, 3]} />

        <QuartzSlab position={[-2.5, 0.25, 0.5]} size={[2, 0.5, 2]} />
        <BlastFurnace position={[-3, 1, 1]} />
        <BlastFurnace position={[-2, 1, 1]} />
        <BlastFurnace position={[-2, 1, 0]} />
        <BlastFurnace position={[-3, 1, 0]} />
        <group>
          <BlastFurnace position={[-7, 0, -1]} />
          <BlastFurnace position={[-7, 0, -2]} />
          <BlastFurnace position={[-7, 1, -2]} />
          <AndesiteWall position={[-7, 2, -2]} />
          <AndesiteWall position={[-7, 1, -1]} />
          <WarpeFence position={[-7, 2, -1]} />
          <WarpeFence position={[-7, 3, -2]} />
          <EndRod position={[-7, 4, -2]} />
          <EndRod position={[-7, 5, -2]} />
          <EndRod position={[-7, 4, -1]} />
          <EndRod position={[-7, 3, -1]} />
        </group>
      </group>
    </>
  );
};

const ThirdBuilding = ({}) => {
  return (
    <>
      {/*Roof*/}
      <group>
        <BlackStoneBlock position={[7, 8, -5]} size={[1, 1, 1]} />
        <BlackStoneSlab position={[8.5, 8.75, -5]} size={[2, 0.5, 1]} />
        <BlackStoneStair
          position={[2.75, 8, -5]}
          rotation={[0, Math.PI * 1.5, 0]}
        />
        <BlackStoneSlab position={[4.5, 7.75, -5]} size={[2, 0.5, 1]} />
        {Array.from({ length: 6 }, (_, i) => (
          <WoodenTrapdoor
            key={i}
            position={[5.6, 7, 2 + i]}
            rotation={[0, Math.PI / 2, 0]}
          />
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
        <InnerBlackStoneRoof position={[7, 0, 0]} />
        <OuterNetheRoof position={[18, 8, -6]} />
        {Array.from({ length: 6 }, (_, i) => (
          <OuterNetheRoof key={16 - i} position={[16 - i, 8, -6]} />
        ))}
        <InnerBlackStoneRoof />
        <OuterNetheRoof position={[9, 8, -6]} />
      </group>
      {/*Exterrior*/}
      {/*Rightside Details Third Building*/}
      <RightsideExterriorDetails position={[0, 5, 0]} />
      <RightsideExterriorDetails position={[0, 10, 0]} />
      <RightsideExterriorDetails position={[0, 0, 0]} />

      {/*Frontside Details ThirdBuilding*/}
      {Array.from({ length: 3 }, (_, i) => (
        <BlackstoneWall key={i} position={[7 - i, -9, -1]} />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <BlackstoneWall key={i} position={[7 - i, -7, -1]} />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <BlackstoneWall key={i} position={[7 - i, -5, -1]} />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <BlackstoneWall key={i} position={[7 - i, -3, -1]} />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <BlackstoneWall key={i} position={[7 - i, -1, -1]} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <BlackstoneWall key={i} position={[7 - i, 1, -1]} />
      ))}
      <BackDetails />
    </>
  );
};

const Floor = ({}) => {
  return (
    <>
      <FloorBlock
        size={[40, 1, 40]}
        position={[0, -10, 0]}
        blockColor={"black"}
      />
    </>
  );
};

const MainIsland = ({ position }) => {
  return (
    <group position={position}>
      <BaseLayer />
      <SecondLayer />
      <FirstBuilding />
      <SecondBuilding />
      <ThirdBuilding />
      {/* <Floor /> */}
    </group>
  );
};

const Outline = () => {
  return (
    <>
      <MainIsland position={[0, 0, 0]} />
    </>
  );
};

export default Outline;
