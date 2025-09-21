import React from 'react';

export interface OldIconProps {
  name: string;
  githubUrl?: string;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

const GITHUB_USERNAME = 'gsnoopy';
const GITHUB_REPO = 'react-old-windows-icons';
const GITHUB_BRANCH = 'main';

const OldIcon: React.FC<OldIconProps> = ({
  name,
  githubUrl,
  size = 24,
  className = '',
  style = {},
  alt,
  ...props
}) => {

  const fileName = name.includes('.') ? name : `${name}.webp`;
  const finalUrl = githubUrl || `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${GITHUB_BRANCH}/Icons/${encodeURIComponent(fileName)}`;

  const imgStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: 'inline-block',
    ...style
  };

  return (
    <img
      src={finalUrl}
      alt={alt || name}
      className={className}
      style={imgStyle}
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

export default OldIcon;