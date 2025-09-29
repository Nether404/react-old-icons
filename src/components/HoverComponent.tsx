import React from 'react';
import OldIcon, { OldIconProps } from '../OldIcon';

const HoverComponent: React.FC<OldIconProps> = (props) => {
  return <OldIcon name="HoverComponent" {...props} />;
};

export default HoverComponent;
