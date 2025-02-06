import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BusinessCard from './BusinessCard';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 150], fov: 55 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.001} />
      
      {/* Directional Lights */}
      <directionalLight position={[0, 0, 200]} intensity={0.3} />
      <directionalLight position={[0, 0, -200]} intensity={0.3} />
      
      {/* Point Lights */}
      <pointLight position={[0, 200, 0]} intensity={0.3} />
      <pointLight position={[0, -200, 0]} intensity={0.3} />
      
      {/* Business Card */}
      <BusinessCard />
      
      {/* Controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.25}
        screenSpacePanning={false}
        minDistance={50}
        maxDistance={500}
        maxPolarAngle={Math.PI}
      />
    </Canvas>
  );
};

export default Scene; 