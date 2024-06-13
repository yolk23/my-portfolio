const Lighting = () => {
  return (
    <>
      <pointLight position={[5, 10, 0]} intensity={20} distance={20} />
      <pointLight position={[-5, 10, 0]} intensity={10} distance={5} />
      <pointLight position={[-5, 10, 0]} intensity={10} distance={5} />
      <pointLight position={[-15, 5, 0]} intensity={50} distance={20} />
      <pointLight position={[-5, 5, 0]} intensity={10} distance={5} />
      <pointLight position={[0, 5, 0]} intensity={10} distance={5} />
      <pointLight position={[2, 0, 8]} intensity={10} distance={20} />
      <pointLight position={[2, -5, 8]} intensity={10} distance={20} />
    </>
  );
};

export default Lighting;
