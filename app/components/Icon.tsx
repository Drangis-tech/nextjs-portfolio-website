import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  size?: SizeProp; // Correctly typed SizeProp
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '1x', color = 'black' }) => (
  <FontAwesomeIcon icon={icon} size={size} color={color} />
);

export default Icon;