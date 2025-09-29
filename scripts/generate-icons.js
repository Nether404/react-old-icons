const fs = require('fs');
const path = require('path');

// Read all icon files from the Icons directory
const iconsDir = path.join(__dirname, '../Icons');
const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.webp'));

console.log(`Found ${iconFiles.length} icon files`);

// Generate component name from filename
function generateComponentName(filename) {
  const name = filename.replace('.webp', '');
  // Ensure it starts with a capital letter and is a valid React component name
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/[^a-zA-Z0-9]/g, '');
}

// Generate individual icon components
const componentsDir = path.join(__dirname, '../src/components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const iconComponents = [];

iconFiles.forEach(filename => {
  const componentName = generateComponentName(filename);
  const iconName = filename.replace('.webp', '');
  
  iconComponents.push({
    name: componentName,
    filename: iconName,
    category: categorizeIcon(iconName)
  });
  
  const componentContent = `import React from 'react';
import OldIcon, { OldIconProps } from '../OldIcon';

const ${componentName}: React.FC<OldIconProps> = (props) => {
  return <OldIcon name="${iconName}" {...props} />;
};

export default ${componentName};
`;

  fs.writeFileSync(
    path.join(componentsDir, `${componentName}.tsx`),
    componentContent
  );
});

// Categorize icons based on their names
function categorizeIcon(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('windows') || lowerName.includes('win95') || lowerName.includes('winxp') || lowerName.includes('vista')) {
    return 'Windows';
  }
  if (lowerName.includes('game') || lowerName.includes('quake') || lowerName.includes('doom') || lowerName.includes('half') || lowerName.includes('counter') || lowerName.includes('starcraft') || lowerName.includes('sims') || lowerName.includes('civilization') || lowerName.includes('rollercoaster') || lowerName.includes('simcity')) {
    return 'Games';
  }
  if (lowerName.includes('office') || lowerName.includes('word') || lowerName.includes('excel') || lowerName.includes('powerpoint') || lowerName.includes('photoshop') || lowerName.includes('adobe') || lowerName.includes('corel')) {
    return 'Software';
  }
  if (lowerName.includes('internet') || lowerName.includes('firefox') || lowerName.includes('chrome') || lowerName.includes('netscape') || lowerName.includes('explorer')) {
    return 'Browsers';
  }
  if (lowerName.includes('media') || lowerName.includes('winamp') || lowerName.includes('player') || lowerName.includes('quicktime') || lowerName.includes('real')) {
    return 'Media';
  }
  if (lowerName.includes('theme') || lowerName.includes('icon') || lowerName.includes('moricon')) {
    return 'Themes';
  }
  
  return 'System';
}

// Generate index file with all exports
const indexContent = `// Auto-generated index file for React Old Icons
// This file exports all ${iconComponents.length} icon components

${iconComponents.map(icon => `export { default as ${icon.name} } from './components/${icon.name}';`).join('\n')}

// Icon metadata for browsing
export const iconMetadata = ${JSON.stringify(iconComponents, null, 2)};

// Export the base OldIcon component
export { default as OldIcon } from './OldIcon';
export type { OldIconProps } from './OldIcon';
`;

fs.writeFileSync(path.join(__dirname, '../src/index.ts'), indexContent);

console.log(`Generated ${iconComponents.length} icon components`);
console.log('Categories:', [...new Set(iconComponents.map(i => i.category))]);