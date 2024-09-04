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
    <div style={{ width: '400px', height: '400px', margin: '0 auto' }}> {/* Container size */}
      <Canvas 
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 5], fov: 60 }} // Adjusted field of view for a closer fit
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls />
        <MarsModel />
      </Canvas>
    </div>
  );
};

export default ThreeDObject;