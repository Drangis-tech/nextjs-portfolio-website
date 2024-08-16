// app/components/Icon.tsx
import React from 'react';
import { FontAwesomeIcon, SizeProp } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '1x', color = 'currentColor' }) => {
  return (
    <FontAwesomeIcon icon={icon} size={size} color={color} />
  );
};

export default Icon;