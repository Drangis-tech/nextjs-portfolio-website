import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x' | string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '1x', color }) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export default Icon;