// components/ThreeDObject.tsx

import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const ThreeDObject = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial attach="material" color="royalblue" />
      </Box>
    </Canvas>
  );
};

export default ThreeDObject;