import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const MarsModel = () => {
  const { scene } = useGLTF('/mars.glb'); // Adjust the path to match the public directory
  return <primitive object={scene} />;
};

const ThreeDObject = () => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <MarsModel />
    </Canvas>
  );
};

export default ThreeDObject;