import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

interface IconProps {
  icon: IconDefinition;
  size?: SizeProp;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '2x', color = 'white' }) => {
  // Log the props for debugging
  console.log('Icon props:', { icon, size, color });

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      style={{ color }}
      // Add a title for better debugging
      title="FontAwesome Icon"
    />
  );
};

export default Icon;