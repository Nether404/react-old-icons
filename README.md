# 🪟 React Old Icons

A comprehensive React component library featuring over **2,300 classic icons** from vintage operating systems and software. Includes iconic designs from Windows 95, 98, XP, Vista, 7, classic games, and retro applications. Perfect for retro-themed applications, nostalgic UIs, and preserving digital history.

## 🌐 Interactive Icon Browser

**[🔍 Browse All Icons →](https://gsnoopy.github.io/react-old-icons/)**

Explore all 2,300+ icons with our interactive browser featuring search, filtering, and one-click code copying.

## 📦 Installation

```bash
npm install react-old-icons
```

## 🚀 Usage

Import and use icons as React components with full TypeScript support:

```jsx
import { 
  Windows7Calculator, 
  Games1nsane, 
  SoftwarePhotoshop,
  Windows95Notepad 
} from 'react-old-icons';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <WindowsDesktopControlPanel size={32} />
      
      {/* With custom styling */}
      <DrvSpaceIcon 
        size={48} 
        className="my-icon" 
        style={{ margin: '10px' }} 
      />
      
      {/* Responsive sizing */}
      <WindowsRecycleBin size="2rem" />
      
      {/* With accessibility */}
      <Windows95Notepad 
        size={24} 
        alt="Classic Notepad icon" 
      />
    </div>
  );
}
```

## 🔧 Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels or CSS units |
| `className` | `string` | `undefined` | CSS class name for styling |
| `style` | `React.CSSProperties` | `undefined` | Inline styles object |
| `alt` | `string` | `undefined` | Alt text for accessibility |

## 📚 Available Icons

This library includes **2,300+ classic icons** organized by categories:

- **🎮 Games** - Classic game icons (1nsane, AfterDark, Age of Empires, Counter-Strike, etc.)
- **💻 Software** - Application icons (Photoshop, WinRAR, Media Player, Firefox, etc.)
- **🖥️ System** - System and utility icons from various operating systems
- **🪟 Windows Versions** - OS-specific icons from Windows 95, 98, XP, Vista, 7

### Icon Browser

Visit our [**Interactive Icon Browser**](https://your-github-pages-url/page/) to:
- 🔍 Search through all available icons
- 📋 Copy component code with one click
- 📁 Filter by category
- 📏 Preview different sizes
- ⌨️ Use keyboard shortcuts for quick navigation

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute:
- 🐛 **Report bugs** - Found an issue? Let us know!
- 💡 **Suggest features** - Have ideas for improvements?
- 📝 **Improve documentation** - Help make our docs better
- 🎨 **Add missing icons** - Know of classic icons we missed?
- 🧹 **Code improvements** - Optimize performance or add features
- 🏷️ **Recategorize icons** - Help improve icon categorization for better organization

### Getting Started:
1. Fork this repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test them
4. Submit a pull request with a clear description

### Icon Contributions:
If you have classic icons from vintage software or operating systems to contribute:
1. Ensure they're historically accurate and from the retro computing era
2. Provide source information when possible
3. Follow our naming conventions
4. Include appropriate metadata

### Icon Recategorization:
Feel free to contribute to better icon organization:
1. Review the `page/icons.jsonl` file for categorization improvements
2. Suggest more accurate categories for misclassified icons
3. Propose new category structures that better reflect software history
4. Help normalize icon names for improved searchability

## ⚖️ Legal & Usage

### 📋 License
This project is licensed under the **MIT License** for the code and tooling.

### 🚫 Commercial Use Restrictions
**This library is intended for non-commercial, educational, and historical preservation purposes only.**

### 🏢 Icon Ownership
- The icons in this collection are **property of their respective companies**
- Microsoft Corporation owns Windows-related icons
- Game developers and publishers own their respective game icons
- Software companies own their application icons
- Icons are used here for **historical preservation and educational purposes**

### 📚 Fair Use
This collection falls under fair use for:
- Historical preservation of digital artifacts
- Educational purposes about computing history
- Non-commercial personal projects
- Academic research and documentation

**Please respect intellectual property rights and use responsibly.**

## 🛠️ Technical Implementation

This project was built using a comprehensive data pipeline and modern web technologies:

### 🔄 Data Collection & Processing
- **🐍 Web Scraping**: Used Python with **BeautifulSoup** to systematically collect classic icons from sources
- **🤖 AI Processing**: Leveraged **Ollama** with **Llama 3.1 8B** locally for:
  - Converting original icon names into valid React component names
  - Intelligent categorization of icons by software type and era
  - Normalizing metadata for consistent search functionality

### 🖼️ Image Processing Pipeline
- **📏 Resizing**: Python scripts using **Pillow** to standardize icon dimensions
- **🗂️ Renaming**: Automated file renaming to match component naming conventions
- **⚡ WebP Conversion**: Optimized all images to WebP format for superior web performance
- **🎯 Cropping**: Removed excess whitespace while preserving icon integrity

### 💻 Technologies Used

| Technology | Purpose | Badge |
|------------|---------|-------|
| ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | Web scraping, AI processing, image processing | Core automation |
| ![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat&logo=ollama&logoColor=white) | Local LLM inference | AI naming & categorization |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Component library development | Type safety |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interactive browser | Icon preview |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Browser interface | Structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Retro styling | Presentation |
| ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white) | Desktop application | Native app development |
| ![BeautifulSoup](https://img.shields.io/badge/BeautifulSoup-3776AB?style=flat&logo=python&logoColor=white) | HTML parsing | Web scraping |
| ![Pillow](https://img.shields.io/badge/Pillow-3776AB?style=flat&logo=python&logoColor=white) | Image processing | Optimization |

## 🌟 Credits & Sources

### Acknowledgments
- 🙏 **Original creators** - The designers and companies who created these iconic interfaces
- 📦 **Old Windows Icons Tumblr** - For preserving and cataloging these digital artifacts
- 🏛️ **Digital preservation community** - For keeping computing history alive
- 🎨 **Icon designers** - Who created the visual language of early computing

### Historical Significance
These icons represent an important era in computing history:
- 🖥️ **Early GUI development** across different platforms (1990s-2000s)
- 🎮 **Golden age of PC gaming** and iconic game designs
- 💿 **Software packaging and branding evolution**
- 🎨 **Digital design language development** across various applications

## 🏛️ Digital Preservation

This project serves as:
- 📚 **Historical archive** of classic computer iconography
- 🎓 **Educational resource** for design and computing history
- 🔍 **Research tool** for UI/UX evolution studies
- 💾 **Cultural preservation** of digital heritage from various platforms

By preserving these icons, we maintain a visual record of how computer interfaces evolved across different operating systems and applications, influencing modern design.

## 🛠️ Building from Source

```bash
# Clone the repository
git clone https://github.com/gsnoopy/react-old-icons.git
cd react-old-icons

# Install dependencies
npm install

# Generate icon components
npm run generate

# Build the library
npm run build

# Run tests
npm test
```

## 📊 Project Stats

- 📦 **2,300+ icons** across multiple categories
- 🏷️ **TypeScript support** with full type definitions
- ⚡ **Tree-shakeable** - Only bundle icons you use
- 📱 **Responsive** - Works with any CSS unit
- ♿ **Accessible** - Screen reader friendly
- 🎨 **Retro-authentic** - Pixel-perfect historical accuracy

## 📞 Support & Contact

- 🐛 **Issues**: [GitHub Issues](https://github.com/gsnoopy/react-old-icons/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/gsnoopy/react-old-icons/discussions)
- 📧 **Email**: For sensitive matters, copyright concerns, or direct contact: **gustav.awk@gmail.com**

---

## 🏝️ In Memory

The favicon of this project features **Johnny Castaway**, the iconic screensaver character from the 1990s.

**Rest in peace, Shawn Bird** - the creative mind behind Johnny Castaway and many other digital experiences that defined an era of computing nostalgia.