import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  icon: any;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '1x', color = 'black' }) => (
  <FontAwesomeIcon icon={icon} size={size} color={color} />
);

export default Icon;