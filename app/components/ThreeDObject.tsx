// components/ThreeDObject.tsx

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React from 'react';

const MarsModel = () => {
  const { scene } = useGLTF('/mars.glb'); // Load model from public directory
  scene.scale.set(1, 1, 1); // Adjust scale if needed
  return <primitive object={scene} />;
};

const ThreeDObject = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls />
      <MarsModel />
    </Canvas>
  );
};

export default ThreeDObject;