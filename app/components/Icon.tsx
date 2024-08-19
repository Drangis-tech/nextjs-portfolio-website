import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core'; // Correct import for SizeProp
import React from 'react';

interface IconProps {
  icon: IconDefinition;
  size?: SizeProp;  // Correct type for the size prop
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '2x', color = 'white' }) => {
  return <FontAwesomeIcon icon={icon} size={size} style={{ color }} />;
};

export default Icon;