// app/components/Icon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  size?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'; // Replace with your custom size type
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '1x', color = 'currentColor' }) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export default Icon;