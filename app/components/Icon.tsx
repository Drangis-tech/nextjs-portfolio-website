// components/Icon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  size?: SizeProp; // Use SizeProp type
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '1x', color = 'currentColor' }) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} className="fa-icon" />;
};

export default Icon;