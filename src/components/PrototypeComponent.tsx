import React from 'react';
import OldIcon, { OldIconProps } from '../OldIcon';

const PrototypeComponent: React.FC<OldIconProps> = (props) => {
  return <OldIcon name="PrototypeComponent" {...props} />;
};

export default PrototypeComponent;
