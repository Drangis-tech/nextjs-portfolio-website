// components/TestIcons.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

const TestIcons: React.FC = () => {
  return (
    <div>
      <h1>FontAwesome Icons Test</h1>
      <div>
        <FontAwesomeIcon icon={faCode} size="3x" />
        <FontAwesomeIcon icon={faPalette} size="3x" />
      </div>
    </div>
  );
};

export default TestIcons;