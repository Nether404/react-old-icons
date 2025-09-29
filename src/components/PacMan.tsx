import React from 'react';
import OldIcon, { OldIconProps } from '../OldIcon';

const PacMan: React.FC<OldIconProps> = (props) => {
  return <OldIcon name="PacMan" {...props} />;
};

export default PacMan;
